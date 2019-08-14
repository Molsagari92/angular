import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTurnBgBlue]'
})
export class TurnBgBlueDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener ("mouseenter")
  turnBlue(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'lightblue' );
    }


  @HostListener ("mouseleave")
  removeBlue(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'white');
  }

}
