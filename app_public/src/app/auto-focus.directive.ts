import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[autoFocus]'
})
export class AutoFocusDirective implements AfterContentInit {
  @Input() public appAutoFocus: boolean;

  constructor(private el: ElementRef) { }

  ngAfterContentInit(): void {
    setTimeout(() => { this.el.nativeElement.focus(); }, 500);
  }
}
