import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Instapproval } from '../instapproval';
import { Institute } from '../institute';
import { LoginserviceService } from '../loginservice.service';
import { Ministry } from '../ministry';
import { Nodal } from '../nodal';
import { Student } from '../student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  student:any;
  uniqid:string=""
  instid:string=""
  institue:any;
  nodal:any;
  ministry:any;
  instapproval:any;

  loginid:string = "";
  password:string = "";
  role:string = "";
  errorMsg = "";
  validatelogin() {
    //StudentLogin---------------------------------------
    if(this.role == "student") {
      this.loginService.loginstudent(this.loginid).subscribe(
        (data)=>{
            this.student=data;
            if(this.student == null)
              alert('Invalid User ID or Password!')
            else if(this.student.password == this.password)
            {
              alert('Login Successful!')
              this.uniqid=this.loginid;
              this.router.navigate(['tostudhome',this.uniqid]);
            }
            else
            alert('Invalid User ID or Password!')
        }
      )
    }
    //InstituteLogIn-------------------------------------
    else if(this.role == "institute" ) {
      this.datasrv.getInstituteApp(this.loginid).subscribe(
        (data)=>{
          console.log(data);
          this.instapproval=data;
        }
      )
      this.loginService.logininstitue(this.loginid).subscribe(
        (data)=>{
          this.institue=data;
          console.log(data);
          if(this.institue == null)
              alert('Invalid User ID or Password OR Approval is Pending')
            else if(this.institue.instpassword == this.password && this.instapproval.ministryapproval=="Approved")
            {
              alert('Login Successful!')
              this.instid=this.loginid;
              this.router.navigate(['toinsthome',this.instid]);
            }
            else
            alert('Invalid User ID or Password OR Approval is Pending')
        }
      )

    }
    //Nodal----------------------------------------------
    else if(this.role == "nodal") {
      this.loginService.loginnodal(this.loginid).subscribe(
        (data)=>{
          this.nodal=data;
          console.log(data);
          if(this.nodal == null)
              alert('Invalid User ID or Password!')
            else if(this.nodal.password == this.password)
            {
              alert('Login Successful!')
              this.router.navigate(['tonodalhome']);
            }
            else
            alert('Invalid User ID or Password!')
        }
      )
    }
    //Ministry------------------------------------------
    else if(this.role == "ministry") {
      this.loginService.loginministry(this.loginid).subscribe(
        (data)=>{
          this.ministry=data;
          console.log(data);
          if(this.ministry == null)
              alert('Invalid User ID or Password!')
            else if(this.ministry.password == this.password)
            {
              alert('Login Successful!')
              this.router.navigate(['tominhome']);
            }
            else
            alert('Invalid User ID or Password!')
        }
      )
    }
    else
    alert('Invaid!')
  }

  constructor(private loginService:LoginserviceService, private router:Router, private datasrv:DataService) { 
    this.student=new Student();
    this.institue=new Institute();
    this.nodal=new Nodal();
    this.ministry=new Ministry();
    this.instapproval=new Instapproval();
  }

  ngOnInit(): void {
  }

}
