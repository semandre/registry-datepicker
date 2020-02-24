import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mydrpfocus]'
})

export class FocusDirective implements AfterViewInit {
  @Input('mydrpfocus') value: boolean;

  constructor(private el: ElementRef) {}

  // Focus to element: if value === false = don't set focus, true = set only focus
  ngAfterViewInit() {
    if (!this.value) {
      this.el.nativeElement.focus()
    }
  }
}
