import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../env/Environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private router:Router) { }

  private url=environment.LOCAL_URL;

  getData(path:string,data:any):Observable<any>{
    
    return this.http.post(this.url+path,data);
  }

  getById(path:string,id:any){
    return this.http.get(this.url+path+"/"+id);
  }

  postData(path:string,data:any){
    return this.http.post(this.url+path,data);

  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigate(["/"]);
  }
}
