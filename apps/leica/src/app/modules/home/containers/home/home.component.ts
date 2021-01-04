import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  formMessage: FormGroup;

  photographers = [
    {
      imageSrc: './assets/jakob-owens-DQPP9rVLYGQ-unsplash.jpg',
      name: 'Jakob Owens',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at\n' +
        '        consectetur consequatur dolores esse excepturi id iste iure labore\n' +
        '        laudantium magnam maiores maxime, minus molestias officiis\n' +
        '        reprehenderit, vel veritatis? Similique!',
    },
    {
      imageSrc: './assets/Isabela.jpg',
      name: 'Isabela Oliver',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at\n' +
        '        consectetur consequatur dolores esse excepturi id iste iure labore\n' +
        '        laudantium magnam maiores maxime, minus molestias officiis\n' +
        '        reprehenderit, vel veritatis? Similique!',
    },
    {
      imageSrc: './assets/Mike%20Jo.jpg',
      name: 'Mike Johnson',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at\n' +
        '        consectetur consequatur dolores esse excepturi id iste iure labore\n' +
        '        laudantium magnam maiores maxime, minus molestias officiis\n' +
        '        reprehenderit, vel veritatis? Similique!',
    },
    {
      imageSrc: './assets/joshua-harvey-9y_etjI7QPI-unsplash.jpg',
      name: 'Joshua Harvey',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at\n' +
        '        consectetur consequatur dolores esse excepturi id iste iure labore\n' +
        '        laudantium magnam maiores maxime, minus molestias officiis\n' +
        '        reprehenderit, vel veritatis? Similique!',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formMessage = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  submitMessageData() {
    if (this.formMessage.valid) {
      console.log(this.formMessage);
    }
  }
}
