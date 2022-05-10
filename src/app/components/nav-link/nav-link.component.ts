import { Component, OnInit, Input } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css'],
})
export class NavLinkComponent implements OnInit {
  @Input() routerLink?: string
  @Input() text?: string

  constructor(private location: Location) {}

  ngOnInit(): void {}

  get path(): string {
    return this.location.path()
  }
}
