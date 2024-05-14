import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'defer-guide',
  standalone: true,
  imports: [CommonModule],
  styles: `
  `,
  template: `
    <article>
      <h3>about the <code>&#64;defer</code> block</h3>
      <ul>
        <li>
          Angular <code>&#64;defer</code> block allows
          <code>standalone: true </code> <strong>components</strong>,
          <strong>directives</strong> and <strong>pipes</strong> to be
          dynamically loaded in runtime (via separate bundles) whenever a
          specified contition is met.
        </li>
        <li>
          Note that if a file which exports a standalone component (or
          directive, pipe) also exports something else (object, function,
          whatever) and it gets <strong>statically imported</strong> (e.g.
          <code>import &#123; anotherThing &#125; from './my-component'</code>),
          then the file is <strong>NOT</strong> separated to its own bundle
          (included in the one that does the static import). This is
          <strong>not</strong> angular-specific, similar constraints exist in
          other frameworks.
        </li>
        <li>
          The <strong>main goal</strong> of <code>&#64;defer</code> is to enable
          more convenient <strong>lazy loading</strong> on template level.
        </li>
        <li>
          Expected result: improved
          <a href="https://web.dev/articles/optimize-lcp"
            >LCP / Largest Contenftul Paint</a
          >
          (since there's less to download, parse, execute and eventually less to
          render) and potentially also improved
          <a href="https://web.dev/articles/fid">FID / First Input Delay</a>
          (since there's less JS to download and parse, there's also higher
          chance that less messages would get enqueued within the Event Loop)
          metrics.
        </li>
        <li>
          For each <strong>deferrable item</strong>, respective lazy chunk is
          created, which is reflected while building Angular applications:
        </li>
      </ul>
      <pre></pre>
      Recommended reads:
      <ul>
        <li>
          <a
            href="https://angularexperts.io/blog/angular-defer-lazy-loading-total-guide"
            >Total guide to lazy loading with Angular &#64;defer</a
          >
        </li>
      </ul>
    </article>
  `,
})
export class DeferGuideComponent {}
