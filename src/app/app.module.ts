import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JsonFormModule } from '@shared/components/json-form/json-form.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
