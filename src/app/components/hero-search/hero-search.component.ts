import { Component, OnInit } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs'
import { Hero } from '../../types/Hero'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [],
})
export class HeroSearchComponent implements OnInit {
  private searchTerms = new Subject<string>()
  heroes$!: Observable<Hero[]>

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // Wait 300ms after each keystroke before considering term
      debounceTime(300),

      // Ignore new term if equal to prev term
      distinctUntilChanged(),

      // Switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHero(term)),
    )
  }

  search(term: string) {
    // Push new item into observable stream
    this.searchTerms.next(term)
  }
}
