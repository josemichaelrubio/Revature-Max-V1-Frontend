import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainersComponent } from './trainers.component';
import { ClosetabComponent } from './components/closetab/closetab.component';
import { ExpandtabComponent } from './components/expandtab/expandtab.component';
import { InfoComponent } from './components/info/info.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    TrainersComponent,
    ClosetabComponent,
    ExpandtabComponent,
    InfoComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    TrainersRoutingModule
  ]
})
export class TrainersModule { }
