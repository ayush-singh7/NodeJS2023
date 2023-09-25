import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendarPipe'
})
export class CalendarPipePipe implements PipeTransform {

  transform(value: unknown): any {
    console.log(value,'alto')

    return value;
  }

}
