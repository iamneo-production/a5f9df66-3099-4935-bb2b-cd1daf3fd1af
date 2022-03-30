import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {
  id!:number;
  food: User = new User();
  constructor(private foodService:FoodserviceService,
  private router:Router,
  private route:ActivatedRoute  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.foodService.getFoodById(this.id).subscribe(data => {
       this.food = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.foodService.updateFood(this.id, this.food).subscribe( data =>{
      this.goToList();
    }
    , error => console.log(error));
  }
goToList(){
    this.router.navigate(['/food']);
  }

}

