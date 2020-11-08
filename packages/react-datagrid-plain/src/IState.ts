import { SortDirection } from '@mvp-react/react-table-plain';

export interface IState {
  rowsPerPage: number;
  page: number;
  total: number;
  orderBy?: string;
  sort?: SortDirection;
  filter?: { [key: string]: any };
}
