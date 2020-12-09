import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  // modalForm:FormGroup;

 


constructor(private _fb:FormBuilder) { }

  ngOnInit() {

  //   this.modalForm = this._fb.group({
  //     dob:[''],
  //     age:[],
  //     gender:[],
  //     lmstype:[],
  //     group:[],
  //     rel:[],
  //     personcode:[],
  //     address:[]
  //   })
  }


  dob:any=""; 
  age:any="";
  gender:any= "";
  lmsType:any="";
  group:any="";
  rel:any="";
  personCode:any="";
  address:any="";
  
  res11:any=[];
  onSubmit(){
let ft={"dob":this.dob, age:this.age, gender:this.gender,lmsType:this.lmsType,group:this.group,rel:this.rel
                    ,personCode:this.personCode,address:this.address};
  this.res11.push(ft);

}

index:any="";

edit(dob:any, age:any,gender:any,lmsType:any,group:any,rel:any, personCode:any,address:any,ind){
this.index = ind;
this.dob = dob;
this.age= age;
this.gender = gender;
this.lmsType = lmsType;
this.group = group;
this.rel = rel;
this.personCode = personCode;
this.address = address;
}

updateItems(){
for(var i=0; i< this.res11.length; i++){
if( i == this.index){
this.res11[i].dob = this.dob;
this.res11[i].age = this.age;
this.res11[i].gender = this.gender;
this.res11[i].lmsType = this.lmsType;

this.res11[i].group = this.group;
this.res11[i].rel = this.rel;

this.res11[i].personCode = this.personCode;
this.res11[i].address = this.address;
}
}
}

delete(ind){
this.res11.splice(ind, 1);
}

}

