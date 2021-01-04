import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photographers-section',
  templateUrl: './photographers-section.component.html',
  styleUrls: ['./photographers-section.component.scss'],
})
export class PhotographersSectionComponent {
  @Input() photographer: {
    imageSrc;
    name;
    description;
  };

  constructor() {}
}
