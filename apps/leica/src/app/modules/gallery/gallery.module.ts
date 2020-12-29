import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';

import { GalleryComponent } from './containers/gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GalleryComponent, CreatePostComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class GalleryModule {}
