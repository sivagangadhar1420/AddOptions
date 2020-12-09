import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empFormss:FormGroup;
  date:any = new Date();
  constructor(private _fb:FormBuilder) { }

  ngOnInit() {
    this.empFormss = this._fb.group({
      billto:["CASH",[Validators.required]],
      icu:["0",[Validators.required]],
      dayssupply:["0", [Validators.required]],
      filldate:[this.date, [Validators.required]],
      fillno:["0", [Validators.required]],
      delivery:["SHIP", [Validators.required]],
      rxtype:["123ASD", [Validators.required]],
      daw:["OverRide", [Validators.required]],
      ucm:["Each" , [Validators.required]],
      sig:['1G', [Validators.required]],
      qtydisp:["10", [Validators.required]],
      qty:["100", [Validators.required]],
      sigdescr:["Take One Table A Day", [Validators.required]],
      note:["Enter Note", [Validators.required]],
      awp:["0.5",[Validators.required]],
      unitcost:["0.3", [Validators.required]],
      awpprice:["0.4", [Validators.required]],
      acqprice:["0.2", [Validators.required]],
      price:["0.5", [Validators.required]],
      costprice:["0.5", [Validators.required]],
      pharmacyfee:["0.5", [Validators.required]],
      lmsdispencingfee:["0.5" , [Validators.required]],
      uc:["0", [Validators.required]],
      patientpay:["7", [Validators.required]],
      billed:["0.5" , [Validators.required]],
      insurancetotalpay:["0.5", [Validators.required]]

    })
  }

}
