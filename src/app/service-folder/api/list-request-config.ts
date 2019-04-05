import {SortOrderEnum} from './sort-order-enum';

export class ListRequestConfig {
  count = -1;
  filter: string = null;
  filterPropertyName: string = null;
  offset = 0;
  paginated = true;
  sortOrder: SortOrderEnum = 0;
  sortPropertyName: string = null;

  constructor(data?: ListRequestConfig | any) {
    if (data) {
      for (const key in data) {
        if (this.hasOwnProperty(key)) {
          this[key] = data[key];
        }
      }
    }
  }
}
