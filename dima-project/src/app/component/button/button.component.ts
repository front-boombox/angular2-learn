import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() titleButton: string = 'Click';
  isButton: boolean;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.isButton = true;
    }, 1500);
  }

  showMessage(e) {
    e.target.classList.toggle('clicked');
    alert();
  }
}
