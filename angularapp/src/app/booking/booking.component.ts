import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Bookevent } from '../bookevent';
import { BookeventService } from '../bookevent.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookevent:Bookevent=new Bookevent();
  
  constructor(private bookeventService : BookeventService,private _router : Router,private _loginService : LoginService) { }

  ngOnInit(): void {
    $(".bookevent2").hide();

   $(".nextpage").click(function(){
     $(".bookevent2").show();
      $(".bookevent1").hide();
    });
  
  }
  BookEvent(){
    console.log(this.bookevent);
    this.bookevent.user_id= this._loginService.User.id;
    this.bookeventService. BookingEvent(this.bookevent).subscribe(data=>{
      alert("Event Booked Successfully")
      this._router.navigate(['/userhomepage']);
  },error=>alert("Something went wrong "));
    }

    Logout()
    {
      this._loginService.Logout();
    }
}
