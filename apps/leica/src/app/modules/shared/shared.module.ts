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
import { GalleryCardComponent } from './components/card/gallery-card/gallery-card.component';
import { FileUploaderComponent } from './components/form/file-uploader/file-uploader.component';
import { DragDropFileUploadDirective } from '../../core/directives/drag-drop-file-upload.directive';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { PhotographerCardComponent } from './components/card/photographer-card/photographer-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ReactiveInputComponent,
    TextAreaInputComponent,
    GalleryCardComponent,
    FileUploaderComponent,
    DragDropFileUploadDirective,
    SidenavComponent,
    PhotographerCardComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    ReactiveInputComponent,
    TextAreaInputComponent,
    GalleryCardComponent,
    FileUploaderComponent,
    SidenavComponent,
    PhotographerCardComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
