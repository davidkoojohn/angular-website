import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs"
import { catchError, tap } from "rxjs/operators"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { IHero } from "../hero"
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private heroesUrl = "//localhost:3000/heroes"

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }

  getHeroes(): Observable<IHero[]> {
    return this.http.get<IHero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log("fetched heroes")),
        catchError(this.handleError<IHero[]>("getHeroes", []))
      )
  }

  searchHeroes(term: string): Observable<IHero[]> {
    if (!term.trim()) {
      return of([])
    }
    return this.http.get<IHero[]>(`${this.heroesUrl}/?q=${term}`)
      .pipe(
        tap(x => x.length
          ? this.log(`found heroes matching "${term}"`)
          : this.log(`no heroes matching "${term}"`)),
        catchError(this.handleError<IHero[]>("searchHeroes", []))
      )
  }

  getHero(id: number): Observable<IHero> {
    return this.http.get<IHero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<IHero>(`getHero id=${id}`))
      )
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  updateHero(hero: IHero): Observable<any> {
    return this.http.put(`${this.heroesUrl}/${hero.id}`, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>(`updateHero`))
      )
  }

  addHero(hero: IHero): Observable<IHero> {
    return this.http.post<IHero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: IHero) => this.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<IHero>(`addHero`))
      )
  }

  deleteHero(id: number): Observable<IHero> {
    return this.http.delete<IHero>(`${this.heroesUrl}/${id}`, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted hero id=${id}`)),
        catchError(this.handleError<IHero>('deleteHero'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
