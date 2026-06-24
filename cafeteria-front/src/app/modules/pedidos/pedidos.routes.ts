import { Routes } from '@angular/router';
import { MisPedidosComponent } from './pages/mis-pedidos/mis-pedidos';
import { DetallePedidoComponent } from './pages/detalle-pedido/detalle-pedido';

export const pedidosRoutes: Routes = [
  { path: '', component: MisPedidosComponent },
  { path: ':id', component: DetallePedidoComponent },
];
