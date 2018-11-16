import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {  movies} from '../models/movielistclass';
import { Movie} from '../models/movie';
import { AppService } from '../app.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  buttonclick(i)
{
  
}
// selectedmovie1:"";
// choosevalue='listvalue';
activeindex;
choosevaluel=0;
@Input()
moviel:Array<string>;
@Input()
movieList:Movie[];
counter=0;
@Output()
output: EventEmitter<number>=new EventEmitter<number>();
// // movieList :Array<MovieList> =[
// //   {
// //     title:'Yanthiran',
// //     actor:'Rajanikanth'
// //   },
// //   {
// //     title:"Gilli",
// //     actor:"Surya"
// //   },
// //   {
// //     title:"Bhima",
// //     actor:"Vikram"
// //   },
// // ];


onbuttonclick(i)
{
  
 this.output.emit(i)
 this.activeindex=i;
}
// movieList :Array<movies> =[
//   new movies('Yanthiran','Rajanikanth')
// ]
// newMovieList : movies  =new movies('','');
// //newMovieList : MovieList  = {title:'',actor:''};
//   constructor() { }

  ngOnInit() {
    this.service.movieLister.subscribe((moviel:Movie[])=>
 {
  
   this.counter=moviel.length;
  
 });
  }
  constructor(private service:AppService)
{
  
}
//  clearselection()
//  {
//    this.movieList.forEach(emp =>emp.selected=false);
//  }


//   selectedmovie(movie){
    
//     this.clearselection();
//     movie.selected=true;
//     this.selectedmovie1=movie;
    
//   }
//   addemployee(){
    
//     this.movieList.push(
//     this.newMovieList
//    )
  
//   }
//   deletemovie(i)
//   {
//     this.movieList.splice(i )
//   }
//   selectedvalue(selectvalue)
//   {
// this.choosevaluel=selectvalue;
//   }
}
