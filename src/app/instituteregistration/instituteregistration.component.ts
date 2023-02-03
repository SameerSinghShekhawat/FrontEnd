import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institute } from '../institute';
import { RegistrationserviceService } from '../registrationservice.service';

@Component({
  selector: 'app-instituteregistration',
  templateUrl: './instituteregistration.component.html',
  styleUrls: ['./instituteregistration.component.css']
})
export class InstituteregistrationComponent implements OnInit {

  institute:Institute;

  constructor(private regService:RegistrationserviceService,private router:Router) {
    this.institute=new Institute();
   }

  ngOnInit(): void {
  }
  instituteregister(instForm:any){
    this.institute=instForm.value;
    this.regService.registerInstitute(this.institute).subscribe(
      (data)=>{
        console.log(data);
        alert("Added");
      },
      (error)=>{
        console.log(error);
      }
    )
    instForm.reset();
  }

  goBack(){
    this.router.navigate(['']);
  }

}
