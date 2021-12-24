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
    private heroService: HeroService,
  ) { }

  heroes: IHero[] = [];

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes
      })
  }

  add(name: string): void {
    name = name.trim()
    if (!name) return
    this.heroService.addHero({ name } as IHero)
      .subscribe(hero => this.heroes.push(hero))
  }

  delete(hero: IHero): void {
    this.heroService.deleteHero(hero.id)
      .subscribe(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
      })
  }

}
