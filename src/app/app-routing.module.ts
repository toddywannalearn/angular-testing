import { IdGeneratorComponent } from './id-generator/id-generator.component';
import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'counter-component', component: CounterComponent },
  { path: 'id-generator-component', component: IdGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
