import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'button-base',
  templateUrl: './button-base.component.html',
  styleUrls: [],
})
export class ButtonBaseComponent implements OnInit {
  @Input() text?: string
  @Input() type = 'button'

  constructor() {}

  ngOnInit(): void {}
}
