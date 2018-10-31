import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable,combineLatest,Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class App2Service {
  public onSlideShowEnd:Subject<string>=new Subject<string>();
  // private catList:string[]=['assets/images/ag.jpg',
  // 'assets/images/Phil68.jpg' ,
  // 'assets/images/charitable-trusts-services-250x250.jpg '];
  
  // private dogList:string[]=['assets/images/sponser.png',
  // 'assets/images/ag.jpg',
  // 'assets/images/Phil68.jpg'];
  getList(){
  const cats$=  this.Http.get<string[]>('./assets/data/cats.json');
  const dogs$= this.Http.get<string[]>('./assets/data/dogs.json');
  const output$= combineLatest(cats$,dogs$);
  return output$.pipe(map(res=>{
    return{
      cats:res[0],
      dogs:res[1]
    };
  }))
  }
  
  getcatlist()
  {
    // return this.catList;
   
    return this.Http.get<string[]>('./assets/data/cats.json');
  }
  getdoglist(){
    // return this.dogList;
     return this.Http.get<string[]>('./assets/data/dogs.json');
   
  }

  constructor(private Http:HttpClient) 
  { 
    
  }
}
