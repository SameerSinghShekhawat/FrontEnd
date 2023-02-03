import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationserviceService } from '../registrationservice.service';
import { Student } from '../student';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  student:Student;

  constructor(private regService:RegistrationserviceService, private router:Router) { 
    this.student=new Student();
  }

  ngOnInit(): void {
  }

  registerStudent(studForm:any){
    this.student=studForm.value;
    this.regService.registerStudent(this.student).subscribe(
      (data)=>{
        console.log(data);
        alert("Registered");
      },
      (error)=>{
        console.log(error);
      }
    )
    studForm.reset();
  }

  goBack(){
    this.router.navigate(['']);
  }

}
