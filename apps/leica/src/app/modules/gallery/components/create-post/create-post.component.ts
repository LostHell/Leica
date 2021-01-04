import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  formPost: FormGroup;

  constructor() {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formPost = new FormGroup({
      comment: new FormControl('', [Validators.required]),
    });
  }
}
