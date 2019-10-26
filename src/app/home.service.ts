import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  url="https://jsonplaceholder.typicode.com/posts" 

  constructor(private http: HttpClient) { }

  search= new BehaviorSubject([]);
  getSearch=this.search.asObservable();
  input= new BehaviorSubject([]);
  getInput=this.input.asObservable();
  result= new BehaviorSubject([]);
  getArray=this.result.asObservable();

  getData(){
    return this.http.get(this.url)
  }


}
