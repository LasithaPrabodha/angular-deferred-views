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
      <pre>
      Initial chunk files   | Names                            |  Raw size | Estimated transfer size
      chunk-B4PT2UKD.js     | -                                | 135.04 kB |                40.38 kB
      chunk-H4XLK2F4.js     | -                                |  86.48 kB |                21.65 kB
      polyfills-S3BTP7ME.js | polyfills                        |  33.24 kB |                10.76 kB
      main-GNS2ZULW.js      | main                             |   9.68 kB |                 2.60 kB
      chunk-JPMP5HGK.js     | -                                |   8.14 kB |                 2.15 kB
      chunk-IXQEDF2Q.js     | -                                |   2.32 kB |               593 bytes
      styles-5CJZHWYF.css   | styles                           |   1.79 kB |               512 bytes

                            | Initial total                    | 276.69 kB |                78.63 kB

      Lazy chunk files      | Names                            |  Raw size | Estimated transfer size
      chunk-ZXLJYGDC.js     | -                                |  19.61 kB |                 4.70 kB
      chunk-C4VTOYQ7.js     | defer-loading-vs-placeholder     |   3.08 kB |                 1.11 kB
      chunk-7WRCO6C5.js     | defer-accordion                  |   2.92 kB |                 1.09 kB
      chunk-J5YM6I44.js     | defer-on-viewport                |   2.92 kB |                 1.22 kB
      chunk-4H7FKA2E.js     | defer-on-hover                   |   2.92 kB |                 1.04 kB
      chunk-75CQGKNI.js     | defer-npm-package                |   2.83 kB |                 1.20 kB
      chunk-H5NUBHFD.js     | snippet-dialog-content-component |   2.78 kB |                 1.10 kB
      chunk-EUVWVKIA.js     | defer-when-condition             |   2.69 kB |                 1.11 kB
      chunk-EK5XJ65T.js     | use-case-container-component     |   2.63 kB |                 1.09 kB
      chunk-ABAAB7NP.js     | defer-on-idle                    |   2.31 kB |              1020 bytes
      chunk-5DWJK6PK.js     | defer-on-interaction             |   2.12 kB |               933 bytes
      chunk-AKNTASCX.js     | defer-prefetch                   |   2.09 kB |               928 bytes
      chunk-ZLZRARPG.js     | defer-on-immediate               |   1.95 kB |               884 bytes
      chunk-LTI7K6QV.js     | defer-error                      |   1.83 kB |               887 bytes
      chunk-2G44LGPA.js     | defer-on-timer                   |   1.81 kB |               36m824 bytes
      ...and 29 more lazy chunks files. Use "--verbose" to show all the files.

      Output location: /Users/lasithaw/Projects/angular-17/angular-deferred-views/docs

      Application bundle generation complete. [2.894 seconds]

      </pre>
      Recommended reads:
      <ul>
        <li>
          <a
            href="https://angularexperts.io/blog/angular-deferred-views-lazy-loading-total-guide"
            >Total guide to lazy loading with Angular &#64;defer</a
          >
        </li>
      </ul>
    </article>
  `,
})
export class DeferGuideComponent {}
