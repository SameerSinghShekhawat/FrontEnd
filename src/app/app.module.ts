import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NewregistrationComponent } from './newregistration/newregistration.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { InstituteregistrationComponent } from './instituteregistration/instituteregistration.component';

import { HttpClientModule } from '@angular/common/http';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { InstitutehomeComponent } from './institutehome/institutehome.component';
import { NodalhomeComponent } from './nodalhome/nodalhome.component';
import { MinistryhomeComponent } from './ministryhome/ministryhome.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { InstformviewComponent } from './instformview/instformview.component';
import { ScholarformviewComponent } from './scholarformview/scholarformview.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewregistrationComponent,
    StudentregistrationComponent,
    InstituteregistrationComponent,
    StudenthomeComponent,
    InstitutehomeComponent,
    NodalhomeComponent,
    MinistryhomeComponent,
    ScholarshipComponent,
    InstformviewComponent,
    ScholarformviewComponent,
    ForgetpasswordComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
