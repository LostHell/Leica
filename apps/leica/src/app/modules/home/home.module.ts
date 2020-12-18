import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './containers/home/home.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { SharedModule } from '../shared/shared.module';
import { PhotographersSectionComponent } from './components/photographers-section/photographers-section.component';

@NgModule({
  declarations: [HomeComponent, HeaderSectionComponent, PhotographersSectionComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
