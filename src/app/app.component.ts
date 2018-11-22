import { Component, AfterContentInit, ContentChild, AfterContentChecked } from '@angular/core';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'after-content',
  template: `
              <div class="row">
                <div class="col-md-4">
                  <div class="card">
                  <div class="card-header bg-primary text-white"> ngAfterViewInit() and ngAfterViewChecked() </div>
                  <div class="card-body">
                     <div>
                        <input type="text" />
                        <ng-content></ng-content><br>
                      </div>
                  </div>
                  </div>
                </div>
              </div>`,
})

export class AfterContent {
  ngAfterContentCheckedcalled = 0;

  @ContentChild(SecondComponent) contentChild: SecondComponent;

  //uncomment this when you want to run ngAfterContentInit and ngAfterContentChecked
  // ngAfterContentInit() {
  //   this.contentChild.title = "my first title";
  //   console.log("After content in it");
  // }

  // ngAfterContentChecked() {
  //   this.ngAfterContentCheckedcalled += 1;
  //   console.log("After content checked");
  // }
}

@Component({
  selector: 'app-root',
  template: `<div class="row">
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-header bg-primary text-white"> ngOnDestroy() </div>
                    <div class="card-body">
                      <div>
                          <button class='btn btn-success' (click)="toggle()">Hide/Show Child </button>
                          <app-second *ngIf="displayChild"></app-second>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`,

  // Uncomment the below template if you want to run ngOnChanges()
  // template: `
  //             <div class="row">
  //               <div class="col-md-4">
  //                 <div class="card">
  //                    <div class="card-header bg-success text-white">ngOnChange()</div>
  //                    <div class="card-body"><input type="text" [(ngModel)] = "enterValue" /><br/>
  //                       <app-first [simpleInput]="enterValue" > </app-first>
  //                    </div>
  //                 </div>
  //               </div>
  //             </div>`,


  //Uncomment the below template when you want to run ngOnChange() and ngDoCheck()
  // template: `
  //             <div class="row">
  //               <div class="col-md-4">
  //                 <div class="card">
  //                    <div class="card-header bg-primary text-white">ngOnChange() vs ngDoCheck()</div>
  //                    <div class="card-body">
  //                      <input type="text" [(ngModel)] = "enterValue" /><br/>
  //                      <app-first [simpleInput]="enterValue" [arrList] = "myArr"></app-first> 
  //                      <button class='btn btn-primary' (click)="addValue()"> Add </button>   
  //                    </div>
  //                 </div>
  //               </div>
  //             </div>`,



  //uncomment this template if you want to run ngAfterViewInit and ngAfterViewChecked
  // template: `
  //             <div>
  //               <after-content>
  //               <app-second></app-second>
  //               </after-content>
  //             </div>
  //           `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayChild = true;
  constructor() {
      console.log('AppComponent:Constructor');
  }
  toggle() {
      this.displayChild = !this.displayChild;
  }
  ngOnInit() {
      console.log('AppComponent:OnInit');
  }
  ngOnDestroy() {
      console.log('AppComponent:OnDestroy');
  }

  // Uncomment this when you want to run ngDoCheck()
  // enterValue:string;
  // myArr: any = ['C', 'C++', 'C#'];
  // addValue() {
  //   this.myArr.push("Java");
  //   }


}

