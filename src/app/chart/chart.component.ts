// import { Customers } from './../interfaces/customers';
// import { Transactions } from './../interfaces/transactions';
// import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
// import { CustomerTransactionsDataService } from '../customer-transactions-data.service';
// import {Chart,registerables} from 'chart.js'

// Chart.register(...registerables);


// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.scss']
// })
// export class ChartComponent{
  // @Input() transactions: Transactions[] = [];
  // @Input() final:any=[];  // @Input() Customers=  [];
// @Input() sendCustomerID:Transactions[] = [];
// @Input() transactions: Transactions[] = [];
//   result1!:any[];
//   result2:any[]=[];
//   final:any=[];

//   customer:Customers[]=[];
//   transaction:Transactions[]=[];
  // transaction!:Transactions[];

  // chart:any=[];
  // chart:any;
  // constructor(private _service:CustomerTransactionsDataService)
  // {
    // Chart.register(...registerables);
    // this.renderChart();
  // }
  // ngAfterViewInit(): void {
  //   if (this.transactions.length > 0) {
  //     this.renderChart();
  //   }
  // }

  // renderChart():void{
  // 

  //   this.chart=new Chart('TransactionChart',this.config); //TransactionChart is id to use in html
    //////////////////////start
  //   this.chart = new Chart('TransacTransactionChart', {
  //   type: 'line',
  //   data: {
  //     labels: this.transaction,
  //     datasets: [{
  //       label: 'Transactions',
  //       data: [1,2,3],
  //       fill: false,
  //   borderColor: '#3252dfda',
  //   tension: 0.1
  //     }]
  //   }
  // });

    ///////////////////end
  // })

  
 
  // }
/*
  ngOnInit()
  {
    this._service.getCustomersData().subscribe(res=>{
      this.result1=res;
      console.log(this.result1)

      // this.customer=res.name;
      this.customer=res.map((id:any)=> id.id);
      console.log('customer id',this.customer);
      // console.log('cx id',this.customer);
      this.final = this.result1;
    });
    this._service.getTransactionsData().subscribe(res=>{
      this.result2=res;
      console.log(this.result2)
    this.transaction=this.result2;
    this.transaction=res.map((id:any)=> id.amount);
      console.log('transaction id',this.transaction);
      this.final = this.final.concat(this.result2);
      console.log(this.final)

      this.chart = new Chart('canvas',{
        type: 'line',
        data: {
          labels:this.customer,
          datasets: [{
            label: 'Total Transaction Amount',
            data: this.transaction,
            borderWidth:3,
            fill: false,
            backgroundColor: '#6e9999',
            borderColor:'#3e95cd'
          }]

        }
      })

    });

    // this.final=this.result1+this.result2;


    // this.final = this.result1.concat(this.result2);
  } */
   /* ngOnInit()
    {
      this._service.getCustomersData().subscribe(res=>{
        this.result1=res;
        console.log(this.result1)
  
        this.customer=res.name;
        this.customer=res.map((id:any)=> id.id);
        console.log('customer id',this.customer);
        // console.log('cx id',this.customer);
        this.final = this.result1;
      });

      this._service.getTransactionsData().subscribe(res=>{
        this.result2=res;
        console.log(this.result2)
      this.transaction=this.result2;
      this.transaction=res.map((id:any)=> id.amount);
      console.log('transaction amount',this.transaction);
      this.final = this.final.concat(this.result2);
      console.log("final",this.final)
  
        this.chart = new Chart('canvas',{
          type: 'line',
          data: {
            labels:this.transaction,
            datasets: [{
              label: 'Total Transaction Amount',
              data: this.final,
              borderWidth:3,
              fill: false,
              backgroundColor: '#6e9999',
              borderColor:'#3e95cd'
            }]
          }
        })
  
      });
  
      // this.final=this.result1+this.result2;
  
  
      // this.final = this.result1.concat(this.result2);
    }*/
// type:pie is a nice option too 

// @Input() sendCustomerID:Transactions[] = [];
// @Input() transactions: Transactions[] = [];
//   result1!:any[];
//   result2:any[]=[];
//   final:any=[];

//   customer:Customers[]=[];
//   transaction:Transactions[]=[];
//   // transaction!:Transactions[];

