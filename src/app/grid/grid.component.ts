// templateUrl: './grid.component.html',
// styleUrls: ['./grid.component.css']


import {Component, ViewEncapsulation, ViewChild} from '@angular/core';
// import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';
import { ColumnMode } from '@swimlane/ngx-datatable/';

@Component({
  selector: 'app-grid',
  styleUrls: ['./grid.component.css'],
  template: `
    <div >
      <h3>
        Responsive Grid Demo
        <small>

        </small>
      </h3>
      <ngx-datatable
        #myTable
        class="material expandable"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="50"
        [scrollbarV]="true"
        [rows]="rows"
        (page)="onPage($event)"
      >
        <!-- Row Detail Template -->
        <ngx-datatable-row-detail [rowHeight]="50" #myDetailRow (toggle)="onDetailToggle($event)">
          <ng-template let-row="row" let-expanded="expanded" ngx-datatable-row-detail-template>
            <div style="padding-left:60px; font-size:14px">
              <div>{{ row.gender }}, {{ row.age }}</div>
            </div>
          </ng-template>
        </ngx-datatable-row-detail>

        <!-- Column Templates -->
        <ngx-datatable-column
          [width]="50"
          [resizeable]="false"
          [sortable]="false"
          [draggable]="false"
          [canAutoResize]="false"
        >
          <ng-template let-row="row" let-expanded="expanded" ngx-datatable-cell-template>
            <a
              href="#"
              [class.datatable-icon-right]="!expanded"
              [class.datatable-icon-down]="expanded"
              title="Expand/Collapse Row"
              (click)="toggleExpandRow(row)"
              class="desktop-hidden"
            >
            </a>
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Name" [flexGrow]="3" [minWidth]="200">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{ value }}
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Gender" [flexGrow]="1">
          <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>
            <span class="mobile-hidden">{{ column.name }}</span>
          </ng-template>

          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            <span class="mobile-hidden">{{ value }}</span>
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Age" [flexGrow]="1">
          <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>
            <span class="mobile-hidden">{{ column.name }}</span>
          </ng-template>

          <ng-template let-value="value" ngx-datatable-cell-template>
            <span class="mobile-hidden">{{ value }}</span>
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>

    <div style="margin: 50px;">
      This demo combines the features used in the <i>Row Detail</i> Rows demo, <i>Flex</i> Column demo, and the
      <i>Inline</i> Templates demo. When your browser is at 800px, the gender and age columns will be hidden and will
      appear in the row detail view.
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})

export class GridComponent {
  @ViewChild('myTable', {static: false}) table: any;

  rows: any[] = [];
  expanded: any = {};
  timeout: any;

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
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
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
}

