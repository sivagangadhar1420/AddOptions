import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-printing-assessment',
  templateUrl: './printing-assessment.component.html',
  styleUrls: ['./printing-assessment.component.css']
})
export class PrintingAssessmentComponent implements OnInit {
    finalResult:any=[];
    finalCheckResult:any=[];
  constructor(private _sharedservice:SharedService) { 

    this.finalResult = this._sharedservice.finalGetOptions();
    this.finalCheckResult = _sharedservice.getFinalCheckBoxes();
  }

  
  ngOnInit() {
  }

}
