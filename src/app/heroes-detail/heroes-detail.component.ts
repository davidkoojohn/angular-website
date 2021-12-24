import { Component, OnInit, Input } from '@angular/core';
import { IHero } from "../hero"

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.less']
})
export class HeroesDetailComponent implements OnInit {

  constructor() { }

  @Input()
  hero?: IHero

  ngOnInit(): void {
  }

}
