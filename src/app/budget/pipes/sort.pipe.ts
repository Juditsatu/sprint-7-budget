import { Pipe, PipeTransform } from '@angular/core';
import { Budget } from '../interface/budget.interface';

@Pipe({
  name: 'ordenar'
})
export class SortPipe implements PipeTransform {

  transform( list: Budget[], sortBy: string = 'no value' ): Budget[] {
    
    switch(sortBy) {
      case 'budgetName':
        return list.sort( (a, b) => (a.budgetName > b.budgetName ) ? 1 : -1);
      case 'clientName':
        return list.sort( (a, b) => (a.clientName > b.clientName ) ? 1 : -1);
      case 'date':
        return list.sort( (a, b) => (a.date > b.date ) ? 1 : -1);
      default: 
        return list;
    }

  }

}
