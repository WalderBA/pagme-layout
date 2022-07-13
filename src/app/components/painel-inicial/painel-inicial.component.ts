import { Component, OnInit } from '@angular/core';

import { notifBarData, imgBanner, tableTrans, lancPendentes, lancFuturos } from "./notif-data";

@Component({
  selector: 'app-painel-inicial',
  templateUrl: './painel-inicial.component.html',
  styleUrls: ['./painel-inicial.component.scss']
})
export class PainelInicialComponent implements OnInit {

  notifData = notifBarData;
  imgBanner = imgBanner;

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
