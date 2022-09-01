import { FormGroup } from '@angular/forms';
import { JsonFormControls } from './json-form.model';
export interface IConfigData {
    control: JsonFormControls;
    form: FormGroup;
}