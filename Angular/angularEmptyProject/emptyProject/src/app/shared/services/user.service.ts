import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }
  basicURL = "http://localhost:3500/api";
  userList: User[];
  getAllUsers(setUserList: (res) => void): void {
    let url: string = this.basicURL + "/getList?fileName=user";
    this.httpClient.get<any[]>(url)
      .subscribe(res => {
        this.userList = res;
        setUserList(this.userList);
      });
  }
  addUser(user: User): void {
    let url: string = this.basicURL + "/addUser";
    this.httpClient.post<User>(url, user)
      .subscribe(res => {
        console.log(res);
         this.userList.push(user);
        alert(`added user w/ name=${user.name}`);
      },
        err => {
          console.log("error");
          console.log(err);
        })
  }
}
