import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBytransactionamount'
})
export class SearchBytransactionamountPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  //   transform(final: any[],term:any ): any[] {
  //     term = term.toString;
  //   return final.filter((amount)=> amount.amount.stringify( term ).toLowerCase().includes(term) );
  // }

  // transform(final: any[],term?:number ): any[] {
    
    // if(!final) return null;
    // if(!term) return final;

    // term=term.toString();
    // term=term.toLowerCase();


    // return final.filter(function(t)
    // {
    //         return JSON.stringify(t).toLowerCase().includes(term);
    // } );
    // return final.filter(t => {
    //   return final.includes(term);
    // });


    // transform(final: any[],term:number ): any[] {
    //   return final.filter((name)=> name.amount.includes( term )    );
    // }
    transform(final: any[],term:number ): any[] {
    return final.filter((am)=> am.amount.includes( term ));
    }
  }

// }
