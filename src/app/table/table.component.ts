import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerTransactionsDataService } from '../customer-transactions-data.service';
import { Customers } from '../interfaces/customers';
import { MatTableDataSource } from '@angular/material/table';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {Transactions} from '../interfaces/transactions'

import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  customers: Customers[] = [];
  transactions: Transactions[] = [];

  // searchedCx: Customers[] = [];
  cxSelectedTransaction: Transactions[] = [];

  searchInput:string=''


  //name search pipe
  termInput:string = '';
  
  //transaction amount search pipe
  amountInput!:number;

  // colspan binding
  count:number=2;

  result1!:any[];
  result2!:any[];
  final!:any[];

//binding with chart
sendCustomerID:Transactions[] = [];


  customerTransactionTotal: { [key: string]: number } = {};
  customerTransactionSearch:  any ;
  
  constructor(
    private _CustomerTransactionsDataService:CustomerTransactionsDataService
  ) { }

  ngOnInit(): void {
    this._CustomerTransactionsDataService.getCustomersData().subscribe(data => {
      this.customers = data;
      // this.searchedCx = this.customers;
      this.calTotalTransaction();
      this.final = this.customers;
      console.log(this.final);

    });

    this._CustomerTransactionsDataService.getTransactionsData().subscribe(data => {
      this.transactions = data;
      // this.transactionsDate = data.date;
      this.calTotalTransaction();
      this.final = this.final.concat(this.transactions);
      console.log(this.final);

    });
  }
  
  calTotalTransaction(): void {
    this.customerTransactionTotal = this.customers.reduce((i, customer) => {
      const accumulatedAmount = this.transactions
        .filter(transaction => transaction.customer_id === +customer.id)
        .reduce((total, transaction) => total + transaction.amount, 0);
      i[customer.id] = accumulatedAmount;
      return i;
      // this.drawTd( i[customer.id]);
    }, {} as { [key: string]: number });
  }


  // searchCustomers()
  // {
  //   const amount = this.amountInput;
  //   this.amountInput = this.final.filter(customer => customer.amount.includes(amount));
  // }

  searchCustomers()
  {
    // const amount = this.amountInput;
    // this.amountInput = this.final.filter(customer => customer.amount.includes(amount));

    // this.customerTransactionSearch = this.final.filter(transaction => transaction === transaction.amount);
    
      return this.final.filter((name)=> name.amount.includes( this.amountInput ));
      // this.drawTd( i[customer.id]);
  }
  


  selectCustomer(customerId: string):void{
    console.log("cx id",customerId);
    // this.sendCustomerID=customerId;
    this.sendCustomerID=this.transactions.filter(transaction => transaction.customer_id === +customerId);
    // this.cxSelectedTransaction = this.final.filter(final => final.customer_id === customerId);
    console.log(this.sendCustomerID)
    // return this.sendCustomerID;
  }

  isShow = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  isGraph = false;

  graphDisplay() {
    this.isGraph = !this.isGraph;
  }
}
