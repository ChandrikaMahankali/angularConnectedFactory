import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { ContextpanelComponent } from './contextpanel/contextpanel.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path : 'dashboard', component : DashboardComponent},
  {
    path: 'signup', component: UserComponent,
    children: [
      { path: '', component: SignupComponent }
    ]
  },
  {
      path: 'login', component: UserComponent,
      children: [
        { path: '', component: SigninComponent }
      ]
  },
  { path : '', redirectTo: '/dashboard', pathMatch : 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {

}
