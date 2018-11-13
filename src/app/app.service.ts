import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IUser } from './models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {  movies} from './models/movielistclass';
import { BoundDirectivePropertyAst } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { 

  }
getUservalue():Observable<IUser[]>
{
  return this.http
  .get<IUser[]>('/assets/data/users.json')
  .map<IUser[]>((movies:Array<movies>)=>{
    movies.push({
      title:'bbb',
      actor:'ccc'
    })
    return movies;
  });
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
