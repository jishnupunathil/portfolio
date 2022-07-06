import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http:HttpClient) { }

  server_address:string='api'

getTesti(){
  return this.http.get<any>(`${this.server_address}/testmo`)
}



}
