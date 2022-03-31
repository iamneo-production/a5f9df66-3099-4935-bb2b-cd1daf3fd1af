import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs/internal/observable/timer';
import { map, switchMap } from 'rxjs/operators';
import { AddOn } from '../add-on';
import { AddOnService } from '../add-on.service';
import { AdminAddOnService } from '../admin-add-on.service';

@Component({
  selector: 'app-admin-addon',
  templateUrl: './admin-addon.component.html',
  styleUrls: ['./admin-addon.component.css']
})
export class AdminAddonComponent implements OnInit {
  
  ad1: Array<AddOn>=new Array();
  ad:AddOn=new AddOn();
  addOntoUpdate:AddOn=new AddOn();
  addV:Array<AddOn>=new Array();
  public form: any;
  msg="";
  
  submitted:boolean=false;

  constructor(private adminAddOnService:AddOnService,private http:HttpClient,private _router : Router,private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    
      this.getEmployees();
      
  }
 
    AddOn()
    {
      console.log(this.ad);
      this.adminAddOnService.AddingAddOn(this.ad).subscribe((_data: any)=>{
       
        alert("AddOn Added Successfully");
        
      
    },(_error: any)=>alert("This Add_on Name is already exists"));
      }
      private getEmployees(){
        this.adminAddOnService.getEmployeesList().subscribe(data => {
          this.ad1 = data;
          console.log(data);
        });
      }
      deleteEmployee(id: number){
        this.adminAddOnService.deleteEmployee(id).subscribe( (data: any) => {
          console.log(data);
          this.getEmployees();
        });
      }
      edit(addOn:AddOn){
        this.addOntoUpdate=addOn;
        console.log(this.addOntoUpdate);
      }
      updateAddon(){
        console.log(this.addOntoUpdate);
        this.adminAddOnService.updateEmployee(this.addOntoUpdate,this.addOntoUpdate.id).subscribe((resp)=>
        {
          console.log(resp);
        },
        (err)=>{
          console.log(err);
          alert("This add_on Name is already exists");
        }
        );
        
      }
      
    
      }

    

