import { Component, OnInit } from '@angular/core'
import { Hero } from '../../types/Hero'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes.slice(1, 5)
    })
  }
}