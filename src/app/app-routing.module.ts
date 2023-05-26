import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'space',
    loadChildren: () =>
      import('./space/space.module').then((m) => m.SpaceModule),
  },
  {
    path: '**',
    redirectTo: 'space',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
