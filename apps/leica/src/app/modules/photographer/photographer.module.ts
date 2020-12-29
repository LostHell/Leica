import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographerComponent } from './containers/photographer/photographer.component';
import { PhotographerRoutingModule } from './photographer-routing-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PhotographerComponent],
  imports: [CommonModule, PhotographerRoutingModule, SharedModule],
})
export class PhotographerModule {}
