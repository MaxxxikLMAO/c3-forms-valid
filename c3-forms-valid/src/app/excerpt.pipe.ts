import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, limit: number, dotsRemainder: string): string {

     const valWithRem = value.length + dotsRemainder.length;

     if (value.length < limit) { return value; }
      else if (dotsRemainder.length >= limit) { return dotsRemainder.substring(0, limit); }
      else if (valWithRem > limit) {return value.substring(0, limit - dotsRemainder.length) + dotsRemainder; }
 }
     }

