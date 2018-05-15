import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { SearchComponent } from './search/search.component';
import { HeroesService } from './service/heroes.service';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroFilterPipe } from './search/hero-filter.pipe'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddHeroComponent,
    SearchComponent,
    HeroDetailsComponent,
    HeroFilterPipe 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : 'home', component : HomeComponent},     
      {path : 'search', component : SearchComponent},     
      {path : 'add-hero', component : AddHeroComponent},     
      {path : 'hero-details/:id', component : HeroDetailsComponent},     
      {path : '', component : HomeComponent},
      {path : '**', component : HomeComponent}
    ])
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
