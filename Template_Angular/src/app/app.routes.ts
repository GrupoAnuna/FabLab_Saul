import { Routes } from '@angular/router';
import { Home } from '@features/pages/home/home';
import { Servicios  } from '@features/pages/servicios/servicios';
import { Talleres } from '@features/pages/talleres/talleres';
import { Error } from '@features/pages/error/error';
import { PaginaTemp } from '@features/pages/pagina-temp/pagina-temp';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'servicios', component: Servicios },
  { path: 'talleres', component: Talleres},
  { path: 'pagina_en_construccion', component: PaginaTemp},
  { path: '**', component: Error },
];
