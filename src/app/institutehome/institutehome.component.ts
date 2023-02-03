import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { RegistrationserviceService } from '../registrationservice.service';

@Component({
  selector: 'app-institutehome',
  templateUrl: './institutehome.component.html',
  styleUrls: ['./institutehome.component.css']
})
export class InstitutehomeComponent implements OnInit {

  scholarship:any;
  instid:any;
  institute:any;
  instname:any;

  constructor(private serv:RegistrationserviceService, private router:Router, private dataServ:DataService, private actv:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.instid=this.actv.snapshot.paramMap.get('instid');
    this.dataServ.fromComponent="institute";

    this.serv.getInstituteDetails(this.instid).subscribe(
      (data)=>{
        this.institute=data;
        this.instname=this.institute.instname;
        console.log(this.instname)
        console.log(this.institute)
      }
    )

  }

  getList(){
    this.dataServ.getInstWiseScholar(this.instname).subscribe(
      (data)=>{
        this.scholarship=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
      
    )
  }

}
