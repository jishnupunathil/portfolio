import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http:HttpClient) { }

getTesti(){
  return this.http.get<any>('http://localhost:5000/testmo')
}



}
