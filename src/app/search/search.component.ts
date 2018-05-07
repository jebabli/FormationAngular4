import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../service/heroes.service';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private _heroesServices : HeroesService;
  private _Heros : Hero[];  
  filter: Hero = new Hero();

  constructor(private Myservice: HeroesService ) { 
    this._heroesServices = Myservice;
   }
 
  ngOnInit() {     
    this._heroesServices.getHeroes().then(data => {
    this._Heros = data;       
  }); 
  }  

}
