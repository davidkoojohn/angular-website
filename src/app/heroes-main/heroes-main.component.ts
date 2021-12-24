import { Component, OnInit } from '@angular/core';
import { IHero } from "../hero"
import { HeroService } from "../service/hero.service"
import { MessageService } from "../service/message.service"

@Component({
  selector: 'app-heroes-main',
  templateUrl: './heroes-main.component.html',
  styleUrls: ['./heroes-main.component.less']
})
export class HeroesMainComponent implements OnInit {

  constructor(
    private heroService: HeroService, // 注入点
    private messageService: MessageService
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
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
