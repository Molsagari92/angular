import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';
import { hostElement } from '@angular/core/src/render3/instructions';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input()
  index: number;

  @HostListener ("mouseenter")
  turnBlue(){
    if(this.index%2!==0)
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue' );
    }


  @HostListener ("mouseleave")
  removeBlue(){
    if(this.index%2!==0)
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', null);
  }
}
