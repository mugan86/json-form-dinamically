import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[appAllowOnlyNumbers]',
})
export class AllowOnlyNumbersDirective {
  @Input() maxLength: number = -1;
  constructor(private el: ElementRef) {}
  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
