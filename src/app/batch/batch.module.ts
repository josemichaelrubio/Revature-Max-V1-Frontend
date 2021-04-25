import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { BatchComponent } from './batch.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { AveragesComponent } from './averages/averages.component';
import { BatchLandingComponent } from './batch-landing/batch-landing.component';
import { ChartsModule } from 'ng2-charts';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    BatchComponent,
    AveragesComponent,
    BatchLandingComponent,
    CurriculumComponent
  ],
  imports: [
    CommonModule,
    BatchRoutingModule,
    SidenavModule,
    ChartsModule,
    FullCalendarModule
  ],
})
export class BatchModule { }
