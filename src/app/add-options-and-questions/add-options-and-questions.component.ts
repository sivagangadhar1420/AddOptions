import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-options-and-questions',
  templateUrl: './add-options-and-questions.component.html',
  styleUrls: ['./add-options-and-questions.component.css']
})
export class AddOptionsAndQuestionsComponent implements OnInit {
        reesultArray:any=[];
  constructor(private _fb: FormBuilder, private _sharedservice:SharedService) {   
     this.reesultArray.push(this._sharedservice.getOptions());  
      console.log(`Result from AddOptiond & Questions  : ${this.reesultArray}`)
  }

  myForm:FormGroup;
  
  
  ngOnInit() {
      this.myForm = this._fb.group({
          addresses: this._fb.array([
              this.initAddress(),
          ])
      });
  }
  initAddress() {
      return this._fb.group({
          city: ['']
      });
  }
  addAddress() {
      const control = <FormArray>this.myForm.get('addresses');
      control.push(this.initAddress());
  }
  removeAddress(i: number) {
      const control = <FormArray>this.myForm.get('addresses');
      control.removeAt(i);
    
  }

  

}
