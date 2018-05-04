import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../hero/hero';

@Pipe({
    name: 'herofilter',
    pure: false
})

export class HeroFilterPipe implements PipeTransform {
  transform(items: Hero[], filter: Hero): Hero[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Hero) => this.applyFilter(item, filter));
  }
   
  applyFilter(hero: Hero, filter: Hero): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (hero[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (hero[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}