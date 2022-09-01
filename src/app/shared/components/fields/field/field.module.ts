import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FieldComponent,
    ReactiveFormsModule
  ]
})
export class FieldModule { }
