import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddTheme } from '../add-theme';
import { AddmenuService } from '../addmenu.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  requiredForm!: FormGroup;
  addmenu:AddTheme=new AddTheme();
  constructor(private addthemeservice:AddmenuService,private  router : Router,private fb: FormBuilder) {
    this.myForm();
  }
  myForm() {
    this.requiredForm = this.fb.group({
    ThemeName: ['', Validators.required ]
    });
 }
  ngOnInit(): void {
  }
  
  AddTheme()
  {
    console.log(this.addmenu);
    this.addthemeservice.Addingtheme(this.addmenu).subscribe(data=>{
      alert("Theme Added Successfully");
      
    
  },error=>alert("This Theme Name is already Used"));
    }
  

}

