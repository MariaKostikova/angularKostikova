import { Pipe, PipeTransform } from '@angular/core';
import { Human } from '../app.component';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(people: Human[], search: string = ''): Human[] {
    if (!search.trim()) {
      return people;
    }
    return people.filter((hum) => {
      return hum.nameHunam.includes(search);
    });
  }
}
