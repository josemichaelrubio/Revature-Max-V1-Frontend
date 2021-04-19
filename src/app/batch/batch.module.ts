import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { BatchComponent } from './batch.component';
import { SidenavModule } from '../sidenav/sidenav.module';


@NgModule({
  declarations: [
    BatchComponent
  ],
  imports: [
    CommonModule,
    BatchRoutingModule,
    SidenavModule
  ]
})
export class BatchModule { }
