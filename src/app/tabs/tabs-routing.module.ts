import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'persos',
        loadChildren: () => import('../persos/persos.module').then( m => m.PersosPageModule)
      },
      {
        path: 'persos/:id',
        loadChildren: () => import('../details-perso/details-perso.module').then( m => m.DetailsPersoPageModule)
      },
      {
        path: 'Form',
        loadChildren: () => import('../form-cu/form-cu.module').then( m => m.FormCUPageModule)
      },
      {
        path: 'Form/:id',
        loadChildren: () => import('../form-cu/form-cu.module').then( m => m.FormCUPageModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('../gallery/gallery.module').then( m => m.GalleryPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then( m => m.UserPageModule)
      },
    ]
  },
  
    {
      path:'',
      redirectTo: '/tabs/persos',
      pathMatch:'full'

    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class TabsPageRoutingModule {}
