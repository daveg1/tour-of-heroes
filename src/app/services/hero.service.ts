import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Hero } from '../types/Hero';
import { HEROES } from '../mock/heroes';

const TAG = '[HeroService]';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const message = this.messageService.format(TAG, 'Fetched heroes');
    this.messageService.add(message);
    return of(HEROES);
  }
}
