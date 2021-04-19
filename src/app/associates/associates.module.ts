import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociatesRoutingModule } from './associates-routing.module';
import { AssociatesComponent } from './associates.component';
import { SidenavModule } from '../sidenav/sidenav.module';


@NgModule({
  declarations: [
    AssociatesComponent
  ],
  imports: [
    CommonModule,
    AssociatesRoutingModule,
    SidenavModule
  ]
})
export class AssociatesModule { }
