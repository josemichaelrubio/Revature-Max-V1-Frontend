import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchComponent } from './batch.component';
import { AveragesComponent } from './averages/averages.component';


const routes: Routes = [
	{ path: '', component: BatchComponent,
		children: [
			{ path: 'averages', component: AveragesComponent }
		]
	 } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BatchRoutingModule { }
