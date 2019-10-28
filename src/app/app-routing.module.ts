import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'my-cars-list',
    children: [
      {
        path: '',
        loadChildren:
          './my-cars-list/my-cars-list.module#MyCarsListPageModule'
      },
      {
        path: ':my-car',
        loadChildren: './my-car/my-car.module#MyCarPageModule'
      }
    ]
  },
  //{ path: 'my-cars-list', loadChildren: './my-cars-list/my-cars-list.module#MyCarsListPageModule' },
  //{ path: 'my-car', loadChildren: './my-car/my-car.module#MyCarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
