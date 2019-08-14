import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTurnRed]'
})
export class TurnRedDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input()
  index: number;

  @HostListener ("mouseenter")
  turnRed(){
    if(this.index%2==1){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red' );
    }
    }


  @HostListener ("mouseleave")
  removeRed(){
    if(this.index%2==1){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    }
  }

}
