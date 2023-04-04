import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encode'
})
export class EncodePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return '';
  }

}
