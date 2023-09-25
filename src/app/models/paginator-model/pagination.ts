import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { PAGE_OPTIONS, PAGE_SIZE_OPTIONS } from '../../constants/common-info';

export class Pagination {
  API_EVENT = {
    ACTIVE: 'UNBLOCK',
    INACTIVE: 'BLOCK',
    DELETED: 'DELETED',
  };
  limit: number = PAGE_OPTIONS.limit
  total!: number;
  page: number = PAGE_OPTIONS.page
  // pageSize: number;
  search!: string;
  pageOptions = PAGE_SIZE_OPTIONS;
  filterOptions!: { [key: string]: string | Date };
  sort_by: any;
  sortType: any;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {
    // this.page
    // this.limit 
    // this.pageOptions = [10, 25, 50, 100];
  }

  get pageParams() {
    return {
      page: this.page,
      limit: this.limit,
    };
  }

  get searchFilter() {
    return { search: this.search };
  }

  get sortHeaders() {
    let obj: any = {};
    if (this.sort_by) {
      obj['sort_by'] = this.sort_by;
      obj['sort_order'] = this.sortType;
    }
    return obj;
  }

  confirmPageReload() {}

  allPrams() {
    return {
      ...this.pageParams,
      ...this.filterOptions,
      ...this.searchFilter,
      ...this.sortHeaders,
    };
  }

  /**
   * @description This function checks if page needs to be decreased on row deletion
   */
  validateDeletion() {
    if (this.total !== 1 && this.total - (this.page - 1) * this.limit === 1) {
      this.page--;
      this.total--;
    }
  }

  get validPageOptions() {
    const dataObj = this.allPrams();
    const mainOption: any = {};
    for (const i of Object.keys(dataObj)) {
      if (dataObj[i] || dataObj[i] === 0) {
        mainOption[i] = dataObj[i];
      }
    }
    return mainOption;
  }

  set pageOptionsOnChange(options: MatPaginator) {
    this.page = options.pageIndex + 1;
    this.limit = options.pageSize;
  }

  set sortOptions(sortOption: Sort) {
    if (sortOption.direction) {
      this.sort_by = sortOption.active;
      this.sortType = sortOption.direction === 'asc' ? 1 : -1;
    } else {
      this.sort_by = null;
      this.sortType = null;
    }
  }

  currentIndex(index: number): number {
    return (this.page - 1) * this.limit + index + 1;
  }
  resetPages() {
    this.total = 0;
    this.page = 1;
    // this.paginator.pageIndex = 0;
  }
  getSerialNumber(i: number) {
    return (
      i + (this.validPageOptions['page'] - 1) * this.validPageOptions['limit']
    );
  }

  changeDateFormat(data: any) {
    for (let item in data) {
      if (data[item] instanceof Date) {
        data[item] = data[item].toISOString();
      }
    }
    return data;
  }
}
