import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../hero/hero';

@Pipe({
    name: 'herofilter',
    pure: false
})
 
export class HeroFilterPipe implements PipeTransform {   
  transform(items: Hero[], filter: Hero): Hero[] {    
    
    if (!items || !filter ) {
          return items
  }            
    return items.filter(item => item.Nom.toLowerCase().indexOf(filter["Nom"]) !== -1);
  }    
}