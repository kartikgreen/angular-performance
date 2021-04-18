import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {
  @Input() set isColorState(value) {
    if (value === true) {
      this.el.nativeElement.style.backgroundColor = "green";
      return;
    }
    this.el.nativeElement.style.backgroundColor = "red";
  }
  constructor(private el: ElementRef) { }
}
