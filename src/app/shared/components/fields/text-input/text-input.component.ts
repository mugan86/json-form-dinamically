import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent extends FieldComponent {
  constructor() {
    super();
  }
}
