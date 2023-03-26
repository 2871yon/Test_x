import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Grid2 } from 'src/app/class/grid-2';
import { Grid2Service } from 'src/app/service/grid-2.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-grig2',
  templateUrl: './grig2.component.html',
  styleUrls: ['./grig2.component.css']
})
export class Grig2Component {
  constructor(private grid2:Grid2Service){}
  gridList2:Grid2[]=[];

  //  // columns we will show on the table
   public displayedColumns = ['sumProduct','name'];
  //  //the source where we will get the data
   public dataSource1 = new MatTableDataSource<Grid2>();

  ngOnInit() {
    debugger
   this.grid2.getGrid2().subscribe(
     data => {
      debugger
       this.gridList2 = data;
       console.log(data);
       this.setDatag2()
   },
   err=>{
   console.log(err)
   });
  }
  // renderAgain()
  // {
  //   this.dataSource.renderRows()
  // }
  setDatag2()
  {
    this.dataSource1.data = this.gridList2;
  }
}
