import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormComplexComponent } from './json-form-complex.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JsonFormComplexComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    JsonFormComplexComponent
  ],
})
export class JsonFormComplexModule { }
