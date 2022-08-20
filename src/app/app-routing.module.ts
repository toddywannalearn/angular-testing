import { IdGeneratorComponent } from './id-generator/id-generator.component';
import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'counter-component', component: CounterComponent },
  { path: 'id-generator-component', component: IdGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
