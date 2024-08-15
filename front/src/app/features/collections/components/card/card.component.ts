import { Component, Input } from '@angular/core';

import { TitleComponent } from '../../../../shared/components/title/title.component';

@Component({
  imports: [TitleComponent],
  selector: 'app-card',
  standalone: true,
  templateUrl: 'card.component.html',
})
export class CardComponent {
  @Input() errors: number | null = null;
  @Input({ required: true }) name: string = '';
  @Input() urls: number | null = null;
  @Input() last_update: string = '';
}
