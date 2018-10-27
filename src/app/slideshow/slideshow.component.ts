import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
interface IMyEventProps{
  timeofcompletion: Date;
  lastitemurl: string
}
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  activeindex=0;
  isbuttondisable=false;
 
@Input()
list: string[];
@Output()
onEnd: EventEmitter<IMyEventProps>=new EventEmitter<IMyEventProps>();
  constructor() { }

  ngOnInit() {
  }
forwardbtnclick()
{
  this.activeindex=this.activeindex+1;
  if(this.activeindex===this.list.length-1){
    this.isbuttondisable=true;
    const eventprop: IMyEventProps={
      timeofcompletion: new Date(),
      lastitemurl: this.list[this.activeindex]
      
          };
    this.onEnd.emit(eventprop);
    //console.log(eventprop);
   
  }
}
}
