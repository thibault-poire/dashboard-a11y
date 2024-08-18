import { Component, OnInit } from '@angular/core';

import { CollectionsService } from '@features/collections/services/collections';

import { CardComponent } from '@features/collections/components/card/card.component';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { ButtonComponent } from '@shared/components/button/button.component';

import type { Collection } from '@core/types/collection.type';

@Component({
  imports: [ButtonComponent, CardComponent, LayoutComponent, TitleComponent],
  selector: 'app-collections',
  standalone: true,
  templateUrl: 'collections.component.html',
})
export class CollectionsComponent implements OnInit {
  collections: Collection[];

  constructor(private collections_service: CollectionsService) {}

  ngOnInit() {
    this.collections_service.get_collections();

    this.collections_service.collection$.subscribe((collections) => {
      this.collections = collections;
    });
  }
}
