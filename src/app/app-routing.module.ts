import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondRoutes } from './second/second.routing';

const routes: Routes = [
  {
    path: SecondRoutes.Module,
    loadChildren: () =>
      import('./second/second.module').then((m) => m.SecondModule),
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
