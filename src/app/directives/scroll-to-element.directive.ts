import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollToElement]'
})
export class ScrollToElementDirective {

  @Input() scrollElementName: string | undefined;
  constructor(public elementRef: ElementRef) {
  }

  @HostListener('click', ['$event'])
  ScrolltoElementEvent($event: any) {
    $event.preventDefault();
    if (this.scrollElementName) {
      const element = document.getElementById(this.scrollElementName);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });;
      }
    }
  }

}
