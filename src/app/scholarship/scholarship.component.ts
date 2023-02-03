import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries.service';
import { DataService } from '../data.service';
import { RegistrationserviceService } from '../registrationservice.service';
import { Scholarship } from '../scholarship';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.css']
})
export class ScholarshipComponent implements OnInit {

  uniqid:any;
  scholarship:Scholarship;
  institute:any;

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  image1:any;
  image2:any;
  image3:any;
  image4:any;
  image5:any;

  constructor(private actv:ActivatedRoute, private regService:RegistrationserviceService, private datsrv:DataService, private countries:CountriesService) { 
    this.scholarship=new Scholarship();
  }

  ngOnInit(): void {
    this.uniqid=this.actv.snapshot.paramMap.get('uniqid');
    this.regService.getInstituteForms().subscribe(
      (data)=>{
        console.log(data);
        this.institute=data;
      }
    )

    this.countries.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        this.stateInfo=this.countryInfo[100].States;
        console.log('Data:', this.countryInfo[100].States);
        //console.log('Data:', this.countryInfo[100]);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  saveScholarship(schForm:any){
    this.scholarship=schForm.value;
    this.regService.registerScholarship(this.scholarship).subscribe(
      (data)=>{
        console.log(data);
        alert("Scholarship Application Submitted");
      },
      (error)=>{
        console.log(error);
      }
    )
    schForm.reset();
  }

  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    console.log(this.cityInfo);
  }


  onFileChange1(event){
    this.image1=event.target.files[0];
  }
  onFileChange2(event){
    this.image2=event.target.files[0];
  }
  onFileChange3(event){
    this.image3=event.target.files[0];
  }
  onFileChange4(event){
    this.image4=event.target.files[0];
  }
  onFileChange5(event){
    this.image5=event.target.files[0];
  }

  upload() {
    let formData1: FormData = new FormData();
    let formData2: FormData= new FormData();
    let formData3: FormData= new FormData();
    let formData4: FormData= new FormData();
    let formData5: FormData= new FormData();

    formData1.append('file', this.image1);
    formData1.append('uniqid', this.uniqid);
    formData1.append('name', this.uniqid+"studphoto.jpg")

    formData2.append('file', this.image2);
    formData2.append('uniqid', this.uniqid);
    formData2.append('name', this.uniqid+"semestermarksheet.jpg")

    formData3.append('file', this.image3);
    formData3.append('uniqid', this.uniqid);
    formData3.append('name', this.uniqid+"idcard.jpg")

    formData4.append('file', this.image4);
    formData4.append('uniqid', this.uniqid);
    formData4.append('name', this.uniqid+"10thmarksheet.jpg")

    formData5.append('file', this.image5);
    formData5.append('uniqid', this.uniqid);
    formData5.append('name', this.uniqid+"12thmarksheet.jpg")
  
    this.datsrv.upload(formData1).subscribe(data => {
      alert(JSON.stringify(data));
    })

    this.datsrv.upload(formData2).subscribe(data => {
      alert(JSON.stringify(data));
    })

    this.datsrv.upload(formData3).subscribe(data => {
      alert(JSON.stringify(data));
    })

    this.datsrv.upload(formData4).subscribe(data => {
      alert(JSON.stringify(data));
    })

    this.datsrv.upload(formData5).subscribe(data => {
      alert(JSON.stringify(data));
    })
  }

}
