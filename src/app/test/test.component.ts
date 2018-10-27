import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
title="";
actor="";

movieList=[
  {
    title:'Yanthiran',
    actor:'Rajanikanth'
  },
  {
    title:"Gilli",
    actor:"Surya"
  },
  {
    title:"Bhima",
    actor:"Vikram"
  },
];
  constructor() { }

  ngOnInit() {
  }
 
  selectedmovie(title,actor){
    this.title=title;
    this.actor=actor;
    
  }
 
}
