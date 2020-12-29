import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotographerComponent } from './containers/photographer/photographer.component';

const routes: Routes = [
  { path: 'photographers', component: PhotographerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotographerRoutingModule {}
