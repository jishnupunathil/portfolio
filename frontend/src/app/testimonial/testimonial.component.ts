import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(private testService:TestimonialService) { }
  testiArray:any=[]
  ngOnInit() {
    this.testService.getTesti().subscribe((res)=>{
      console.log({res});
      this.testiArray=res.item
      
    })
  }

}
