import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalCa'
})
export class TotalCaPipe implements PipeTransform {

  transform(val: number , tva : number): number {
    return val + val*tva/100 ;
  }

}
