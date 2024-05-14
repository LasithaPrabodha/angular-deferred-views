import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LegacyModule } from './legacy/legacy.module';
import { BoxComponent } from 'src/app/components/box.component';
import { LoaderComponent } from 'src/app/components/loader.component';
import { HighlightDirective } from './highlight.directive';
import { LazySharedComponent } from './lazy-shared';
import { StUpIdCaSePipe } from './stupid-case-pipe';
import { LazyOnIdleComponent } from './lazy-on-idle';
import { ButtonComponent } from 'src/app/components/button.component';

@Component({
  selector: 'defer-on-idle',
  standalone: true,
  imports: [
    FormsModule,
    LegacyModule,
    LoaderComponent,
    BoxComponent,
    ButtonComponent,
    LazyOnIdleComponent,
    LazySharedComponent,
    StUpIdCaSePipe,
    HighlightDirective,
  ],
  template: `
    <app-box>
      <content>
        📚 <code>idle</code> will trigger the deferred loading once the browser
        <strong>has reached an idle state</strong> (detected using the
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback"
          >requestIdleCallback</a
        >
        API under the hood). <strong>This is the default behavior</strong> with
        a defer block.
      </content>
      <content>
        📚 <code>idle</code> trigger <strong>cannot have parameters</strong>.
      </content>
    </app-box>

    @defer (on idle) {
    <lazy-on-idle>
      <article>some <code>&#64;defer (on idle)</code> content</article>
    </lazy-on-idle>
    <lazy-shared>
      <article>some <code>&#64;defer (on idle)</code> content</article>
    </lazy-shared>
    <non-standalone>
      <article>some <code>&#64;defer (on idle)</code> content</article>
    </non-standalone>

    <h2>pipe</h2>
    {{ 'Lazy loaded pipe here' | StUpIdCaSe }}

    <h2>directive</h2>
    <div highlight>lazy loaded directive - I'm highlighted lol 🥹</div>
    } @placeholder (minimum 500ms) { just wait for <strong>idle</strong>... }
    @loading (after 100ms; minimum 1s) {
    <app-loader />
    } @error { something went wrong! }
  `,
})
export class DeferOnIdleComponent {}
