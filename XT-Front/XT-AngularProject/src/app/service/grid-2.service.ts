import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grid2 } from '../class/grid-2';

@Injectable({
  providedIn: 'root'
})
export class Grid2Service {

  constructor(private http:HttpClient) { }

  URL='http://localhost:5155/api/'

  getGrid2():Observable<Array<Grid2>>
  {
    debugger
   return this.http.get<Array<Grid2>>(this.URL+"Grid_2");
  
  }
}
