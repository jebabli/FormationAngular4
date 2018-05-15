import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { Injectable } from '@angular/core';
import { HeroesService } from '../service/heroes.service';
import { Hero } from '../hero/hero';
 

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.css'] ,
  providers: [HeroesService] 
}) 
 

export class HomeComponent implements OnInit {
   
 private _heroesServices : HeroesService;
 private _Heros : Hero[];
 private NumberOfHeros :number ;

    constructor(private Myservice: HeroesService ) { 
      this._heroesServices = Myservice;
     }
   
    ngOnInit() {     
      this._heroesServices.getHeroes().subscribe(data => {
        this._Heros = data;
        this.NumberOfHeros = data.length;
    }); 
    }  
  }

   
 