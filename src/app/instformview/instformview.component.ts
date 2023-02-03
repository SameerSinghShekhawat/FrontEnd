import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Instapproval } from '../instapproval';
import { Institute } from '../institute';
import { RegistrationserviceService } from '../registrationservice.service';

@Component({
  selector: 'app-instformview',
  templateUrl: './instformview.component.html',
  styleUrls: ['./instformview.component.css']
})
export class InstformviewComponent implements OnInit {

  instid:any;
  institute:any;
  instituteapproval:any;

  alreadydone:boolean=false;

  constructor(private serv:RegistrationserviceService, private actvRoute:ActivatedRoute, private router:Router, private datasrv:DataService) { 
    this.institute=new Institute();
    this.instituteapproval=new Instapproval();
  }

  ngOnInit(): void {
    this.instid=this.actvRoute.snapshot.paramMap.get('instid');
    this.serv.getInstituteDetails(this.instid).subscribe(
      (data)=>{
        console.log(data);
        this.institute=data;
        console.log(this.institute);
      },
      (error)=>{
        console.log(error);
      }
    )

    if(this.datasrv.fromComponent=="ministry"){
    this.datasrv.getInstituteApp(this.instid).subscribe(
      (data)=>{
        console.log(data);
        this.instituteapproval=data;
        if(this.instituteapproval.ministryapproval=="Approved"){
          this.alreadydone=true;
        }
      },
      (error)=>{
        console.log(error);
      }
    )

    }
    else{
      this.datasrv.getInstituteApp(this.instid).subscribe(
        (data)=>{
          console.log(data);
          this.instituteapproval=data;
          if(this.instituteapproval.nodalapproval=="Approved"){
            this.alreadydone=true;
          }
        },
        (error)=>{
          console.log(error);
        }
      )
    }
  }

  approved(){
    if(this.datasrv.fromComponent=="ministry"){
      this.instituteapproval.ministryapproval="Approved";
      console.log(this.instituteapproval);
      this.datasrv.putInstituteApp(this.instituteapproval).subscribe();
      this.router.navigate(['tominhome']);
      this.datasrv.informInstitute(this.instid).subscribe();
    }
    else{
      this.instituteapproval.nodalapproval="Approved";
      console.log(this.instituteapproval);
      this.datasrv.putInstituteApp(this.instituteapproval).subscribe();
      this.router.navigate(['tonodalhome']);
    }
    
  }

  rejected(){
    if(this.datasrv.fromComponent=="ministry"){
     this.instituteapproval.ministryapproval="Rejected";
     this.datasrv.putInstituteApp(this.instituteapproval).subscribe();
     this.alreadydone=true;
     this.router.navigate(['tominhome']);
    }
    else{
      this.instituteapproval.nodalapproval="Rejected";
      this.datasrv.putInstituteApp(this.instituteapproval).subscribe();
      this.alreadydone=true;
      this.router.navigate(['tonodalhome']);
    }
  }

  moveback(){
    if(this.datasrv.fromComponent=="ministry"){
      this.router.navigate(['tominhome']);
    } else{
      this.router.navigate(['tonodalhome']);
    }
  }

}
