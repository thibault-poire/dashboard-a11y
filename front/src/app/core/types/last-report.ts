import { API } from './api.type';

export type LastReport = {
  total_errors: number;
} & Omit<API, '_id'>;
