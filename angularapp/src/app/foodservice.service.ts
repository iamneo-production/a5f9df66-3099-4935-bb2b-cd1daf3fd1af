import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, ObservableInput, retry } from 'rxjs';
import { FoodItemClass } from './food.model';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {
 
  



 
  constructor( private httpclient: HttpClient) { }

  public addFood(Data: any)
  {
  
    return this.httpclient.post('http://localhost:8090/admin/addMenu',Data);

  }

  deleteFood(id: number): Observable<Object>{
    return this.httpclient.delete('http://localhost:8090/admin/deleteMenu/'+id);
  }
  
  getFoodList(): Observable<User[]>{
    return this.httpclient.get<User[]>('http://localhost:8090/admin/getMenu');
  }
  
getFoodById(id: number): Observable<User>{
    return this.httpclient.get<User>('http://localhost:8090/admin/getMenu/'+id);
  }
  updateFood(id: number, employee: User): Observable<Object>{
    return this.httpclient.put('http://localhost:8090/admin/editMenu/'+id ,employee);
  }

}





