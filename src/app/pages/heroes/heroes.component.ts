import { Component, OnInit } from '@angular/core'
import { Hero } from '../../types/Hero'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes
    })
  }

  add(name: string) {
    name = name.trim()

    if (!name) {
      return
    }

    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero)
    })
  }

  remove(hero: Hero) {
    this.heroes = this.heroes.filter((h) => h !== hero)
    this.heroService.removeHero(hero.id).subscribe()
  }
}
