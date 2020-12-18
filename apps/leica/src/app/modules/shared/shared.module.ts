import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ButtonComponent } from './components/button/button/button.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent],
  exports: [FooterComponent, HeaderComponent, ButtonComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class SharedModule {}
