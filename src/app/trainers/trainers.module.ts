import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainersComponent } from './trainers.component';
import { ClosetabComponent } from './components/closetab/closetab.component';
import { ExpandtabComponent } from './components/expandtab/expandtab.component';
import { InfoComponent } from './components/info/info.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { BatchDataComponent } from './components/batch-data/batch-data.component';
import { ReferencesComponent } from './components/references/references.component';
import { RepoLinksComponent } from './components/repo-links/repo-links.component';
import { InviteComponent } from './components/invite/invite.component';


@NgModule({
  declarations: [
    TrainersComponent,
    ClosetabComponent,
    ExpandtabComponent,
    InfoComponent,
    SidenavComponent,
    CurriculumComponent,
    BatchDataComponent,
    ReferencesComponent,
    RepoLinksComponent,
    InviteComponent
  ],
  imports: [
    CommonModule,
    TrainersRoutingModule
  ]
})
export class TrainersModule { }
