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
        resultArray1:any=[];
        radioSel:any;
        radioSelected:string;
        radioSelectedString:string;
       
  constructor(private _fb: FormBuilder, private _sharedservice:SharedService) {   
     this.reesultArray=this._sharedservice.getOptions();  
     this.resultArray1 = this._sharedservice.getOptions1();
     console.log("Lenght From AddOptions & Questions  " + this.reesultArray.length)
      console.log(`Result from AddOptiond & Questions  : ${this.reesultArray}`)
  }


  myForm:FormGroup;


  getSelecteditem(){
    this.radioSel = this.reesultArray.find(Item => Item.value === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }

  onItemChange(item){
    this.getSelecteditem();
  }


 
  
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
