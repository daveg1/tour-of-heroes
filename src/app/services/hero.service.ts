import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Hero } from '../types/Hero'

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private readonly heroesUrl = 'api/heroes'

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((values) => this.log(`fetched heroes len=${values.length}`)),
      catchError(this.handleError<Hero[]>('getHeroes', [])),
      // catchError(this.handleHeroError),
    )
  }

  getHeroById(id: number): Observable<Hero | undefined> {
    const url = `${this.heroesUrl}/${id}`

    return this.http.get<Hero>(url).pipe(
      tap((value) => this.log(`fetched hero id=${value.id}`)),
      catchError(this.handleError<Hero>('getHeroById')),
    )
  }

  private log(message: string) {
    this.messageService.add(`[HeroService] ${message}`)
  }

  /*
  private handleHeroError(error: any): Observable<Hero[]> {
    console.error(error)

    this.log(`getHeroes failed: ${error.body.error}`)

    return of([])
  }
  */

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)

      this.log(`${operation} failed: ${error?.body?.error ?? error?.message}`)

      return of(result as T)
    }
  }
}
