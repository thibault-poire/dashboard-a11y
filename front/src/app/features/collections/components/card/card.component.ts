import { Component, Input, OnInit } from '@angular/core';

import { formatDistanceToNow } from 'date-fns';

import { TitleComponent } from '@shared/components/title/title.component';
import { MenuComponent } from '@features/collections/components/menu/menu.component';

@Component({
  imports: [MenuComponent, TitleComponent],
  selector: 'app-card',
  standalone: true,
  templateUrl: 'card.component.html',
})
export class CardComponent implements OnInit {
  @Input({ required: true }) collection_id: string | null = null;
  @Input() errors: number | null = null;
  @Input({ required: true }) name: string | null = null;
  @Input() urls: number | null = null;
  @Input() updated_at: string | null = null;

  time_value: string = '-';
  time_text: string = 'last report';

  ngOnInit() {
    if (!this.updated_at) {
      return;
    }

    const [value, ...text] = formatDistanceToNow(this.updated_at, {
      addSuffix: true,
    })
      .replace(/(about|over|almost)\s/, '')
      .split(' ');

    this.time_value = value;
    this.time_text = text.join(' ');
  }
}
