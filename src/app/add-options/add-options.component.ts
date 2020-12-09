import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-options',
  templateUrl: './add-options.component.html',
  styleUrls: ['./add-options.component.css']
})
export class AddOptionsComponent implements OnInit {
empForm:FormGroup;
  constructor(private _fb:FormBuilder, private _sharedservice:SharedService) { }

  ngOnInit() {
    this.empForm = this._fb.group({
      inpArray:this._fb.array([])
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
this._sharedservice.sendOptions(res);
    // console.log(res);


  }


    

}
