import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonFormControls } from '@app/shared/models/json-form.model';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {

  @Input() myForm!: FormGroup
  @Input() control!: JsonFormControls;
  constructor() { }

  ngOnInit(): void {
    console.log(this.control);
  }
  hasFieldError(controlName: string): boolean {
    return (
      this.myForm?.get(controlName)!!.invalid &&
      (this.myForm?.get(controlName)!!.dirty ||
        this.myForm?.get(controlName)!!.touched)
    );
  }

}
