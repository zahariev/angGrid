import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AppComponent} from './app.component';
import {GridComponent} from './grid/grid.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DetailGridComponent} from './detail-grid/detail-grid.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DetailGridComponent
  ],
  imports: [NgxDatatableModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
