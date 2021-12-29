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
    this.route.paramMap.subscribe(params => {
      console.log(params.get("id"))
    })
    this.getHero()
  }

  getHero(): void {
    const id: number = Number(this.route.snapshot.paramMap.get("id"))
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack())
    }
  }

  goBack(): void {
    this.location.back()
  }

}
