import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyCarsListPage } from './my-cars-list.page';

const routes: Routes = [
  {
    path: '',
    component: MyCarsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyCarsListPage]
})
export class MyCarsListPageModule {}
