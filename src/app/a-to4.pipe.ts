import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aToLetter'
})
export class ATo4Pipe implements PipeTransform {

  transform(value: string, arg: string=''): any {
    return value.replace("a", arg);
  }

}
