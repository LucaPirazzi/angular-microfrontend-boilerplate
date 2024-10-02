import { Routes } from '@angular/router';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';

export const WELCOME_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'welcome-page',
      pathMatch: 'full'
    },
    {
      path: 'welcome-page',
      component: WelcomeCardComponent
    }
];
