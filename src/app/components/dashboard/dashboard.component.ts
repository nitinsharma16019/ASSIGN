import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
public btnColor:string
public textColor:string
public showMinusBtn:boolean;
public showUl:boolean;
public showForm:boolean
 constructor(){
  this.showMinusBtn = false;
  this.btnColor = 'rgb(181, 178, 178)';
  this.textColor = 'black';
  this.showUl = false
  this.showForm = false
 }


  public onclickPlus():void{
       this.showMinusBtn = true;
       this.btnColor = 'red';
       this.textColor = 'red'
  }
  public onclickMinus() :void{
         this.showMinusBtn = false;
         this.btnColor = 'rgb(181, 178, 178)';
         this.textColor = 'black'
  }

  public onDecoration(): void{
    this.showUl = true;
  }
  public onulClick():void{
      this.showForm = true;
  }
}
