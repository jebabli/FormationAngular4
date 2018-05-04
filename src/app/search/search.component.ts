import { Component, OnInit } from '@angular/core';
import { GetAllHerosService } from '../Service/get-all-heros.service';
import { Hero } from '../home/hero';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Heros: Hero[];
  
  filter: Hero = new Hero();

  constructor(private HerosService: GetAllHerosService) { }

  ngOnInit() {

 // Load books from the books service on init
 this.HerosService.getAllHeroes().subscribe((result:any) => {
  this.Heros = result;
  });
  }

}
