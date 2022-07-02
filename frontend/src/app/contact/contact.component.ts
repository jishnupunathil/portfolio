import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router) { }

  model={
    uname:'',
    usubject:'',
    uemail:'',
    umessage:''
  }

  ngOnInit(): void {
  }

  resetForm(){

    window.alert('message Submitted')
    this.router.navigate(['/'])
  }

}
