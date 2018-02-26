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
  BASE_URL:String= "http://localhost:3000"
  private user: User; 

  constructor(private http: Http) {}
  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
}

getThreads() {
    return this.http.get(`${this.BASE_URL}/api/threads`)
      .map((res) => res.json());
}

addThread(title: string, content:string, id:string): Observable<any> {
        return this.http.post(`${this.BASE_URL}/api/threads`, { title, content, id })
          .map(res => res.json())
          .catch(this.handleError);
}

getThread(id){
    return this.http.get(`${this.BASE_URL}/api/threads/${id}`)
    .map((res) => res.json())
}
}



}