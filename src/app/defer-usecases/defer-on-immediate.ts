import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from 'src/app/components/box.component';
import { LoaderComponent } from 'src/app/components/loader.component';
import { HighlightDirective } from './highlight.directive';
import { LazySharedComponent } from './lazy-shared';
import { LegacyModule } from './legacy/legacy.module';
import { StUpIdCaSePipe } from './stupid-case-pipe';
import { LazyOnImmediateComponent } from './lazy-on-immediate';

@Component({
  selector: 'defer-on-immediate',
  standalone: true,
  imports: [
    FormsModule,
    LegacyModule,
    LoaderComponent,
    BoxComponent,
    LazyOnImmediateComponent,
    LazySharedComponent,
    StUpIdCaSePipe,
    HighlightDirective,
  ],
  template: `
    <app-box>
      <content>
        📚 <code>immediate</code> triggers the deferred load immediately,
        meaning once the client has finished rendering, the defer chunk would
        then start fetching right away.
      </content>
    </app-box>

    @defer (on immediate) {
    <lazy-on-immediate>
      <article>some <code>&#64;defer (on immediate)</code> content</article>
    </lazy-on-immediate>
    <lazy-shared>
      <article>some <code>&#64;defer (on immediate)</code> content</article>
    </lazy-shared>
    <non-standalone>
      <article>some <code>&#64;defer (on immediate)</code> content</article>
    </non-standalone>

    <h2>pipe</h2>
    {{ 'Lazy loaded pipe here' | StUpIdCaSe }}

    <h2>directive</h2>
    <div highlight>lazy loaded directive - I'm highlighted lol 🥹</div>
    } @placeholder (minimum 500ms) { that should load
    <strong>immediate</strong>... } @loading (after 100ms; minimum 1s) {
    <app-loader />
    } @error { something went wrong! }
  `,
})
export class DeferOnImmediateComponent {}
