import { Component, OnInit } from '@angular/core';
import { IHero } from "../hero"
import { HeroService } from "../service/hero.service"

@Component({
  selector: 'app-heroes-main',
  templateUrl: './heroes-main.component.html',
  styleUrls: ['./heroes-main.component.less']
})
export class HeroesMainComponent implements OnInit {

  constructor(
    private heroService: HeroService // 注入点
  ) { }

  heroes: IHero[] = [];
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes
      })
  }

  selectedHero?: IHero;
  handleSelect(hero: IHero): void {
    this.selectedHero = hero
  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
