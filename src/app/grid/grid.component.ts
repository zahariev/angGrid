// templateUrl: './grid.component.html',
// styleUrls: ['./grid.component.css']


import {Component, ViewEncapsulation, ViewChild, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ColumnMode, SortType, SelectionType} from '@swimlane/ngx-datatable/';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class GridComponent {
  @ViewChild('myTable', {static: false}) table: any;

  rows: any[] = [];
  expanded: any = {};
  timeout: any;
  selected = [];

  ColumnMode = ColumnMode;
  SortType = SortType;
  SelectionType = SelectionType;

  constructor(public data: DataService) {
    this.data = data;
    data.fetchMain(data1 => {
      this.rows = Object.values(data1);
      // console.log(this.rows);
    });

  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      // console.log('paged!', event);
    }, 100);
  }

  toggleExpandRow(row) {
    // console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    // console.log('Detail Toggled', event);
  }

  onSelect({selected}) {
    this.data.setFilter(selected[0]);
    // console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {

    // console.log('Activate Event', event);
    // this.selected = event.row;

  }

}

