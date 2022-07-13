import { Component, OnInit } from '@angular/core';

import { notifBarData, imgBanner, tableTrans, lancPendentes, lancFuturos, contCadRec, notifAlertPg, notifPropRec } from "../painel-inicial/notif-data";
import { favorecidos } from './favorecidos.data';

@Component({
  selector: 'app-favorecidos',
  templateUrl: './favorecidos.component.html',
  styleUrls: ['./favorecidos.component.scss']
})
export class FavorecidosComponent implements OnInit {

  favorecidos = favorecidos;

  notifData = notifBarData;
  imgBanner = imgBanner;

  notifAlertPg = notifAlertPg;
  contCadRec = contCadRec;
  notifPropRec = notifPropRec;

  columnsTransacoes = ['data', 'transacao', 'valor', 'saldo', 'comprovante'];
  tableTransacoes = tableTrans;

  tablePendentes = lancPendentes;
  columnsPendentes = ['data', 'transacao', 'valor', 'acoes'];

  tableFuturos = lancFuturos;
  columnsFuturos = ['data', 'transacao', 'valor', 'acoes'];

  constructor() { }

  ngOnInit(): void {
  }

}
