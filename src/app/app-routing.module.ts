import { TransferenciasComponent } from './components/transferencias/transferencias.component';
import { FavorecidosComponent } from './components/favorecidos/favorecidos.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PainelInicialComponent } from './components/painel-inicial/painel-inicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'painel-inicial', component: PainelInicialComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'favorecidos', component: FavorecidosComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'transferencias', component: TransferenciasComponent },
      { path: '', redirectTo: 'painel-inicial', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
