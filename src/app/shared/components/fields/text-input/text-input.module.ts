import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldModule } from '../field/field.module';

@NgModule({
  declarations: [
    TextInputComponent
  ],
  imports: [
    CommonModule,
    FieldModule
  ],
  exports: [
    TextInputComponent
  ]
})
export class TextInputModule { }
