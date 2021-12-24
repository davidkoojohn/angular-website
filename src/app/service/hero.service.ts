import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs"
import { IHero } from "../hero"
import { HEROES } from "../mock-heroes"

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes(): IHero[] {
  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES) // of(HEROES) 会返回一个 Observable<Hero[]>
    return heroes
  }
}
