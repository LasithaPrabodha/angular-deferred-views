import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[highlight]',
})
export class HighlightDirective {
  colors = ['--orange-red', '--vivid-pink', '--electric-violet'].map(
    (name: string) =>
      getComputedStyle(this.document.documentElement).getPropertyValue(name)
  );

  constructor(
    el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.changeColor(el);
  }

  changeColor(el: ElementRef) {
    this.renderer.setStyle(
      el.nativeElement,
      'color',
      this.colors[Math.floor(Math.random() * this.colors.length)]
    );
    setInterval(() => {
      this.renderer.setStyle(
        el.nativeElement,
        'color',
        this.colors[Math.floor(Math.random() * this.colors.length)]
      );
    }, 500);
  }
}
