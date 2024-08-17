import { API } from './api.type';
import { LastReport } from './last-report';
import { Url } from './url.type';

export type Collection = {
  last_report: LastReport;
  name: string;
  urls: Url[];
} & API;
