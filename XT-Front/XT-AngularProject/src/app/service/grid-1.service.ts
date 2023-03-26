import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grid1 } from '../class/grid-1';

@Injectable({
  providedIn: 'root'
})
export class Grid1Service {

  constructor(private http:HttpClient) { }
  URL='http://localhost:5155/api/'

  getGrid1():Observable<Array<Grid1>>
  {
    debugger
   return this.http.get<Array<Grid1>>(this.URL+"Grid_1");
  
  }

}
