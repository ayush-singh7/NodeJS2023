import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  @Input() placeholder!: string;
  @Output() setSearch = new EventEmitter();
  
  search = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  searchResult() {
    // if (this.search.trim()) {
    //   this.setSearch.emit(this.search);
    // }
    
    this.setSearch.emit(this.search.trim());
  }
  resetSearch() {
    this.search = '';
    this.setSearch.emit('');
  }
}
