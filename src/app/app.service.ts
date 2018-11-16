
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IUser } from './models/user';

import { Observable,combineLatest,Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {  movies} from './models/movielistclass';
import {  Movie} from './models/movie';
import { BoundDirectivePropertyAst } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { 

  }
  public movieLister:Subject<Movie[]>=new Subject<Movie[]>();
getUservalue():Observable<IUser[]>
{
  return this.http
  .get<IUser[]>('/assets/data/users.json')
  .pipe(map((user: IUser[])=>
  {
    user.push({
      name:'martin',
      age:12
    })

    return user;
  }))
}
getMovieList():Observable<Movie[]>
{
  return this.http
  .get<Movie[]>('/assets/data/movieList.json')
  .pipe(map((MovieList: Movie[])=>
  {
    MovieList.push({
      title:'Kalam',
      actor:'mohanlal'
    })
this.movieLister.next(MovieList);
    return MovieList;
  }))
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
