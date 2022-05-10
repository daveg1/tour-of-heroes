import { Component, OnInit, Input } from '@angular/core'
import { Hero } from 'src/app/types/Hero'

@Component({
  selector: 'app-hero-link',
  templateUrl: './hero-link.component.html',
  styleUrls: [],
})
export class HeroLinkComponent implements OnInit {
  @Input() hero?: Hero

  constructor() {}

  ngOnInit(): void {}
}
