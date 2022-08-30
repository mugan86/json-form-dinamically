import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JsonFormData } from './shared/models/json-form.model';
export const FORM_DATA = {
  controls: [
    {
      name: 'firstName',
      label: 'First name:',
      value: '',
      type: 'text',
      validators: {
        required: true,
        minLength: 10,
      },
    },
    {
      name: 'lastName',
      label: 'Last name:',
      value: '',
      type: 'text',
      validators: {},
    },
    /*{
      name: 'comments',
      label: 'Comments',
      value: '',
      type: 'textarea',
      validators: {},
    },
    {
      name: 'agreeTerms',
      label: 'This is a checkbox?',
      value: 'false',
      type: 'checkbox',
      validators: {},
    },
    {
      name: 'size',
      label: '',
      value: '',
      type: 'range',
      options: {
        min: '0',
        max: '100',
        step: '1',
        icon: 'sunny',
      },
      validators: {},
    },
    {
      name: 'lightDark',
      label: 'Do you like toggles?',
      value: 'false',
      type: 'toggle',
      validators: {},
    },*/
  ],
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reusable-form';
  public formData!: JsonFormData;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('/assets/forms/1.json').subscribe((formData: any) => {
      console.log(formData);
      this.formData = formData;
    });
  }
}
