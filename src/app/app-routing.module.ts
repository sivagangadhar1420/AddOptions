import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOptionsAndQuestionsComponent } from './add-options-and-questions/add-options-and-questions.component';
import { AddOptionsComponent } from './add-options/add-options.component';
import { AddRadioCheckBoxesComponent } from './add-radio-check-boxes/add-radio-check-boxes.component';
import { DrugsDetailsComponent } from './drugs-details/drugs-details.component';
import { HomeComponent } from './home/home.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PrescribersDetailsComponent } from './prescribers-details/prescribers-details.component';
import { PrintingAssessmentComponent } from './printing-assessment/printing-assessment.component';


const routes: Routes = [
  
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'patientDetails', component:PatientDetailsComponent},
  {path:'prescriberdetails', component:PrescribersDetailsComponent},
  {path:'drugdetails', component:DrugsDetailsComponent},
  {path:'addoptions', component:AddOptionsComponent},
  {path:'addoptionsquestions', component:AddOptionsAndQuestionsComponent},
  {path:'addradiocheckboxes', component:AddRadioCheckBoxesComponent},
  {path:'assessmentresult', component:PrintingAssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
