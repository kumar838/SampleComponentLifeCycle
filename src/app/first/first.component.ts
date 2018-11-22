import { Component, Input, OnChanges,SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnChanges, OnInit {
  @Input() simpleInput:string;
  @Input() arrList:any=[];
  currentValue:string;
  previousValue:string;
  constructor() { }

  ngOnChanges(changes:SimpleChanges){
      console.log("On Change");
      for(let propertyName in changes){
      let change=changes[propertyName];
      let current=JSON.stringify(change.currentValue);
      this.currentValue=change.currentValue;
      let previous=JSON.stringify(change.previousValue);
      this.previousValue=change.previousValue;
      console.log(propertyName + ':current value :- ' +current+' :previous value :- '+previous);
    }
  }

  ngOnInit(){
    console.log("ngOnInit hook called");
  }
  
  ngDoCheck(){
    console.log("ngDoCheck hook called");
  }
}
