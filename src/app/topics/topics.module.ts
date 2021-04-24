import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics.component';
import { SidenavModule } from '../sidenav/sidenav.module';


@NgModule({
  declarations: [
    TopicsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TopicsRoutingModule,
    SidenavModule,
    FormsModule
  ]
})
export class TopicsModule { }
