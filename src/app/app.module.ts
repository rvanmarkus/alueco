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
import {firebaseAuthConfig, firebaseConfig} from "./firebaseConfig";
import {AngularFireModule} from "angularfire2";
import {OrderService} from "./services/order-service";
import {LoginPageComponent} from "./login/login-page.component";
import {AuthService} from "./services/auth-service";

@NgModule({
  declarations: [
    AppComponent,
    OrderOverviewComponent,
    AluecoOrderFormComponent,
    ContainersTypePipe,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OrderService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
