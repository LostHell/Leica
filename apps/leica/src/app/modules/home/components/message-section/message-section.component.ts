import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.scss'],
})
export class MessageSectionComponent {
  @Output() submitData = new EventEmitter();
  @Input() form: FormGroup;

  constructor() {}

  onSubmit() {
    this.submitData.emit(this.form.value);
  }
}
