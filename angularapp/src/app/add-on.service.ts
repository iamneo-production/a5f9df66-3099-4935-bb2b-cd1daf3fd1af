import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddOn } from './add-on';

@Injectable({
  providedIn: 'root'
})
export class AddOnService {
  

  constructor(private httpClient: HttpClient) { }
  AddingAddOn(addOn : AddOn ) :Observable<Object>
  {
    console.log(addOn);
    
    return this.httpClient.post<any>('http://localhost:8080/admin/addAddon',addOn);
  }
  getEmployeesList(): Observable<AddOn[]>{
    return this.httpClient.get<AddOn[]>('http://localhost:8080/admin/getAddon');
  }
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete('http://localhost:8080/admin/deleteAddon/'+id);
  }
  updateEmployee(addOn:AddOn,id:number){
    return this.httpClient.put('http://localhost:8080/admin/editAddon/'+id,addOn);
  }
}
