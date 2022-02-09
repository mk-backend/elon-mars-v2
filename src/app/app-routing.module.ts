import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.home,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.home,
    component: HomeComponent,
  },
  {
    path: AppRoutes.contact,
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
