import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface User {
  username: String,
  password: String,
  email: String
}

@Injectable()
export class AuthGetService {
  BASEURL:String= "http://localhost:3000"
  private user: User; 

  constructor(private http: Http) {}




}