import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  studid:string=""

  httpBaseUrl:string= "http://localhost:9999/rest/api"

  constructor(private myhttp:HttpClient) { }

  loginstudent(uniqid:String)
  {
    return this.myhttp.get(this.httpBaseUrl+"/student/"+uniqid);
  }

  logininstitue(instid:String){
    return this.myhttp.get(this.httpBaseUrl+"/institute/"+instid);
  }

  loginnodal(userid:String){
    return this.myhttp.get(this.httpBaseUrl+"/nodal/"+userid);
  }

  loginministry(userid:String){
    return this.myhttp.get(this.httpBaseUrl+"/ministry/"+userid);
  }
}
