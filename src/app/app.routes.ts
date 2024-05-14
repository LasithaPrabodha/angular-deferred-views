import { Route } from '@angular/router';
import { AboutComponent } from './about.component';
import { DeferGuideComponent } from './defer-guide.component';

export const appRoutes: Route[] = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'defer-guide',
    component: DeferGuideComponent,
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import(
        './defer-usecases/user-case-container/use-case-container.component'
      ),
    children: [
      {
        path: 'defer-when-condition',
        loadComponent: () =>
          import('./defer-usecases/when-condition/defer-when-condition').then(
            (m) => m.DeferWhenConditionComponent
          ),
      },
      {
        path: 'defer-on-idle',
        loadComponent: () =>
          import('./defer-usecases/on-idle/defer-on-idle').then(
            (m) => m.DeferOnIdleComponent
          ),
      },
      {
        path: 'defer-on-viewport',
        loadComponent: () =>
          import('./defer-usecases/on-viewport/defer-on-viewport').then(
            (m) => m.DeferOnViewportComponent
          ),
      },
      {
        path: 'defer-on-interaction',
        loadComponent: () =>
          import('./defer-usecases/on-interaction/defer-on-interaction').then(
            (m) => m.DeferOnInteractionComponent
          ),
      },
      {
        path: 'defer-on-hover',
        loadComponent: () =>
          import('./defer-usecases/on-hover/defer-on-hover').then(
            (m) => m.DeferOnHoverComponent
          ),
      },
      {
        path: 'defer-on-immediate',
        loadComponent: () =>
          import('./defer-usecases/on-immediate/defer-on-immediate').then(
            (m) => m.DeferOnImmediateComponent
          ),
      },
      {
        path: 'defer-on-timer',
        loadComponent: () =>
          import('./defer-usecases/on-timer/defer-on-timer').then(
            (m) => m.DeferOnTimerComponent
          ),
      },
    ],
  },
];
