import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainersComponent } from './trainers.component';
import { InfoComponent } from './components/info/info.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { BatchDataComponent } from './components/batch-data/batch-data.component';
import { ReferencesComponent } from './components/references/references.component';
import { RepoLinksComponent } from './components/repo-links/repo-links.component';
import { InviteComponent } from './components/invite/invite.component';
import { SidenavModule } from '../sidenav/sidenav.module';


@NgModule({
  declarations: [
    TrainersComponent,
    InfoComponent,
    CurriculumComponent,
    BatchDataComponent,
    ReferencesComponent,
    RepoLinksComponent,
    InviteComponent
    

  ],
  imports: [
    CommonModule,
    TrainersRoutingModule,
    SidenavModule
  ]
})
export class TrainersModule { }
