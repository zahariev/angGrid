import {Component, OnInit, ViewChild} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable/';
import {DataService} from '../data.service';

@Component({
  selector: 'app-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.scss']
})
export class DetailGridComponent {
  @ViewChild('myTable', {static: false}) table: any;

  rows: any[] = [];
  expanded: any = {};
  timeout: any;
  filter;
  ColumnMode = ColumnMode;

  constructor(public data: DataService) {

    this.data.filter.subscribe(data1 => {
      console.log(data1);
      this.filter = data1;
    });
  }


  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
}

