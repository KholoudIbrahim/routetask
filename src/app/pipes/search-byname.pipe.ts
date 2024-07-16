import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByname'
})
export class SearchBynamePipe implements PipeTransform {

  transform(final: any[],term:string ): any[] {
    return final.filter((name)=> name.name.toLowerCase().includes( term.toLowerCase() )    );
  }

}


