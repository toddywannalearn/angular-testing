import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { IdGeneratorComponent } from './id-generator/id-generator.component';
import { HomeComponent } from './home/home.component';
import { ServiceCounterComponent } from './service-counter/service-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    IdGeneratorComponent,
    HomeComponent,
    ServiceCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
