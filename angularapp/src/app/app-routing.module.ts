import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { BookingComponent } from './booking/booking.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';

import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'registration', component: RegisterpageComponent },
  {path: 'registrationsuccess', component: RegistrationsuccessComponent },
  {path: 'userhomepage', component: HomepageComponent , canActivate:[AuthguardGuard]},
  {path: 'viewbooking', component: ViewbookingComponent , canActivate:[AuthguardGuard]},
  {path: 'displayuer',component:DisplayUserComponent,canActivate:[AuthguardGuard]},
  {path:'bookevent',component:BookingComponent,canActivate:[AuthguardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
