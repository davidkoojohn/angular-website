import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Location } from "@angular/common"
import { IHero } from "../hero"
import { HeroService } from "../service/hero.service"

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.less']
})
export class HeroesDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
  ) { }

  hero?: IHero
  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id: number = Number(this.route.snapshot.paramMap.get("id"))
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back()
  }

}
