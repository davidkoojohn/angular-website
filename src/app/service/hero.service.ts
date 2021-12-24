import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs"
import { IHero } from "../hero"
import { HEROES } from "../mock-heroes"
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  // getHeroes(): IHero[] {
  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES) // of(HEROES) 会返回一个 Observable<Hero[]>
    this.messageService.add('HeroService: fetched heroes, time'+Date.now())
    return heroes
  }

  getHero(id: number): Observable<IHero> {
    const hero = HEROES.find(item => item.id === id)!
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero)
  }
}
