import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection } from '../../../core/types/collection.type';
import { BehaviorSubject, switchMap, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CollectionsService {
  base_url = 'http://localhost:1337';

  collection$ = new BehaviorSubject<Collection[]>([]);

  constructor(private http: HttpClient) {}

  get_collections() {
    this.http
      .get<Collection[]>(`${this.base_url}/api/collections`)
      .subscribe((collections) => {
        this.collection$.next(collections);
      });
  }

  delete_coolection(collection_id: string) {
    this.http
      .delete(`${this.base_url}/api/collections/${collection_id}`)
      .pipe(
        switchMap(() => this.collection$),
        tap((collections) => {
          this.collection$.next(
            collections.filter(({ _id }) => {
              return _id !== collection_id;
            }),
          );
        }),
      )
      .subscribe();
  }
}
