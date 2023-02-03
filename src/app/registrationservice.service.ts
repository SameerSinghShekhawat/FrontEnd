import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Institute } from './institute';
import { Scholarship } from './scholarship';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  httpBaseUrl:string="http://localhost:9999/rest/api"

  constructor(private httpClient:HttpClient) { }

  registerStudent(student:Student){
    return this.httpClient.post(this.httpBaseUrl+"/student",student);
  }
  registerInstitute(institute:Institute){
    return this.httpClient.post(this.httpBaseUrl+"/institute",institute)
  }

  registerScholarship(scholarship:Scholarship){
    return this.httpClient.post(this.httpBaseUrl+"/scholarship",scholarship);
  }

  getInstituteForms(){
    return this.httpClient.get(this.httpBaseUrl+"/institute");
  }
  getInstituteDetails(instid:string){
    return this.httpClient.get(this.httpBaseUrl+"/institutedetails/"+instid);
  }

  getScholarForms(){
    return this.httpClient.get(this.httpBaseUrl+"/scholarship");
  }
  getScholarDetails(uniqid:string){
    return this.httpClient.get(this.httpBaseUrl+"/scholarshipdetails/"+uniqid);
  }



}
