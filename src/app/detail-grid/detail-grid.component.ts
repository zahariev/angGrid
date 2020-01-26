import {Component, Inject, ViewChild} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable/';
import {DataService} from '../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  filter: string;
}

@Component({
  selector: 'app-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.scss']
})
export class DetailGridComponent {
  @ViewChild('myTable', {static: false}) table: any;

  hiddenForm = true;
  dataSource = [];
  rows: any[] = [];
  expanded: any = {};
  timeout: any;
  filter;
  ColumnMode = ColumnMode;

  constructor(public data: DataService, public dialog: MatDialog) {

    data.filter.subscribe(row => {
      this.filter = row['name'];
      this.filterData(row);
    });

    data.fetchDetails(data1 => {
      this.dataSource = Object.values(data1);
      //  console.log(this.dataSource);
    });
  }

  filterData(filter) {
    this.filter = filter;
    this.rows = this.dataSource.filter(row => row.name === filter.name);
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '250px',
       data: {filter: this.filter}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close(this.someValue);
  }

}

