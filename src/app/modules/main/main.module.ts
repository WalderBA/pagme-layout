import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

// Material Design
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { LoginComponent } from '../../components/login/login.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UsuariosComponent } from '../../components/usuarios/usuarios.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { PainelInicialComponent } from '../../components/painel-inicial/painel-inicial.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { FavorecidosComponent } from '../../components/favorecidos/favorecidos.component';
import { TransferenciasComponent } from '../../components/transferencias/transferencias.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    UsuariosComponent,
    SidenavComponent,
    PainelInicialComponent,
    FooterComponent,
    NotificationsComponent,
    StatisticsComponent,
    FavorecidosComponent,
    TransferenciasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonToggleModule,
  ],
  exports:[
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonToggleModule,
  ]
})
export class MainModule { }
