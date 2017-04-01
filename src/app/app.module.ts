import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  MdButtonModule, MdCardModule, MdToolbarModule, MdSidenavModule, MdIconModule,
  MdInputModule, MdCheckboxModule, MdRadioModule, MdSlideToggleModule, MdButtonToggleModule, MdListModule, MdMenuModule,
  MaterialModule
} from "@angular/material";
import { RouterModule, Routes } from '@angular/router';
import {appRoutes} from "./app.routes";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {AluecoOrderFormComponent} from "./order/alueco-order-form.component";
import {OrderOverviewComponent} from "./order/order-overview.component";
import {ContainersTypePipe} from "./order/ContainersTypePipe";
import {firebaseConfig} from "./firebaseConfig";
import {AngularFireModule} from "angularfire2";
import {OrderService} from "./order/order-service";

@NgModule({
  declarations: [
    AppComponent,
    OrderOverviewComponent,
    AluecoOrderFormComponent,
    ContainersTypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
