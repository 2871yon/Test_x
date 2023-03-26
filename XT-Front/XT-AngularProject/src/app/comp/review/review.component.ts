import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
  
})
export class ReviewComponent {

constructor(private Route:Router){}
routingFunction(s:string){
  debugger
  // this.routingFunction("/grid1")'
  this.Route.navigate([s])
}
}
