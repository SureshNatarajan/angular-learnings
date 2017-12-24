import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiDemoModule } from './api-demo/api-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
