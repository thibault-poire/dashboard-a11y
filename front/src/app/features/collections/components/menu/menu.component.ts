import { Component, Input, ViewChild } from '@angular/core';
import { CollectionsService } from '@features/collections/services/collections';

import { MenuComponent as SharedMenuComponent } from '@shared/components/menu/menu.component';

import type { Option } from '@shared/components/menu/menu.type';

@Component({
  imports: [SharedMenuComponent],
  selector: 'app-menu',
  standalone: true,
  templateUrl: 'menu.component.html',
})
export class MenuComponent {
  @ViewChild(SharedMenuComponent) shared_menu: SharedMenuComponent;

  @Input({ required: true }) collection_id: string;

  constructor(private collections_service: CollectionsService) {}

  options: Option[] = [
    {
      id: crypto.randomUUID(),
      action: () => this.edit_colletion(this.collection_id),
      icon_name: 'edit',
      label: 'Edit collection',
    },

    {
      id: crypto.randomUUID(),
      action: () => this.audit_collection(this.collection_id),
      icon_name: 'rocket-launch',
      label: 'Launch audit',
    },

    {
      id: crypto.randomUUID(),
      action: () => this.delete_collection(this.collection_id),
      icon_name: 'delete',
      label: 'Delete collection',
    },
  ];

  delete_collection(collection_id: string) {
    this.collections_service.delete_coolection(collection_id);
    this.shared_menu.close_menu();
  }

  edit_colletion(collection_id: string) {
    console.log(collection_id);
    this.shared_menu.close_menu();
  }

  audit_collection(collection_id: string) {
    console.log(collection_id);
    this.shared_menu.close_menu();
  }
}
