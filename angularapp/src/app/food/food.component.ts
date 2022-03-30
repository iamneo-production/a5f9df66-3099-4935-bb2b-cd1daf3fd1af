import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../food'; 
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FoodserviceService } from '../foodservice.service';
import { User } from '../user';



@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
  closeResult!: string;
  food: User = new User();
 
   foods: User[] = [];
   id!:number;
   foodToUpdate = {
  
    image:"",
    name:"",
    type:"",
    price:""
  };
   

  constructor(
    
   private modalService:NgbModal,
   private foodService:FoodserviceService,
    private router: Router
  ) {
  
   }

  ngOnInit():void {
  this.getFoods();
  }
  
  private getFoods(){
    this.foodService.getFoodList().subscribe(data => {
      this.foods = data;
      console.log(data);
    });
  }

  deleteFoods(id: number){
    this.foodService.deleteFood(id).subscribe( data => {
      console.log(data);

      this.getFoods();
    });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit(f:NgForm){
    this.foodService.addFood(f.value).subscribe(
      (resp) =>{

        console.log(resp);

        f.reset();
         this.getFoods();
      },
      (err) =>{
        alert("already exist");
        console.log(err);
      }
    );
    }
    edit(food: any){
    this.foodToUpdate = food;
    
    }
 
  
  updateFoods(id: number){
    this.router.navigate(['update', id]);
  }
  
}





