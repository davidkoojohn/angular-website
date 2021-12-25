import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs"
import { debounceTime, switchMap, distinctUntilChanged } from "rxjs/operators"
import { IHero } from "../hero"
import { HeroService } from "../service/hero.service"

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.less']
})
export class HeroesSearchComponent implements OnInit {

  constructor(
    private heroService: HeroService
  ) { }

  heroes$!: Observable<IHero[]>
  private searchTerms = new Subject<string>()

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(), // 过滤条件变化时才发送请求
      switchMap((term: string) => {
        return this.heroService.searchHeroes(term)
      })
    )
  }

  search(term: string): void {
    this.searchTerms.next(term)
  }
}
