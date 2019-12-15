import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgorithmsHomeComponent } from './algorithms-home/algorithms-home.component';


const routes: Routes = [
  { path: 'algorithms', component: AlgorithmsHomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
