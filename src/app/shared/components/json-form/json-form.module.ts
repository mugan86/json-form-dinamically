import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormComponent } from './json-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputModule } from '@app/shared/components/fields/text-input/text-input.module';
import { NumberInputModule } from '@app/shared/components/fields/number-input/number-input.module';
import { FieldModule } from '../fields/field/field.module';

@NgModule({
  declarations: [
    JsonFormComponent
   ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldModule,
    TextInputModule,
    NumberInputModule
  ],
  exports: [
    JsonFormComponent
  ],
})
export class JsonFormModule { }
