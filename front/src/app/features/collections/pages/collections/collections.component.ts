import { Component, Input, OnInit } from '@angular/core';

import { CollectionsService } from '../../services/collections';

import { CardComponent } from '../../components/card/card.component';
import { LayoutComponent } from '../../../../shared/components/pages/layout/layout.component';
import { TitleComponent } from '../../../../shared/components/title/title.component';
import { Collection } from '../../../../core/types/collection.type';

@Component({
  imports: [TitleComponent, CardComponent, LayoutComponent],
  selector: 'app-collections',
  standalone: true,
  templateUrl: 'collections.component.html',
})
export class CollectionsComponent implements OnInit {
  @Input() collections: Collection[] | null = null;

  constructor(private collections_service: CollectionsService) {}

  ngOnInit() {
    this.collections_service.get_collection().subscribe((collections) => {
      console.log(collections);

      this.collections = collections;
    });
  }
}
