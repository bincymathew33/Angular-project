import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IUser } from './models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { 

  }
getUservalue():Observable<IUser[]>
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
