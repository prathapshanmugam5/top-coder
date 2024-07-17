import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private router:Router) { }

  private url='https://datacode.onrender.com/';

  getData(path:string,data:any):Observable<any>{
    
    return this.http.post(this.url+path,data);
  }

  postData(path:string,data:any){
    return this.http.post(this.url+path,data);

  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigate(["/"]);
  }
}
