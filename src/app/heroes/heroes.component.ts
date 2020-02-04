import { Component, OnInit } from '@angular/core';
// imports hero class with data
import { Hero } from '../hero';

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
  constructor() {
  }

  ngOnInit() {
  }

}
