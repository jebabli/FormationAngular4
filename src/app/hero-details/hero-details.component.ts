import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import { GetAllHerosService } from '../service/heroes.service';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit,OnDestroy  {
  
  id: number;
  private sub: any;
  private _heroesServices : GetAllHerosService;
     
  private herodetail : any[];

  constructor(private route: ActivatedRoute,private Myservice: GetAllHerosService) {
    this._heroesServices = Myservice;  
  }

  ngOnInit() {
       
       this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];  
    });
 
    this._heroesServices.getHeroes().then(data => {     
     
        for (var i = 0; i < data.length; i++) {
         if (data[i].Id === this.id)
         {
          this.herodetail = data[i];
         }  
        }         
    });
  }
   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}