import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RegistrationserviceService } from '../registrationservice.service';

@Component({
  selector: 'app-nodalhome',
  templateUrl: './nodalhome.component.html',
  styleUrls: ['./nodalhome.component.css']
})
export class NodalhomeComponent implements OnInit {

  institute:any;
  scholarship:any;

  constructor(private serv:RegistrationserviceService, private router:Router, private dataServ:DataService) { 
    
  }

  ngOnInit(): void {

    this.dataServ.fromComponent="nodal";

    this.serv.getInstituteForms().subscribe(
      (data)=>{
        console.log(data);
        this.institute=data;
      },
      (error)=>{
        console.log(error);
      }
    )

    this.serv.getScholarForms().subscribe(
      (data)=>{
        console.log(data);
        this.scholarship=data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
