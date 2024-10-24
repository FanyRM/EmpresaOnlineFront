import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { TiendaModule } from './modules/tienda/tienda.module';
import { EmpleadoModule } from './modules/empleado/empleado.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { GerenteModule } from './modules/gerente/gerente.module';
import { AdministradorModule } from './modules/administrador/administrador.module';

//Componentes
import { Error404Component } from './modules/componentes/error404/error404.component';

const routes: Routes = [
  //Administradores
  {
    path: 'administracion',
    loadChildren:() => import('./modules/administrador/administrador.module').then(m => m.AdministradorModule),
  },
  //Tienda ya con login
  {
    path: 'tienda',
    loadChildren:() => import('./modules/cliente/cliente.module').then(m => m.ClienteModule),
  },
  //Tienda sin login
  {
    path: 'empresa',
    loadChildren:() => import('./modules/tienda/tienda.module').then(m => m.TiendaModule),
  },
  //Empleados
  {
    path: 'empleado',
    loadChildren:() => import('./modules/empleado/empleado.module').then(m => m.EmpleadoModule),
  },
  //Gerentes
  {
    path: 'gerente',
    loadChildren:() => import('./modules/gerente/gerente.module').then(m => m.GerenteModule),
  },
  //Componente de error al encontrar una url
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: 'empresa',
    pathMatch: 'full'

  },
  {
    path :'**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
