import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PrescribersDetailsComponent } from './prescribers-details/prescribers-details.component';
import { DrugsDetailsComponent } from './drugs-details/drugs-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOptionsComponent } from './add-options/add-options.component';
import { AddOptionsAndQuestionsComponent } from './add-options-and-questions/add-options-and-questions.component';
import { SharedService } from './shared.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatRadioButton, MatRadioModule } from '@angular/material';
import { AddRadioCheckBoxesComponent } from './add-radio-check-boxes/add-radio-check-boxes.component';
import { PrintingAssessmentComponent } from './printing-assessment/printing-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PatientDetailsComponent,
    PrescribersDetailsComponent,
    DrugsDetailsComponent,
    AddOptionsComponent,
    AddOptionsAndQuestionsComponent,
    AddRadioCheckBoxesComponent,
    PrintingAssessmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,FormsModule, BrowserAnimationsModule,
     MatCardModule,MatCheckboxModule, MatButtonModule , MatRadioModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
