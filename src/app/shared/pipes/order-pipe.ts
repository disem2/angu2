import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'acOrderBy'})
export class OrderPipe implements PipeTransform {
  public transform(list: Object[], field: string): Object[] {
    return list.sort((a, b) => {
      return a[field] > b[field] ? 1 : -1;
    });
  }
}
