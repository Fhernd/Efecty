import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EfectyComponent } from './components/efecty.component';

import {
  ToastyModule
} from 'ng2-toasty';

@NgModule({
  declarations: [
    AppComponent,
    EfectyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
