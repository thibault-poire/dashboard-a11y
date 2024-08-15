import { Component, Input, OnInit } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';

import type { Level, Variant } from './title.types';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-title',
  standalone: true,
  templateUrl: 'title.component.html',
})
export class TitleComponent implements OnInit {
  @Input() level: Level = 1;
  @Input() variant: Variant = 'heading';

  classes: string = '';

  ngOnInit() {
    switch (this.variant) {
      case 'heading':
        this.classes = 'text-4xl font-bold';
        break;

      case 'heading-2':
        this.classes = 'font-bold';
        break;
    }
  }
}
