import { IconName } from '../../../core/types/icons.type';

export type Option = {
  action: () => void;
  icon_name?: IconName;
  id: string;
  label: string;
};
