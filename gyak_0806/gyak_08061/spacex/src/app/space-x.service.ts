import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  constructor(private http:HttpClient) { }

  public getAllRockets(){
    return this.http.get('https://api.spacexdata.com/v3/rockets');
  };
  
  public getAllHistory(){
    return this.http.get(' https://api.spacexdata.com/v3/history');
  };
 
  public getAllLaunches(){
    return this.http.get(' https://api.spacexdata.com/v3/launches')
  };
 
  public getRocket(id){
    return this.http.get('https://api.spacexdata.com/v3/rockets/')
  }

}
