import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IUser } from './models/user';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { 

  }
getUservalue()
{
  return this.http.get<IUser[]>('/assets/data/users.json');
}
//   private users=[
//     {
// name:'abc'
//     },
//     {
//       name:'def'
//           }
//   ];
//   getUsers1()
//   {
//     return this.users;
//   }

}
