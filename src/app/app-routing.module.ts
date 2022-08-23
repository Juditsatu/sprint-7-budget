import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetListComponent } from './budget/budget-list/budget-list.component';

import { HomeComponent } from './budget/home/home.component';
import { WelcomePageComponent } from './budget/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'welcome-page', component: WelcomePageComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'budget-list', component: BudgetListComponent },
  { path: '**', redirectTo: 'welcome-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
