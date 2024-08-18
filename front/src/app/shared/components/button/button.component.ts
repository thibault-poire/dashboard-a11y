import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  imports: [NgTemplateOutlet, RouterLink],
  selector: 'app-shared-button',
  standalone: true,
  templateUrl: 'button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() url?: string;

  @Output() clicked = new EventEmitter<void>();

  classes: string;

  ngOnInit() {
    this.classes =
      'flex px-6 py-3 leading-6 text-tertiary bg-button-container-primary rounded-full transition-colors hover:bg-button-container-primary-hover';
  }

  handle_click() {
    this.clicked.emit();
  }
}
