import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private url='https://datacode.onrender.com/';

  getData(path:string,data:any):Observable<any>{
    
    return this.http.post(this.url+path,data);
  }

  postData(path:string,data:any){
    return this.http.post(this.url+path,data);

  }
}
