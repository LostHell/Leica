import { Component } from '@angular/core';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.scss'],
})
export class PhotographerComponent {
  photographers = [
    {
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'John Doe',
      country: 'Germany',
      city: 'Berlin',
      interest: 'Wedding',
      price: '120',
    },
    {
      imageSrc:
        'https://townsquare.media/site/442/files/2015/02/pirates.jpg?w=980&q=75',
      name: 'Mario Levis',
      country: 'Germany',
      city: 'Cologne',
      interest: 'Football',
      price: '75.50',
    },
    {
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'John Doe',
      country: 'Germany',
      city: 'Berlin',
      interest: 'Wedding',
      price: '120',
    },
    {
      imageSrc:
        'https://townsquare.media/site/442/files/2015/02/pirates.jpg?w=980&q=75',
      name: 'Mario Levis',
      country: 'Germany',
      city: 'Cologne',
      interest: 'Football',
      price: '75.50',
    },
  ];

  constructor() {}
}
