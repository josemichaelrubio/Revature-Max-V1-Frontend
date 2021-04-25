import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav.component';
import { ClosetabComponent } from './components/closetab/closetab.component';
import { ExpandtabComponent } from './components/expandtab/expandtab.component';


@NgModule({
  declarations: [
    SidenavComponent,
    ClosetabComponent,
    ExpandtabComponent
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule
  ],
  exports: [
    SidenavComponent,
    ClosetabComponent,
    ExpandtabComponent
  ]
})
export class SidenavModule { }
