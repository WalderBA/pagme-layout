import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";
import { Usuario } from "../usuarios/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    document.body.style.backgroundColor = '#eceff3';
  }

  login(){
    this.authService.autenticar(this.usuario);
  }

}
