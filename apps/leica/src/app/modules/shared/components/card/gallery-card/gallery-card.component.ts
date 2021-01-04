import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss'],
})
export class GalleryCardComponent {
  @Input() item: {
    avatar;
    name;
    date;
    imageSrc;
    content;
  };

  constructor() {}
}
