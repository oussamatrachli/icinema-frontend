import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';4
import {CinemaComponent} from './cinema/cinema.component';

const routes: Routes = [{ path: "cinema", component: CinemaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
