import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoginserviceService } from '../loginservice.service';
import { Student } from '../student';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  student:any;
  uniqid:any;
  student2:any;

  oldpassword:any;

  constructor(private logsrv:LoginserviceService, private datasrv:DataService, private router:Router) { 
    this.student=new Student();
  }

  ngOnInit(): void {
    this.uniqid=this.logsrv.studid;
    this.logsrv.loginstudent(this.uniqid).subscribe(
      (data)=>{
        console.log(data);
        this.student=data;
      }
    )
  }

  updateStudent(studForm:any){
    this.student2=studForm.value;
    if(this.oldpassword==this.student.password){

      this.datasrv.updateStudent(this.student2).subscribe();
      alert("Password Changed")
      this.router.navigate(['tostudhome',this.uniqid])
    }
    else{
      alert("Invalid Password")
    }
    
  }

  goBack(){
    this.router.navigate(['tostudhome',this.uniqid])
  }

}
