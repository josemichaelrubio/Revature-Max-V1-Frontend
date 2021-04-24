import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociatesRoutingModule } from './associates-routing.module';
import { AssociatesComponent } from './associates.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { CompetenciesComponent } from './competencies/competencies.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AssociatesComponent,
    CompetenciesComponent
  ],
  imports: [
    CommonModule,
    AssociatesRoutingModule,
    SidenavModule,
    FormsModule
  ],
  exports: [
  	AssociatesComponent,
  	CompetenciesComponent
  ]
})
export class AssociatesModule { }
