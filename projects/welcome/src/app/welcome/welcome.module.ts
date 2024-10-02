import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { RouterModule } from '@angular/router';
import { WELCOME_ROUTES } from './welcome.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WELCOME_ROUTES)
  ],
  declarations: [
    WelcomeCardComponent
  ]
})
export class WelcomeModule { }
