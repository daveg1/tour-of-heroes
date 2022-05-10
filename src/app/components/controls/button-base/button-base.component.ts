import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-button-base',
  templateUrl: './button-base.component.html',
  styleUrls: [],
})
export class ButtonBaseComponent implements OnInit {
  @Input() text?: string

  constructor() {}

  ngOnInit(): void {}
}
