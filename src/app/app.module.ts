import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AppComponent} from './app.component';
import {GridComponent} from './grid/grid.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DetailGridComponent, DialogFormComponent} from './detail-grid/detail-grid.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatSelectModule, MatDialogModule} from '@angular/material';


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
    BrowserAnimationsModule, MatIconModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatDialogModule
  ],
  entryComponents:[DialogFormComponent],
  providers: [
 ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
