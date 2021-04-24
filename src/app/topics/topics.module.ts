import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopicsComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    SidenavModule,
    FormsModule
  ]
})
export class TopicsModule { }
