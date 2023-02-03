import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { RegistrationserviceService } from '../registrationservice.service';
import { Scholarapproval } from '../scholarapproval';
import { Scholarship } from '../scholarship';

@Component({
  selector: 'app-scholarformview',
  templateUrl: './scholarformview.component.html',
  styleUrls: ['./scholarformview.component.css']
})
export class ScholarformviewComponent implements OnInit {

  uniqid:any;
  scholarship:any;
  scholarapproval:any;
  instid:any;

  alreadydone:boolean=false;

  constructor(private dataSrv:DataService, private router:Router, private actv:ActivatedRoute, private regSrv:RegistrationserviceService) { 
    this.scholarship=new Scholarship();
    this.scholarapproval=new Scholarapproval();
  }

  ngOnInit(): void {

    this.uniqid=this.actv.snapshot.paramMap.get('uniqid');
    this.regSrv.getScholarDetails(this.uniqid).subscribe(
      (data)=>{
        this.scholarship=data;
        console.log(this.scholarship);
      },
      (error)=>{
        console.log(error);
      }
   )

    if(this.dataSrv.fromComponent=="ministry"){
      this.dataSrv.getScholarApp(this.uniqid).subscribe(
        (data)=>{
          console.log(data);
          this.scholarapproval=data;
          if(this.scholarapproval.ministryapproval=="Approved"){
            this.alreadydone=true;
          }
        },
        (error)=>{
          console.log(error);
        }
      )

    }
    else if(this.dataSrv.fromComponent=="nodal"){
      this.dataSrv.getScholarApp(this.uniqid).subscribe(
        (data)=>{
          console.log(data);
          this.scholarapproval=data;
          if(this.scholarapproval.nodalapproval=="Approved"){
            this.alreadydone=true;
          }
        },
        (error)=>{
          console.log(error);
        }
      )

    }
    else {
      this.dataSrv.getScholarApp(this.uniqid).subscribe(
        (data)=>{
          console.log(data);
          this.scholarapproval=data;
          if(this.scholarapproval.instapproval=="Approved"){
            this.alreadydone=true;
          }
        },
        (error)=>{
          console.log(error);
        }
      )
      this.instid=this.actv.snapshot.paramMap.get('instid');
    }

  }
    

  approved(){
    if(this.dataSrv.fromComponent=="ministry"){
      this.scholarapproval.ministryapproval="Approved";
      console.log(this.scholarapproval);
      this.dataSrv.putScholarApp(this.scholarapproval).subscribe();
      this.router.navigate(['tominhome']);
    } else if(this.dataSrv.fromComponent=="nodal"){
      this.scholarapproval.nodalapproval="Approved";
      console.log(this.scholarapproval);
      this.dataSrv.putScholarApp(this.scholarapproval).subscribe();
      this.router.navigate(['tonodalhome']);
    } else{
      this.scholarapproval.instapproval="Approved";
      console.log(this.scholarapproval);
      this.dataSrv.putScholarApp(this.scholarapproval).subscribe();
      this.router.navigate(['toinsthome',this.instid]);
    }
  }

  rejected(){
    if(this.dataSrv.fromComponent=="ministry"){
      this.scholarapproval.ministryapproval="Rejected";
      this.dataSrv.putScholarApp(this.scholarapproval).subscribe();
      this.alreadydone=true;
      this.router.navigate(['tominhome']);

    } else if(this.dataSrv.fromComponent=="nodal"){
      this.scholarapproval.nodalapproval="Rejected";
      this.dataSrv.putScholarApp(this.scholarapproval).subscribe();
      this.alreadydone=true;
      this.router.navigate(['tonodalhome']);
    } else {
      this.scholarapproval.instapproval="Rejected";
      this.dataSrv.putScholarApp(this.scholarapproval).subscribe();
      this.alreadydone=true;
      this.router.navigate(['toinsthome',this.instid]);
    }
  }

  moveback(){
    if(this.dataSrv.fromComponent=="ministry"){
      this.router.navigate(['tominhome']);
    }else if(this.dataSrv.fromComponent=="nodal"){
      this.router.navigate(['tonodalhome']);
    } else {
      this.router.navigate(['toinsthome',this.instid]);
    }
    
  }

}
