import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AppComponent} from './app.component';
import {GridComponent} from './grid/grid.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DetailGridComponent, DialogFormComponent} from './detail-grid/detail-grid.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatDialogModule, MatNativeDateModule
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DetailGridComponent,
    DialogFormComponent
  ],
  imports: [NgxDatatableModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, MatIconModule, MatInputModule, MatButtonModule,
    MatFormFieldModule, MatSelectModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule
  ],
  entryComponents: [DialogFormComponent],
  providers: [MatDatepickerModule
 ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
