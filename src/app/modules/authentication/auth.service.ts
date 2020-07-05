import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerURL = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient) { }

  // Sends http POST request to backend api url containing user credentials
  registerUser(user: {email: string, password: string}): Observable<any> {
    // Register user to db and return response details as observable
    return this.http.post<any>(this._registerURL, user);
  }
  
  // Sends http POST request to backend api url containing user credentials
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }
}
