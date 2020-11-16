import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { WrapperComponent } from './wrapper/wrapper.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: WrapperComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
];

export const ADMIN_ROUTES = RouterModule.forChild(ROUTES);
