import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[highlightDirective]'
})
export class HighlightDirective {
  private backgroundColor: string = 'transparent'

  @HostBinding('style.backgroundColor') get background() {
    return this.backgroundColor;
  }

  @HostListener('mouseenter') onMouseEnter(){
    return this.backgroundColor = "rgba(72, 209, 204, 255)";
  }

  @HostListener('mouseleave') onMouseLeave() {
    return this.backgroundColor = 'transparent';
  }
}
