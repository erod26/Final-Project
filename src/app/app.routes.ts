import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
  {
    path: 'main',
    component: MainContentComponent
  }, {
    path: 'game',
    component: GameComponent
  }, 
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
