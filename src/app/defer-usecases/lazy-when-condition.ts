import { Component } from '@angular/core';

@Component({
  selector: 'lazy-when-condition',
  standalone: true,
  template: `
    <h2>lazy-when-condition</h2>
    <ng-content></ng-content>
  `,
})
export class LazyWhenConditionComponent {
}
