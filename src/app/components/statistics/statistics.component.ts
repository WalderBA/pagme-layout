import { Component, OnInit } from '@angular/core';

import { notifBarData, imgBanner, tableTrans, lancPendentes, lancFuturos, contCadRec, notifAlertPg, notifPropRec } from "../painel-inicial/notif-data";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

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
