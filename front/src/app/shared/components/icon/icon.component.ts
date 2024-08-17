import { Component, Input } from '@angular/core';

import { IconName } from '../../../core/types/icons.type';

@Component({
  selector: 'app-shared-icon',
  standalone: true,
  templateUrl: 'icon.component.html',
})
export class IconComponent {
  @Input({ required: true }) icon_name: IconName | null = null;
}
