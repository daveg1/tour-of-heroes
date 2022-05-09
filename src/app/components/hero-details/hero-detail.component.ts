import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../types/Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  ngOnInit(): void {}
}
