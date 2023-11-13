import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[scroll]',
})
export class ScrollDirective {
  constructor() {}

  @HostBinding('class.new-nav')
  newNav: boolean = false;

  @HostListener('window:scroll') onScroll() {
    // console.log(window.scrollY);

    if (window.scrollY >= 75) {
      this.newNav = true;
    } else {
      this.newNav = false;
    }
  }
}
