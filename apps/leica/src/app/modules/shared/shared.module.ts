import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ButtonComponent } from './components/button/button/button.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveInputComponent } from './components/form/reactive-input/reactive-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextAreaInputComponent } from './components/form/text-area-input/text-area-input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ReactiveInputComponent,
    TextAreaInputComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    ReactiveInputComponent,
    TextAreaInputComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