//   // chart:any=[];
//   chart:any;
//   constructor(private _service:CustomerTransactionsDataService)
//   {
//     // Chart.register(...registerables);
//     this.renderChart();
//   }
//   // ngAfterViewInit(): void {
//   //   if (this.transactions.length > 0) {
//   //     this.renderChart();
//   //   }
//   // }

//   renderChart():void{
//     this._service.getCustomersData().subscribe(res=>{
//       this.result1=res;
//       console.log(this.result1)

//       this.customer=res.name;
//       this.customer=res.map((id:any)=> id.id);
//       console.log('customer id',this.customer);
//       // console.log('cx id',this.customer);
//       this.final = this.result1;
//     });

//     this._service.getTransactionsData().subscribe(res=>{
//       this.result2=res;
//       console.log(this.result2)
//     this.transaction=this.result2;
//     this.transaction=res.map((id:any)=> id.amount);
//     console.log('transaction amount',this.transaction);
//     this.final = this.final.concat(this.result2);
//     console.log("final",this.final)

//     console.log(this.transactions,'what will happen');
//     console.log(this.transaction,'what will happen TOO');

//     this.chart=new Chart('TransactionChart',this.config); //TransactionChart is id to use in html
    //////////////////////start
  //   this.chart = new Chart('TransacTransactionChart', {
  //   type: 'line',
  //   data: {
  //     labels: this.transaction,
  //     datasets: [{
  //       label: 'Transactions',
  //       data: [1,2,3],
  //       fill: false,
  //   borderColor: '#3252dfda',
  //   tension: 0.1
  //     }]
  //   }
  // });

    ///////////////////end
  // })

  
//  
  // }
/*

      public config : any = {
        type: 'pie',
        
          // labels:this.transaction
          // labels:this.customer,

            labels:this.customer,
            data: this.transactions,
            backgroundColor: '#6e9999',
            borderColor:'#3e95cd',
         
          options: {
                aspectRatio:1,
                scales: {
                  y: {
                    beginAtZero: true
                  },
                },
              },
            };
      //   data:{
      //     labels:'this.transaction', //xaxis
      //     datasets: [{
      //       label: 'Total Transaction Amount',
      //       // label: this.transaction,
      //       data: this.customer,
      //               }],
      //   options: {
      //     aspectRatio:1,
      //     scales: {
      //       y: {
      //         beginAtZero: true
      //       },
      //     },
      //   },
      // };

      // ngOnInit(): void {
        
// }
}*/


// import { Customers } from './../interfaces/customers';
// import { Transactions } from './../interfaces/transactions';
// import { AfterViewInit, Component,Injector, Input, OnChanges, OnDestroy, OnInit,SimpleChanges } from '@angular/core';
// import { CustomerTransactionsDataService } from '../customer-transactions-data.service';
// import {Chart,registerables} from 'chart.js/auto'
// // CustomerTransactionsDataService

// Chart.register(...registerables);


// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.scss']
// })
// export class ChartComponent implements OnInit, OnChanges{

//   // chart:any=[];
//   public chart:any;
//   @Input() transactions: Transactions[] = [];
//   @Input() customers: Customers[] = [];

//   @Input() result1!:any[];
//   @Input() result2!:any[];
//   @Input() final!:any[];
//   // @Input() transactions: Transactions[] = [];


//   constructor(private _service: CustomerTransactionsDataService) {}

//   ngOnInit(): void {
//     this.loadLineData(); // Load data when the component initializes
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     // if (changes.defaultFromDate && changes.defaultToDate) {
//     //   this.loadLineData();
//     // }
//   }


//   loadLineData() {
//     // const fromDate = this.fromDate ?? DateTime.fromJSDate(new Date(this.defaultFromDate.toLocaleString())).plus({ hours: 12 });
//     // const toDate = this.toDate ?? DateTime.fromJSDate(new Date(this.defaultToDate.toLocaleString())).plus({ hours: 12 });

//         // this.transaction=res.map((id:any)=> id.amount);
//         // this.customer=res.map((id:any)=> id.id);  //   this.transaction=res.map((id:any)=> id.amount);
      

//         this._service.getCustomersData().subscribe(res=>{
//               this.result1=res;
//               console.log(this.result1)
        
