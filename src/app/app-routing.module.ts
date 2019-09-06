import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcercadeComponent } from './acercade/acercade.component';


const routes: Routes = [
  {
    path:'acercade',
    component:AcercadeComponent
  }
];

@NgModule({
  declarations: [
    AcercadeComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
