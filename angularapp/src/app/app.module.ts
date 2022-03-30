import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { BookingComponent } from './booking/booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationsuccessComponent,
    BookingComponent,
    HomepageComponent,
    RegisterpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
