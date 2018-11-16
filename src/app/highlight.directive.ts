import { Directive ,HostListener,ElementRef,Input} from '@angular/core';
import { markDirtyIfOnPush } from '@angular/core/src/render3/instructions';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }
  @Input()
  appHighlight : string;
  @Input()
  bgcolor:string;
  @HostListener('click')
 onmyclick()
 {
  this.el.nativeElement.style.color=this.appHighlight || 'red' ;
  if(this.bgcolor)
  {
    this.el.nativeElement.style.backgroungColor=this.bgcolor;
  }
 
 }

}
