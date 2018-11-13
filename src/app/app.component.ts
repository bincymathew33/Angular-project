import { Component ,OnInit,Input,Output,EventEmitter} from '@angular/core';
import { AppService } from './app.service';
import { App2Service } from './app2.service';
import { IUser } from './models/user';



import {  movies} from './models/movielistclass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:IUser[]=[];
  catlist:string[]=[];
  doglist:string[]=[];
  Menulist:Array<string>=['Home' ,'About' ,'ContactUs'];
  buttonlist:Array<string>=['View','AddEmployee'];
  list:string[];
  title = 'myapp1';
  description="details";
  showsection=false;
activeindex="";
  menuitemclick(item)
  {
alert('menuitemclick'+" " +item);
  }
  myfun(val){
    this.showsection=!this.showsection;
    alert('function is from app component');
  }

// catList:string[]=['assets/images/ag.jpg',
// 'assets/images/Phil68.jpg' ,
// 'assets/images/charitable-trusts-services-250x250.jpg '];

// dogList:string[]=['assets/images/sponser.png',
// 'assets/images/ag.jpg',
// 'assets/images/Phil68.jpg'];
oncatshowcomplete(urlvale)
{
// alert('cat show completed');
// console.log(urlvale);
this.imageservice.onSlideShowEnd.next('catslideshow');
}
ondogshowcomplete(urlvale)
{
// alert('dog show complete');
// console.log(urlvale);
this.imageservice.onSlideShowEnd.next('dogslideshow');
}
ngOnInit()
 {
 
 this.service.getUservalue().subscribe((user:IUser[])=>
 {
   this.users=user;
 });
 this.imageservice.getList().subscribe (list=>{
 console.log(list);
 this.catlist=list.cats;
 this.doglist=list.dogs;
 });
//  this.imageservice.getcatlist().subscribe (catlist=>{
// this.catlist=catlist;
//  });

//  this.imageservice. getdoglist().subscribe (doglist=>{
//   this.doglist=doglist;
//    });
//  this.catlist=this.imageservice.getcatlist();
//  this.doglist=this.imageservice.getdoglist();
}
constructor(private service:AppService, private imageservice:App2Service)
{
  
}




selectedmovie1:"";
choosevalue='listvalue';

choosevaluel=0;
@Input()
Movielist:Array<string>;
@Output()
output: EventEmitter<number>=new EventEmitter<number>();
// movieList :Array<MovieList> =[
//   {
//     title:'Yanthiran',
//     actor:'Rajanikanth'
//   },
//   {
//     title:"Gilli",
//     actor:"Surya"
//   },
//   {
//     title:"Bhima",
//     actor:"Vikram"
//   },
// ];
onbuttonclick(i)
{
  
 this.output.emit(i)
}
movieList :Array<movies> =[
  new movies('Yanthiran','Rajanikanth')
]
newMovieList : movies  =new movies('','');
//newMovieList : MovieList  = {title:'',actor:''};
  
 clearselection()
 {
   this.movieList.forEach(emp =>emp.selected=false);
 }


  selectedmovie(movie){
    
    this.clearselection();
    movie.selected=true;
    this.selectedmovie1=movie;
    
  }
  addemployee(){
    
    this.movieList.push(
    this.newMovieList
   )
  
  }
  deletemovie(i)
  {
    
    this.movieList.splice(i )
    this.clearselection();
  }
  selectedvalue(selectvalue)
  {
  
this.choosevaluel=selectvalue;
  }

}
