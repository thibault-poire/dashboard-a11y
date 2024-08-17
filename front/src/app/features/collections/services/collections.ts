import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection } from '../../../core/types/collection.type';

@Injectable({ providedIn: 'root' })
export class CollectionsService {
  constructor(private http: HttpClient) {}

  get_collections() {
    return this.http.get<Collection[]>('http://localhost:1337/api/collections');
  }
}
