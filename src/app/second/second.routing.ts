import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecondComponent } from './page/second.component';

export enum SecondRoutes {
  Module = 'second',
  CodeParam = 'code',
}

const routes: Routes = [
  {
    path: `:${SecondRoutes.CodeParam}`,
    component: SecondComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondRoutingModule {}
