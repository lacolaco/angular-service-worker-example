import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import NGSW module
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Register ngsw-worker.js as SW
    ServiceWorkerModule.register('/ngsw-worker.js'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
