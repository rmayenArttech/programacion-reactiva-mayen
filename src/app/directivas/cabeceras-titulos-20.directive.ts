import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCabecerasTitulos20]'
})
export class CabecerasTitulos20Directive {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'font-size', '20px')
  }
}
