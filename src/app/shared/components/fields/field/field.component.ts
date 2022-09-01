import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IConfigData } from '@app/shared/models/input-config.model';
import { JsonFormControls } from '@app/shared/models/json-form.model';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() myForm!: FormGroup
  @Input() control!: JsonFormControls;
  @Input() config!: IConfigData;

  hasFieldError(controlName: string): boolean {
    return (
      this.myForm?.get(controlName)!!.invalid &&
      (this.myForm?.get(controlName)!!.dirty ||
        this.myForm?.get(controlName)!!.touched)
    );
  }

}
