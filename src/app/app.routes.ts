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
    ],
  },
];
