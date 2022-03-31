import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { BookingComponent } from './booking/booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { FoodComponent } from './food/food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationsuccessComponent,
    BookingComponent,
    HomepageComponent,
    RegisterpageComponent,
    FoodComponent,
    UpdateFoodComponent,
    DisplayUserComponent,
    ViewbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
