import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddTheme } from './add-theme';
/*const Base_URL = environment.apiURL;*/
const Base_URL="http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class AddmenuService {
 
  
  constructor(private httpClient: HttpClient) { }
  Addingtheme(addtheme : AddTheme ) :Observable<Object>
  {
    console.log(addtheme);
    
    return this.httpClient.post<any>(`${Base_URL}/admin/addtheme`,addtheme);
  }

 
}

