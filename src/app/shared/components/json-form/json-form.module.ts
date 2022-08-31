import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormComponent } from './json-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JsonFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    JsonFormComponent
  ],
})
export class JsonFormModule { }
