import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonFormData } from '@app/shared/models/json-form.model';
import { FormService } from '@app/shared/services/form.service';

@Component({
  selector: 'app-json-form-complex',
  templateUrl: './json-form-complex.component.html',
  styleUrls: ['./json-form-complex.component.css']
})
export class JsonFormComplexComponent implements OnInit, OnChanges {
  @Input() jsonFormData!: JsonFormData;
  myForm: FormGroup = this.formService.form;
  constructor(public formService: FormService) {}

  ngOnInit() {
    // this.createForm(this.jsonFormData.controls);
    this.formService.createForm(this.jsonFormData.controls);
    this.myForm.markAsUntouched();
    console.log(this.jsonFormData.blocks);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['jsonFormData'].firstChange) {
      console.log(this.jsonFormData);
    }
  }
  
  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
    console.log('Form Errors: ', this.myForm);
  }

  get form() {
    return this.myForm.controls;
  }

  hasFieldError(controlName: string): boolean {
    return (
      this.myForm?.get(controlName)!!.invalid &&
      (this.myForm?.get(controlName)!!.dirty ||
        this.myForm?.get(controlName)!!.touched)
    );
  }

}
