
import { Hero } from '../hero/hero'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {  

constructor(private http: Http) { } 

getHeroes() : Observable <Hero[]> {
  return this.http.get("./assets/data/Heros.json")
    .map((res : Response) => res.json())
    .catch((error : any) => Observable.throw('Server error'));
  } 

getHeroById(id :number) : Observable <Hero[]> {
  return this.http.get("./assets/data/Heros.json")
    .map((res : Response) => res.json().filter(hero => hero.Id === id )[0])
    .catch((error : any) => Observable.throw('Server error'));
  } 
}