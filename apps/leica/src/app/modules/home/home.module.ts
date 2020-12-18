import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './containers/home/home.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { PhotographersSectionComponent } from './components/photographers-section/photographers-section.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { MessageSectionComponent } from './components/message-section/message-section.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderSectionComponent,
    PhotographersSectionComponent,
    WhyUsComponent,
    MessageSectionComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
})
export class HomeModule {}
