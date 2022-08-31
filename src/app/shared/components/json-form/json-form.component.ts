import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  EFormValidator,
  JsonFormControls,
  JsonFormData,
} from '@app/shared/models/json-form.model';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormComponent implements OnInit, OnChanges {
  @Input() jsonFormData!: JsonFormData;
  public myForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm(this.jsonFormData.controls);
    this.myForm.markAsUntouched();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['jsonFormData'].firstChange) {
      console.log(this.jsonFormData);
    }
  }


  // TODO Add variantes to check different types (combobox, select,...)
  isText(type: string) {
    return (  [
      'text',
      'password',
      'email',
      'number',
      'search',
      'tel',
      'url'
    ].includes(type))
  }

  isTextArea = (type: string) => type === 'textarea';

  isDropdown = (type: string) => type === 'dropdown';


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
      this.myForm.addControl(
        control.name,
        this.fb.control(control.value, validatorsToAdd)
      );
    }
    console.log(this.myForm.getRawValue())
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
