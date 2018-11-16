import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { IUser } from '../models/user';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  inputvalue="input";
 
// @Input()

//   menuvalue : Array<string>;
  @Input()

  listvalue : IUser[];

  @Output()
onEnd: EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
   
  }
  // onbtnclick(myval)
  // {
  //  alert(this.inputvalue);
  // }
  // menuitemclick(e,menu)
  // {
  //   // e.preventDefault();
  
  //   this.onEnd.emit(menu);
  // }
}
