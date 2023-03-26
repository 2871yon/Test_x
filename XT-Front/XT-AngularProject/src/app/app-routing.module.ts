import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Grig1Component } from './comp/grig1/grig1.component';
import { Grig2Component } from './comp/grig2/grig2.component';



const routes: Routes = [
  //{path:"",component:AppComponent},
  {path:"grid1",component:Grig1Component},
  {path:"grid2",component:Grig2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
