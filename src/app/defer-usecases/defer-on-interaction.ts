import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from 'src/app/components/box.component';
import { ButtonComponent } from 'src/app/components/button.component';
import { LoaderComponent } from 'src/app/components/loader.component';
import { HighlightDirective } from './highlight.directive';
import { LazySharedComponent } from './lazy-shared';
import { LegacyModule } from './legacy/legacy.module';
import { StUpIdCaSePipe } from './stupid-case-pipe';
import { LazyOnInteractionComponent } from './lazy-on-interaction';

@Component({
  selector: 'defer-on-interaction',
  standalone: true,
  imports: [
    FormsModule,
    LegacyModule,
    LoaderComponent,
    BoxComponent,
    ButtonComponent,
    LazyOnInteractionComponent,
    LazySharedComponent,
    StUpIdCaSePipe,
    HighlightDirective,
  ],
  template: `
    <app-box>
      <content>
        📚 <code>interaction</code> will trigger the deferred block when the
        user interacts with the specified element through <code>click</code> or
        <code>keydown</code> events.
      </content>
    </app-box>

    @defer (on interaction) {
    <lazy-on-interaction>
      <article>some <code>&#64;defer (on interaction)</code> content</article>
    </lazy-on-interaction>
    <lazy-shared>
      <article>some <code>&#64;defer (on interaction)</code> content</article>
    </lazy-shared>
    <non-standalone>
      <article>some <code>&#64;defer (on interaction)</code> content</article>
    </non-standalone>

    <h2>pipe</h2>
    {{ 'Lazy loaded pipe here' | StUpIdCaSe }}

    <h2>directive</h2>
    <div highlight>lazy loaded directive - I'm highlighted lol 🥹</div>
    } @placeholder (minimum 500ms) {
    <app-button
      >👉 <strong>interact with me</strong> (the placeholder) to load content
      👈</app-button
    >
    } @loading (after 100ms; minimum 1s) {
    <app-loader />
    } @error { something went wrong! }
  `,
})
export class DeferOnInteractionComponent {}
