// templateUrl: './grid.component.html',
// styleUrls: ['./grid.component.css']


import {Component, ViewEncapsulation, ViewChild} from '@angular/core';
// import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';
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

  constructor() {
    this.fetch(data => {
      // this.selected = [data[2]];
      this.rows = data;
    });
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      // console.log('paged!', event);
    }, 100);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  toggleExpandRow(row) {
    // console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    // console.log('Detail Toggled', event);
  }

  onSelect({selected}) {
    // console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {

    console.log('Activate Event', event);
    // this.selected = event.row;

  }

}

