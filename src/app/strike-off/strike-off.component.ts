import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strike-off',
  templateUrl: './strike-off.component.html',
  styleUrls: ['./strike-off.component.css']
})
export class StrikeOffComponent implements OnInit {
  checked:any=false;
  constructor() { 
    this.checked = !this.checked;
  }
  chk1:any=false;

  changelist(){
  this.chk1 = !this.chk1;  
  }

  arryData:any=[
                {'data':"Iam 1", "selected":false},
                {'data':"Iam 2", "selected":false},
                {'data':"Iam 3", "selected":true},
                {'data':"Iam 4", "selected":true},
                {'data':"Iam 5", "selected":false}];
  

                
  checkList(val:any):any{
    this.arryData[val].selected = !this.arryData[val].selected;
  }

  ngOnInit() {
  }

}
