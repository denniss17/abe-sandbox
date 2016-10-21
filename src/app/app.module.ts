import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AttributeAuthorityComponent } from './attribute-authority/attribute-authority.component';
import {AttributeAuthorityService} from "./attribute-authority.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AttributeAuthorityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AttributeAuthorityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
