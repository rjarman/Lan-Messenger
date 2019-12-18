import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivePage } from './active.page';

const routes: Routes = [
  {
    path: '',
    component: ActivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivePageRoutingModule {}
