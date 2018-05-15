
import {  Component,  OnInit,  OnDestroy} from '@angular/core';
import {  ActivatedRoute} from '@angular/router';
import {  HomeComponent} from '../home/home.component';
import {  HeroesService} from '../service/heroes.service';
import {  Hero} from '../hero/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit, OnDestroy {

  private id: number;
  private sub: any;
  private _heroesServices: HeroesService;
  private herodetail: Hero[];

  constructor(private route: ActivatedRoute, private Myservice: HeroesService) {
      this._heroesServices = Myservice;
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.id = +params['id'];
      });

      this._heroesServices.getHeroById(this.id).
      subscribe(data => {
          if (data) {
              this.herodetail = data;
          }
      }, );
  }
  ngOnDestroy() {
      this.sub.unsubscribe();
  }
}