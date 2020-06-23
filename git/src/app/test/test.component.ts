import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
  salam how ate 
  <input [id]="myid" type="text" [value]="myid">
  <br>
  <input disabled id={{myid}} type="text" [value]="myid">
  <input [disabled]="dis" id={{myid}} type="text" [value]="myid">
  <br>
  <input bind-disabled="dis" type="text" value="bind">
  <h2>welocme {{name}}</h2>
  <h1 [ngClass]="message">this is for ng class</h1>
    <h2 class={{sucess}}> {{2+2}}</h2>
    <h2>{{"hello"+name}}</h2>
    <h2 [class]="sucess">{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{user()}}</h2>
    <h2 class="suc">{{urrls}}</h2>
    <h2 [class]="sucess" class="italic" >test for italic</h2>
   
  </div>`,
  styles :[`
  div{
    color:blue;
    text-align:center;
  }
  .suc{
    color:green;
  }
  .danger{
    color:red;
  }
  .italic{
    font-style:italic
  }
  
  `]
})
export class TestComponent implements OnInit {
  public dis= false;
  public sucess="suc";
  public name="mohamad";
  public myid="test";
  public urrls=window.location.href;
  public haserr=true;
  public isitalic=false;

  public message={
    "suc":!this.haserr,
    "italic":this.isitalic,
    "danger":this.haserr
  }
  constructor() { }

  ngOnInit() {
  }
  user(){
return "goodbye"+this.name;

  }
}
