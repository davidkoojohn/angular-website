import { Component, OnInit } from '@angular/core';
import { IHero } from "../hero"
import { HEROES } from "../mock-heroes"

@Component({
  selector: 'app-heroes-main',
  templateUrl: './heroes-main.component.html',
  styleUrls: ['./heroes-main.component.less']
})
export class HeroesMainComponent implements OnInit {

  constructor() { }

  heroes: IHero[] = HEROES;

  selectedHero?: IHero;
  handleSelect(hero: IHero): void {
    this.selectedHero = hero
    console.log(this.selectedHero)
  }

  ngOnInit(): void {
  }

}
