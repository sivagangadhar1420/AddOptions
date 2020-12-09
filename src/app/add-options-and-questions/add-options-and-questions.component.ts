import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-options-and-questions',
  templateUrl: './add-options-and-questions.component.html',
  styleUrls: ['./add-options-and-questions.component.css']
})
export class AddOptionsAndQuestionsComponent implements OnInit {

  constructor(private _fb: FormBuilder) {     
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
