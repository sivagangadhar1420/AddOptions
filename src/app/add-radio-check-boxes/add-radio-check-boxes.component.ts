import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-radio-check-boxes',
  templateUrl: './add-radio-check-boxes.component.html',
  styleUrls: ['./add-radio-check-boxes.component.css']
})
export class AddRadioCheckBoxesComponent implements OnInit {
empForm:FormGroup;
  constructor(private _fb:FormBuilder,private _sharedservice:SharedService) { }

  ngOnInit() {
    this.empForm = this._fb.group({
      questionType:[""],
      checkArray:this._fb.array([]),
      radioArray:this._fb.array([])
      
    })
  }

  get checkArray():any{
    return this.empForm.get('checkArray') as FormArray;
  }


  addCheckBoxes():any{
    this.checkArray.push(this._fb.control(""));
  }

  get radioArray():any{
    return this.empForm.get('radioArray') as FormArray;
  }

  addRadioButtons():any{
    this.radioArray.push(this._fb.control(""));
  }


  deleteCheckBoxes(ind:any){
    const res = this.checkArray;
    res.removeAt(ind,1);
  }


  deleteRadiobuttons(ind:any){
    const res = this.radioArray;
    res.removeAt(ind,1);
  }

  onSubmit(val:any){

    const res=this.empForm.get('radioArray').value;
    const chk=this.empForm.get('checkArray').value;
    // console.log(chk);
    // console.log(chk.length)
    // Getting Array Elements  like ['1','2'];
    // console.log(res);
    // Length Of Ann Array Is
    // console.log(res.length);
    this._sharedservice.finalSendOptions(res);
    this._sharedservice.finalCheckBoxes(chk);
    
    const res1=this.radioArray.value;
    // getting Array Elements  like ['1','2'];
    // console.log(res1);
    // console.log(res1.length);



  }


}

