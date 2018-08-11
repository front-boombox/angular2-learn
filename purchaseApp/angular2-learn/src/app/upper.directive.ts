import {Directive, ElementRef, Renderer2} from '@angular/core';
 
@Directive({
    selector: '[upper]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class UpperDirective{
     
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
         
        this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
    }

    onMouseEnter() {
        this.setFontWeight("uppercase");
    }

    onMouseLeave() {
        this.setFontWeight("none");
    }

    private setFontWeight(val: string){
        this.renderer.setStyle(this.elementRef.nativeElement, "text-transform", val);
    }
}