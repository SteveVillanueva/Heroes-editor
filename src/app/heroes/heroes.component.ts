import { Component, OnInit } from '@angular/core';
// imports hero class with data
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // create a hero object
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // exposes array for binding
  heroes = HEROES;
  // onclick statement from heroes.component.html
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() {
  }

  ngOnInit() {
  }

}
