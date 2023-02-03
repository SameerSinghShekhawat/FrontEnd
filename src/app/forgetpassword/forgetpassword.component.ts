import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  loginid:any;

  timeLeft:number=5;
  interval;

  constructor(private datasrv:DataService) { }

  ngOnInit(): void {
  }

  resetpass(){
    this.datasrv.forgetPass(this.loginid).subscribe();
    alert("Password changed");
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

}
