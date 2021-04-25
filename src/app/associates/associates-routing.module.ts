import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatesComponent } from './associates.component';
import { CompetenciesComponent } from './competencies/competencies.component';

const routes: Routes = [{ path: '', component: AssociatesComponent,
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociatesRoutingModule { }
