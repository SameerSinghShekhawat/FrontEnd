import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  uniqid:any;
  scholarApp:any;

  submitted:boolean=false;

  status=""

  constructor(private actv:ActivatedRoute, private datasrv:DataService, private logsrv:LoginserviceService) { 
    this.uniqid=this.actv.snapshot.paramMap.get('uniqid');
    this.scholarApp
  }

  ngOnInit(): void {
    
    this.logsrv.studid=this.uniqid;
    
    this.datasrv.getScholarApp(this.uniqid).subscribe(
      (data)=>{
        this.scholarApp=data;
        console.log(this.scholarApp);
        if(this.scholarApp==null){
          this.submitted=false;
        }else{
          this.submitted=true;
        if(this.scholarApp.instapproval=="Rejected" || this.scholarApp.nodalapproval=="Rejected" || this.scholarApp.ministryapproval=="Rejected"){
          this.status="Rejected";
        }
        else if(this.scholarApp.ministryapproval=="Approved"){
          this.status="Approved";
        }
        else{
          this.status="Pending...";
        }
        }
      }
    )
    console.log(this.uniqid);
  }

}
