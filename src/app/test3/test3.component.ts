import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  inputvalue="Bincy";
@Input()
myTitle: string;
@Output()
onEnd:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.onEnd.emit('Martin');
  }
  onbuttonclick()
  {
    alert(this.inputvalue);
    this.onEnd.emit('Martin');
  }
}
