import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class App2Service {
  private catList:string[]=['assets/images/ag.jpg',
  'assets/images/Phil68.jpg' ,
  'assets/images/charitable-trusts-services-250x250.jpg '];
  
  private dogList:string[]=['assets/images/sponser.png',
  'assets/images/ag.jpg',
  'assets/images/Phil68.jpg'];
  
  getcatlist()
  {
    return this.catList;
  }
  getdoglist(){
    return this.dogList;
  }

  constructor() { }
}
