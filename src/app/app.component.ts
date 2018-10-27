import { Component } from '@angular/core';
import { AppService } from './app.service';
import { App2Service } from './app2.service';
import { IUser } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:IUser[]=[];
  catlist:string[]=[];
  doglist:string[]=[];
  list:string[];
  title = 'myapp1';
  description="details";
  showsection=false;
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
// oncatshowcomplete(urlvale)
// {
// //alert('cat show completed');
// console.log(urlvale);
// }
// ondogshowcomplete(urlvale)
// {
// //alert('dog show complete');
// console.log(urlvale);
// }
ngOnInit()
 {
 
 this.service.getUservalue().subscribe((users:IUser[])=>
 {
   this.users=users;
 });
  

 this.catlist=this.imageservice.getcatlist();
 this.doglist=this.imageservice.getdoglist();
}
constructor(private service:AppService, private imageservice:App2Service)
{
  
}


}
