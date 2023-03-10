import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todosCounter'
})
export class TodosCounterPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    switch(args[0]) {
      case 'cellRecords':
        return value == 0 ? 'no records found' : value.toString() + ' records found';
      case 'slideRecords':
        return value == 0 ? 'You have no records yet' : value.toString() + ' records were found';
    }
    return 'TodosCounterPipe: Unknown argument. Be sure to add the new one.';
  }
}
