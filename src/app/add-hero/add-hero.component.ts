import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../service/heroes.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  private _heroesServices : HeroesService; 
  constructor(private Myservice: HeroesService) {

this._heroesServices = Myservice;
   }

  ngOnInit() {
  }

  logText(Nom: string,Age: string, Pouvoir: string,Citation: string,UrlImage: string): void {
    console.log ({Nom});
    console.log ({Age});
    console.log ({Pouvoir});
    console.log ({Citation});
    console.log ({UrlImage});

  }

}
