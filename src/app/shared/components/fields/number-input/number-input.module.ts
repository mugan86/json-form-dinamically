import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './number-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllowOnlyNumbersDirective } from '@app/shared/directives/allow-only-numbers.directive';

@NgModule({
  declarations: [
    AllowOnlyNumbersDirective,
    NumberInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NumberInputComponent
  ]
})
export class NumberInputModule { }
