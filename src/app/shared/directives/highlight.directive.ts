import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[highlightDirective]'
})
export class HighlightDirective {
  private fontWeight: string = 'normal'

  @HostBinding('style.fontWeight') get fontWeightStyle() {
    return this.fontWeight;
  }

  @HostListener('mouseenter') onMouseEnter(){
    return this.fontWeight = "bold";
  }

  @HostListener('mouseleave') onMouseLeave() {
    return this.fontWeight = 'normal';
  }
}
