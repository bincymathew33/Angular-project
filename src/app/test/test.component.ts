import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {  movies} from '../models/movielistclass';
import { MovieList} from '../models/movie';

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
Movielist:Array<string>;
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
