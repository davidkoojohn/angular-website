import { Component, OnInit } from '@angular/core';
import { IHero } from "../hero"

@Component({
  selector: 'app-heroes-main',
  templateUrl: './heroes-main.component.html',
  styleUrls: ['./heroes-main.component.less']
})
export class HeroesMainComponent implements OnInit {

  constructor() { }

  hero: IHero = {
    id: 111,
    name: 'Windstorm'
  };

  ngOnInit(): void {
  }

}
