import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociatesRoutingModule } from './associates-routing.module';
import { AssociatesComponent } from './associates.component';


@NgModule({
  declarations: [
    AssociatesComponent
  ],
  imports: [
    CommonModule,
    AssociatesRoutingModule
  ]
})
export class AssociatesModule { }
