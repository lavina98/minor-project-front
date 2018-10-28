import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {}

    registerUser(details: any): Observable<any> {
        return this.http.get('');
}

}
