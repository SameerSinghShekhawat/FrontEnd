import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instapproval } from './instapproval';
import { Scholarapproval } from './scholarapproval';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fromComponent:string="";

  httpBaseUrl:string="http://localhost:9999/rest/api"

  constructor(private httpClient:HttpClient) { }

  getInstituteApp(instid:string){
    return this.httpClient.get(this.httpBaseUrl+"/instituteapproval/"+instid);
  }

  putInstituteApp(instapproval:Instapproval){
    return this.httpClient.put(this.httpBaseUrl+"/instituteapproval",instapproval);
  }

  getScholarApp(uniqid:string){
    return this.httpClient.get(this.httpBaseUrl+"/scholarapproval/"+uniqid);
  }
  putScholarApp(scholarapp:Scholarapproval){
    return this.httpClient.put(this.httpBaseUrl+"/scholarapproval",scholarapp);
  }

  getInstWiseScholar(instname:string){
    return this.httpClient.get(this.httpBaseUrl+"/instwisescholar/"+instname);
  }

  updateStudent(student:Student){
    return this.httpClient.put(this.httpBaseUrl+"/student",student);
  }


  upload(formData: FormData) {
    let url='http://localhost:9999/rest/api/image';
    return this.httpClient.post(url, formData);
  }


  forgetPass(uniqid:string){
    return this.httpClient.get(this.httpBaseUrl+"/forgetpass/"+uniqid);
  }

  informInstitute(instid:string){
    return this.httpClient.get(this.httpBaseUrl+"/informinst/"+instid);
  }

}
