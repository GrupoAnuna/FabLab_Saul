import { Routes } from '@angular/router';
import { Home } from '@features/pages/home/home';
import { Servicios  } from '@features/pages/servicios/servicios';
import { Talleres } from '@features/pages/talleres/talleres';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'servicios', component: Servicios },
  { path: 'talleres', component: Talleres},
  { path: '**', redirectTo: '' },
];
