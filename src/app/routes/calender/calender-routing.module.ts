import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivateGuard} from '../../guards/private.guard';
import {MyCalenderComponent} from './calender.component';

const routes: Routes = [
  {
    path: 'calender',
    canActivate: [PrivateGuard],
    children: [
      {
        path: '',
        component: MyCalenderComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class CalenderRoutingModule { }
