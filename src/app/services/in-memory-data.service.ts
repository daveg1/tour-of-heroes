import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from '../types/Hero'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      heroes: [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' },
      ],
    }
  }

  genId(heroes: Hero[]): number {
    if (!heroes.length) {
      return 11
    }

    // Get highest ID and +1 to it
    return Math.max(...heroes.map((hero) => hero.id)) + 1
  }
}
