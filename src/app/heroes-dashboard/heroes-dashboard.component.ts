import { Component, OnInit } from '@angular/core';
import { IHero } from "../hero"
import { HeroService } from "../service/hero.service"

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.less']
})
export class HeroesDashboardComponent implements OnInit {

  constructor(
    private heroService: HeroService
  ) { }

  heroes: IHero[] = []

  ngOnInit(): void {
    this.getHeroes()
    console.log(this.heroes)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5))
  }

}
