import { Component, OnInit } from '@angular/core'
import { Hero } from '../../types/Hero'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [],
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getHero()
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHeroById(id).subscribe((hero) => {
      this.hero = hero
    })
  }
}
