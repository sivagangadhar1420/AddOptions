import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescribers-details',
  templateUrl: './prescribers-details.component.html',
  styleUrls: ['./prescribers-details.component.css']
})
export class PrescribersDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  license:any=""; 
  phonenumber:any="";
  npl:any= "";
  dea:any="";
  address:any="";

  
  res11:any=[];
  onSubmit(){
let ft={license:this.license, phonenumber:this.phonenumber, npl:this.npl,dea:this.dea,address:this.address};
  this.res11.push(ft);

}

index:any="";

edit(license:any, phonenumber:any,npl:any,dea:any, address:any,ind){
this.index = ind;
this.license = license;
this.phonenumber= phonenumber;
this.npl = npl;
this.dea = dea;
this.address = address;
}

updateItems(){
for(var i=0; i< this.res11.length; i++){
if( i == this.index){
this.res11[i].license = this.license;
this.res11[i].phonenumber = this.phonenumber;
this.res11[i].dea = this.dea;
this.res11[i].npl = this.npl;
this.res11[i].address = this.address;
}
}


}

delete(ind){
this.res11.splice(ind, 1);
}


}
