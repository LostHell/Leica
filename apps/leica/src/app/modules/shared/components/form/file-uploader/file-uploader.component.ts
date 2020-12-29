import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent {
  @Input() label: string;
  @Input() hasFiles = false;

  constructor() {}

  upload(files) {
    if (!!files) {
      this.hasFiles = true;
    }
    console.log(files[0]);
  }
}
