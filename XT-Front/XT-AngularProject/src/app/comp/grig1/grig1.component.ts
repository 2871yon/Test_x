import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Grid1 } from 'src/app/class/grid-1';
import { Grid1Service } from 'src/app/service/grid-1.service';

// export interface PeriodicElement {
//   name: string;
//   amountProducts: number;
// }


@Component({
  selector: 'app-grig1',
  templateUrl: './grig1.component.html',
  styleUrls: ['./grig1.component.css']
})
export class Grig1Component {
constructor(private grid1:Grid1Service){}
  gridList:Grid1[]=[];

  //  // columns we will show on the table
   public displayedColumns = ['name','amountProducts'];
  //  //the source where we will get the data
   public dataSource = new MatTableDataSource<Grid1>();

  ngOnInit() {
    debugger
   this.grid1.getGrid1().subscribe(
     data => {
      debugger
       this.gridList = data;
       console.log(data);
       this.setData()
   },
   err=>{
   console.log(err)
   });
  }

  setData()
  {
    this.dataSource.data = this.gridList;
  }
  
}
