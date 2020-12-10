import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-options',
  templateUrl: './add-options.component.html',
  styleUrls: ['./add-options.component.css']
})
export class AddOptionsComponent implements OnInit {
empForm:FormGroup;
  constructor(private _fb:FormBuilder, private _sharedservice:SharedService, private _router:Router) { }

  ngOnInit() {
    this.empForm = this._fb.group({
      questionType:[""],
      inpArray:this._fb.array([]),
      // inpArray1:this._fb.array([])
    })

  }
  
  get inpArray():any{
    return this.empForm.get('inpArray') as FormArray;
  }

  addOptionsButton():any{
    this.inpArray.push(this._fb.control(""));
  }
   
  deletOptions(ind:any){
    const res=this.inpArray;
    res.removeAt(ind,1);
    
  
  }

  onSubmit(val:any){

    const res = this.empForm.get('inpArray').value;
    // console.log(  " Lenght of An Array  is " + res.length);
    // We Will Get An array Like ["1","2"];
    // console.log(res);
    // console.log("InSide Array values is : " + res); 
    
    const res1= this.inpArray.value;
    // console.log('We Will Get Values inside an Array  values' + res1.value);
     // We Will Get An array Like ["1","2"];
    // console.log(res1);
    this._sharedservice.sendOptions(res);
    
    this._router.navigate(['/addoptionsquestions']);

  }




    

}
