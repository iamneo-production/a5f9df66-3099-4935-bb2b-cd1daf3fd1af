import { Component, OnInit } from '@angular/core';
import { BookeventService } from '../bookevent.service';
import { LoginService } from '../login.service';

@Component({ 
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {

  constructor(private _loginService:LoginService, private _bookEvent: BookeventService) { }

  events:any;

  ngOnInit(): void {
    this._bookEvent.getByEmail(this._loginService.User.email).subscribe((data)=>{
      console.log(data);
      this.events=data;
    })
  }

  logout()
  {
    this._loginService.Logout();
  }

}