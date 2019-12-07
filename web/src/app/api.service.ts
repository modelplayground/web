import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  public createManager(type:String,name:String):Observable<String>{
    return this.httpClient.get<String>("https://modelplayground.herokuapp.com/lexorank/createmanager/"+type+"/"+name);
  }

  public addRandomIssues(name:String,no:Number):Observable<String>{
    return this.httpClient.get<String>("https://modelplayground.herokuapp.com/lexorank/"+name+"/addrandomissue/"+no);
  }

  public addIssue(name:String,id:String):Observable<String>{
    return this.httpClient.get<String>("https://modelplayground.herokuapp.com/lexorank/"+name+"/addissue/"+id);
  }

  public moveIssue(name:String,from:Number,to:Number):Observable<String>{
    return this.httpClient.get<String>("https://modelplayground.herokuapp.com/lexorank/"+name+"/move/"+from+"/"+to);
  }

  public rebalance(name:String):Observable<String>{
    return this.httpClient.get<String>("https://modelplayground.herokuapp.com/lexorank/"+name+"/rebalance");
  }


  public getEntityList(name:String):Observable<Entity[]>{
    return this.httpClient.get<Entity[]>("https://modelplayground.herokuapp.com/lexorank/"+name+"/getall");
  }
  public getEntityListFromDB(name:String):Observable<Entity[]>{
    return this.httpClient.get<Entity[]>("https://modelplayground.herokuapp.com/lexorank/"+name+"/getalldb");
  }

}
