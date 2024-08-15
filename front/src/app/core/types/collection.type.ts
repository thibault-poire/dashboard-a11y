import { API } from './api.type';
import { Url } from './url.type';

export type Collection = {
  name: string;
  urls: Url[];
} & API;
