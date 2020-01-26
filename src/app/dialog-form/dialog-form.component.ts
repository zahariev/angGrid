import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-form-dialog',
  templateUrl: '../detail-grid/dialog-form-dialog.html',
})
export class DialogFormComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogFormComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
