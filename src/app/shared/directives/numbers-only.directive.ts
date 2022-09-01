import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumberDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this._el.nativeElement.value;
    console.log(initialValue)
    this._el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    console.log(this._el.nativeElement.value);
    if ( initialValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}