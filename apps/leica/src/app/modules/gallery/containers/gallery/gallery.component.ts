import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  items = [
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      name: 'John Doe',
      date: '02.01.2020',
      imageSrc:
        'https://cdn.motor1.com/images/mgl/Wpyro/s1/audi-rs6-avant-by-wheelsandmore-lead-image.jpg',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz\n' +
        'breeds of d...',
    },
    {
      avatar:
        'https://i.pinimg.com/originals/67/7d/c4/677dc4c663f954d285a7f2c640127295.jpg',
      name: 'Mr. Been',
      date: '02.01.2020',
      imageSrc: 'https://i.ytimg.com/vi/iqoGDUZdVrM/maxresdefault.jpg',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz\n' +
        'breeds of d...',
    },
    {
      avatar:
        'https://www.dkoding.in/wp-content/uploads/Johnny-Depp-In-Pirates-Of-The-Caribbean-Latest-News-DKODING-788x1024.jpg',
      name: 'David Harrison',
      date: '02.01.2020',
      imageSrc:
        'https://media.speedheads.de/artikel/audi-rs-q5-2019-auto-zukunft-0096512-1200x628.jpg',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz\n' +
        'breeds of d...',
    },
    {
      avatar:
        'https://www.dkoding.in/wp-content/uploads/Johnny-Depp-In-Pirates-Of-The-Caribbean-Latest-News-DKODING-788x1024.jpg',
      name: 'David Harrison',
      date: '02.01.2020',
      imageSrc:
        'https://media.speedheads.de/artikel/audi-rs-q5-2019-auto-zukunft-0096512-1200x628.jpg',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz\n' +
        'breeds of d...',
    },
  ];

  constructor() {}
}
