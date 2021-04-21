import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchDataComponent } from './components/batch-data/batch-data.component';
import { InfoComponent } from './components/info/info.component';
import { InviteComponent } from './components/invite/invite.component';
import { TrainersComponent } from './trainers.component';

const routes: Routes = [
    { path: '', component: TrainersComponent, children:
      [
        { path: 'info', component: InfoComponent},
        { path: 'batch-data', component: BatchDataComponent },
        { path: 'batch-associates', component: InviteComponent }
      ]
    },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainersRoutingModule { }
