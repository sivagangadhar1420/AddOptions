import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drugs-details',
  templateUrl: './drugs-details.component.html',
  styleUrls: ['./drugs-details.component.css']
})
export class DrugsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  ndc:any=""; 
  form:any="";
  brand:any= "";
  awp:any="";
  cost:any="";
  prup:any="";
  size:any="";
  qcd:any="";
  rxcost:any=""
  
  res11:any=[];
  
  onSubmit(){
let ft={ndc:this.ndc, form:this.form, brand:this.brand,awp:this.awp,cost:this.cost,prup:this.prup
                    ,size:this.size,qcd:this.qcd, rxcost:this.rxcost};
  this.res11.push(ft);

}

index:any="";

edit(ndc:any, form:any,brand:any,awp:any,cost:any,prup:any, size:any,qcd:any,rxcost:any,ind){
this.index = ind;
this.ndc = ndc;
this.form= form;
this.brand = brand;
this.awp = awp;
this.cost = cost;
this.prup = prup;
this.size = size;
this.qcd = qcd;
this.rxcost = rxcost
}

updateItems(){
for(var i=0; i< this.res11.length; i++){
if( i == this.index){
this.res11[i].ndc = this.ndc;
this.res11[i].form = this.form;
this.res11[i].brand = this.brand;
this.res11[i].awp = this.awp;

this.res11[i].cost = this.cost;
this.res11[i].prup = this.prup;

this.res11[i].size = this.size;
this.res11[i].qcd = this.qcd;
this.res11[i].rxcost = this.rxcost;

}
}
}

delete(ind){
this.res11.splice(ind, 1);
}


}
