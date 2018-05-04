import { Component, OnInit } from '@angular/core';
import { GetAllHerosService } from '../Service/get-all-heros.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  private _heroesServices : GetAllHerosService; 
  constructor(private Myservice: GetAllHerosService) {

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
