import { Component, OnInit } from '@angular/core';
import { Hero } from '../../types/Hero';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

const TAG = '[HeroesComponent]';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero) {
    const message = this.messageService.format(TAG, 'Selected hero', hero.id);
    this.messageService.add(message);
    this.selectedHero = hero;
  }
}
