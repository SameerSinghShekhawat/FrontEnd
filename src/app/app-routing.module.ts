import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { InstformviewComponent } from './instformview/instformview.component';
import { InstitutehomeComponent } from './institutehome/institutehome.component';
import { InstituteregistrationComponent } from './instituteregistration/instituteregistration.component';
import { MinistryhomeComponent } from './ministryhome/ministryhome.component';
import { NewregistrationComponent } from './newregistration/newregistration.component';
import { NodalhomeComponent } from './nodalhome/nodalhome.component';
import { ScholarformviewComponent } from './scholarformview/scholarformview.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"tonewreg", component:NewregistrationComponent},
  {path:"tonewreg/tostudreg", component:StudentregistrationComponent},
  {path:"tonewreg/toinstreg", component:InstituteregistrationComponent},
  {path:"tostudhome/:uniqid", component:StudenthomeComponent},
  {path:"toinsthome/:instid", component:InstitutehomeComponent},
  {path:"tonodalhome", component:NodalhomeComponent},
  {path:"tominhome", component:MinistryhomeComponent},
  {path:"tostudhome/:uniqid/toscholarship/:uniqid", component:ScholarshipComponent},
  {path:"tonodalhome/toinstformview/:instid", component:InstformviewComponent},
  {path:"tonodalhome/toscholarformview/:uniqid", component:ScholarformviewComponent},
  {path:"tominhome/toinstformview1/:instid", component:InstformviewComponent},
  {path:"tominhome/toscholarformview1/:uniqid", component:ScholarformviewComponent},
  {path:"toinsthome/:instid/toscholarformview2/:uniqid", component:ScholarformviewComponent},
  {path:"toforgetpass", component:ForgetpasswordComponent},
  {path:"tostudhome/:uniqid/toupdatestud", component:UpdatestudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
