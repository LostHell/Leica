import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photographer-card',
  templateUrl: './photographer-card.component.html',
  styleUrls: ['./photographer-card.component.scss'],
})
export class PhotographerCardComponent {
  @Input() photographer: {
    imageSrc;
    name;
    country;
    city;
    interest;
    price;
  };

  constructor() {}
}
