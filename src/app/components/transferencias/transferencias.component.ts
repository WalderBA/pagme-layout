import { Component, OnInit } from '@angular/core';

import { notifBarData } from "../painel-inicial/notif-data";

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.scss']
})
export class TransferenciasComponent implements OnInit {

  notifData = notifBarData;

  constructor() { }

  ngOnInit(): void {
  }

}
