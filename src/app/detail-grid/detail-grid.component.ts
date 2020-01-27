import {Component, Inject, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ColumnMode} from '@swimlane/ngx-datatable/';
import {DataService} from '../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  workDate: string;
  itemName: string;
  sumQty: number;
  suma: number;
  name: string;
  // objID: "14"
  // itemId: "22403"
  // costSum: "87.40"
  // catId: "79"
}

@Component({
  selector: 'app-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.scss']
})
export class DetailGridComponent {
  @ViewChild('myTable', {static: false}) table: any;

  today = new Date();

  hiddenForm = true;
  dataSource = [];
  data;
  rows: any[] = [];
  expanded: any = {};
  timeout: any;
  filter;
  ColumnMode = ColumnMode;

  constructor(public dat: DataService, public dialog: MatDialog) {
    this.data = dat;
    dat.filter.subscribe(row => {
      this.filter = row['name'];
      this.filterData(row['name']);
    });

    dat.fetchDetails(data1 => {
      this.dataSource = Object.values(data1);
      //  console.log(this.dataSource);
    });
  }

  filterData(name) {
    this.filter = name || this.filter;
    this.rows = this.dataSource.filter(row => row ? row.name === name : 0);
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
    console.log('Detail Toggled', event);
  }

  openDialog(): void {
    // can add dialog to remind active group is a must
    if (!this.filter) {
      return;
    }
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '250px',
      data: {name: this.filter, workDate: this.today}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result);

      // result.workDate = result.workDate.slice(0, 10);

      this.data.setLocal(result);
      // console.log(this.dataSource);
      this.dataSource.push(result);

      this.filterData(this.filter);

      // console.log(this.data);

    });
  }

}

@Component({
  selector: 'app-dialog-form',
  templateUrl: 'dialog-form-dialog.html',
})
export class DialogFormComponent {

  someValue = false;

  constructor(
    public dialogRef: MatDialogRef<DialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close(this.someValue);
  }

}

