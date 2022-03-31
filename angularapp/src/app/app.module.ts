import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { HttpClientModule} from '@angular/common/http';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { HomepageComponent } from './homepage/homepage.component'


@NgModule({
  declarations: [
    AppComponent,
    RegisterpageComponent,
    RegistrationsuccessComponent,
    LoginComponent,
    BookingComponent,
    ViewbookingComponent,
    DisplayUserComponent,
    HomepageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
