import { Component, OnInit } from '@angular/core';
import { App2Service } from '../app2.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
catshowcompleted=false;
dogshowcompleted=false;
  constructor(private service:App2Service ) { }

  ngOnInit() {
    this.service.onSlideShowEnd.subscribe(eventname=>
    {

  if(eventname==='catslideshow')
  {
    this.catshowcompleted=true;
  }
  else if(eventname==='dogslideshow')
   {
     this.dogshowcompleted=true;
   }
  }
    );
  }
}
