import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnDestroy{

  title: string;
  constructor() {
    this.title = "Hello Mahesh!";
  }

  onClick() {
    this.title = "Value Change";
  }

  ngAfterViewInit(){
    console.log("After view init");
  }
       
  ngAfterViewChecked(){
     console.log("After value updated");
  }

  ngOnInit() {
    console.log('ChildComponent:OnInit');
  }
    
  ngOnDestroy() {
    console.log('ChildComponent:OnDestroy');
  }
     
}
