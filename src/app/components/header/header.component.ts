import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit {
  @Input() title?: string
  showMessages = false

  constructor() {}

  ngOnInit(): void {}

  openMessages() {
    this.showMessages = !this.showMessages
  }
}
