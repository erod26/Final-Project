import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { Rot14Component } from './rot14/rot14.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainContentComponent
  }, {
    path: 'second',
    component: Rot14Component
  }, {
    path: 'main',
    component: MainContentComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
