
import { Hero } from '../hero/hero'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';





@Injectable()
export class HeroesService {  

constructor(private http: Http) { }
 
getHeroes() : any {
  return this.http.get("./assets/data/Heros.json")
 .toPromise()
 .then((response) => {
   return response.json();
 }).catch((err) => {
 console.log(err);
}); 
}  

// getAllHeroes() : Observable <Hero[]> {
//   return this.http.get("./assets/data/Heros.json")
//     .map((res : Response) => res.json())
//     .catch((error : any) => Observable.throw('Server error'));
// }

}