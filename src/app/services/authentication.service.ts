import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable()
export class AuthenticationService {

    user: any;
    constructor(private http: HttpClient) {}

    registerUser(details: any): Observable<any> {
        return this.http.post('http://localhost:8100/user/register', details);
    }

    loginUser(details: any): Observable<any> {
        return this.http.post('http://localhost:8100/user/login', details)
        .pipe(
            map((data) => {
                console.log(data);
                this.user = data;
                return data;
            })
            );
    }

    // getUserDetails(): Observable<any> {
    //     return this.user;
    // }

}
