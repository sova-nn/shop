import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[catDirective]'
})
export class CatDirective {
  @Input('catDirective') catSize = '100px';
  @HostListener('click') onClick(): void {
    const cat = this.render.createElement('img');
    this.render.setAttribute(cat, 'src', '/assets/cat.png');
    this.render.setStyle(cat, 'height', this.catSize);

    const rootElem = this.elementRef.nativeElement;
    this.render.selectRootElement(rootElem);
    this.render.appendChild(rootElem, cat);
  }

  constructor(
    private render: Renderer2,
    private elementRef: ElementRef
  ) {}
}

