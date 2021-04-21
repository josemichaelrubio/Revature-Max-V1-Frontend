import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { BatchComponent } from './batch.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { AveragesComponent } from './averages/averages.component';
import { BatchLandingComponent } from './batch-landing/batch-landing.component';


@NgModule({
  declarations: [
    BatchComponent,
    AveragesComponent,
    BatchLandingComponent
  ],
  imports: [
    CommonModule,
    BatchRoutingModule,
    SidenavModule
  ]
})
export class BatchModule { }
