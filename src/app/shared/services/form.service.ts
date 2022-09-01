import { Injectable, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EFieldTypes, TEXT_FIELDS } from '@shared/models/json-form.model';
import {
  EFormValidator,
  JsonFormControls,
} from '@app/shared/models/json-form.model';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  public form!: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({})
  }

  isText(type: string) {
    return TEXT_FIELDS.includes(type);
  }

  isNumber = (type: string) => type === EFieldTypes.NUMBER

  isTextArea = (type: string) => type === EFieldTypes.TEXTAREA;

  isDropdown = (type: string) => type === EFieldTypes.DROPDOWN;
  
  
  renderLayout(type: string) {
    return (this.isNumber(type)) ?
              'numberInput':
              (this.isText(type)) ?
              'textInput': 
              (this.isTextArea(type))?
              'textAreaInput':
              'textDropDown'
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];
      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case EFormValidator.MIN:
            validatorsToAdd.push(Validators.min(value));
            break;
          case EFormValidator.MAX:
            validatorsToAdd.push(Validators.max(value));
            break;
          case EFormValidator.REQUIRED:
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case EFormValidator.REQUIRED_TRUE:
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case EFormValidator.EMAIL:
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case EFormValidator.MIN_LENGTH:
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case EFormValidator.MAX_LENGTH:
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case EFormValidator.PATTERN:
            validatorsToAdd.push(Validators.pattern(value));
            break;
          case EFormValidator.NULL_VALIDATOR:
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      this.form.addControl(
        control.name,
        this.formBuilder.control(control.value, validatorsToAdd)
      );
    }
    console.log(this.form.getRawValue());
  }
}
