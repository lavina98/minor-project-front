import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IQuestion } from '../model/question.model';
// import {HttpClient}
@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }

  getTest(): Observable<any> {
    return this.http.post('http://localhost:5000/questions', {subject: 'physics'});
  }


}
