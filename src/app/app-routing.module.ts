import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingsComponent } from './billings/billings.component';

const routes: Routes = [
  {
    path :"billings", component:BillingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