//               this.customers=res.name;
//               console.log('customer id',this.customers);
//               this.customers=res.map((id:any)=> id.id);
//               // console.log('cx id',this.customer);
//               this.final = this.result1;
//             });
        
//             this._service.getTransactionsData().subscribe(res=>{
//               this.result2=res;
//               console.log(this.result2)
//             this.transactions=this.result2;
//             this.transactions=res.map((id:any)=> id.amount);
//             // this.customers=res.map((id:any)=> id.id);
        
//             console.log('transaction amount',this.transactions);
//             this.final = this.final.concat(this.result2);
//             console.log("final",this.final)
        
//             console.log(this.transactions,'what will happen');
//             // console.log(this.transaction,'what will happen TOO');


//       this.updateChart(this.transactions);
//     });
//   }


  

//   updateChart(transactions: any[]) {
//     if (this.chart) {
//       this.chart.destroy();
//     }
//     this.createChart(transactions);
//   }

//   createChart(transactions: any[]) {
//     if (this.chart) {
//       this.chart.destroy();
//     }
  
  
//     const canvasElement = document.getElementById('sendCustomerID') as HTMLCanvasElement;
//     if (canvasElement) {
//       this.chart = new Chart(canvasElement, {
//         type: 'line',
//         data: {
//           labels: this.customers,
//           datasets: transactions,
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           scales: {
//             y: {
//               beginAtZero: true,
//               ticks: {
//                 stepSize: 1,
//                 callback: function(value) {
//                   return Number.isInteger(value) ? value : null;
//                 }
//               },
//               grid: {
//                 color: 'rgba(0, 0, 0, 0.1)',
//               },
//               suggestedMin: 0, // Ensures the minimum value starts from 0
//               suggestedMax: 10, // Adjust based on your data range
//             },
//             x: {
//               grid: {
//                 color: 'rgba(0, 0, 0, 0.1)',
//               },
//               ticks: {
//                 maxRotation: 45,
//                 minRotation: 45,
//               },
//             },
//           },
//           plugins: {
//             title: {
//               display: true,
//               text:' this is a txt',
//               padding: {
//                 top: 10,
//                 bottom: 20 // Adjusted bottom padding
//               },
//               font: {
//                 size: 14 // Adjust the font size here
//               }
//             },
//             tooltip: {
//               backgroundColor: 'rgba(0, 0, 0, 0.7)',
//               bodyFont: {
//                 size: 14,
//               },
//               titleFont: {
//                 size: 16,
//                 weight: 'bold',
//               },
//             },
//             legend: {
//               labels: {
//                 font: {
//                   size: 14,
//                 },
//               },
//             },
//           },
//         },
//       });
//     } else {
//       console.error('Canvas element with ID "LineChart" not found.');
//     }
//   }

// }



import { Customers } from './../interfaces/customers';
import { Transactions } from './../interfaces/transactions';
import { AfterViewInit, Component,Injector, Input, OnChanges, OnDestroy, OnInit,SimpleChanges } from '@angular/core';
import { CustomerTransactionsDataService } from '../customer-transactions-data.service';
import {Chart,registerables} from 'chart.js/auto'
// CustomerTransactionsDataService

Chart.register(...registerables);


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit, OnChanges, OnDestroy {
    @Input() transactions: Transactions[] = [];
  
    chart: Chart | null = null; 
  
    constructor(private _CustomerTransactionsDataService:CustomerTransactionsDataService) {}
  
    ngAfterViewInit(): void {
      if (this.transactions.length > 0) {
        this.renderChart();
      }
    }
  
    ngOnChanges(): void {
      if (this.chart) {
        this.chart.destroy(); 
      }
      if (this.transactions.length > 0) {
        this.renderChart();
      }
    }
  
    ngOnDestroy(): void {
      if (this.chart) {
        this.chart.destroy(); // Ensure chart is destroyed when component is destroyed
      }
    }
  
    renderChart(): void {
      const labels = this.transactions.map(transaction => transaction.date);
      const data = this.transactions.map(transaction => transaction.amount);
      console.log(this.transactions)
      console.log(labels)
      console.log(data)
    
    
      this.chart = new Chart('Transactions', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Transactions',
            data: data,
        borderColor: 'blue',
          }]
        }
      });
    }
  
  }
  
  