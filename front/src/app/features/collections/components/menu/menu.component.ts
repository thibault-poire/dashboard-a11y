import { Component, Input } from '@angular/core';

import { MenuComponent as SharedMenuComponent } from '@shared/components/menu/menu.component';

import type { Option } from '@shared/components/menu/menu.type';

@Component({
  imports: [SharedMenuComponent],
  selector: 'app-menu',
  standalone: true,
  templateUrl: 'menu.component.html',
})
export class MenuComponent {
  @Input({ required: true }) collection_id: string | null = null;

  options: Option[] = [
    {
      id: crypto.randomUUID(),
      action: () => {},
      icon_name: 'edit',
      label: 'Edit collection',
    },

    {
      id: crypto.randomUUID(),
      action: () => {},
      icon_name: 'rocket-launch',
      label: 'Launch audit',
    },

    {
      id: crypto.randomUUID(),
      action: () => {},
      icon_name: 'delete',
      label: 'Delete collection',
    },
  ];
}
