import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { Usuario } from "../components/usuarios/usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged_in: boolean = false;

  constructor(private router: Router) { }

  autenticar(usuario: Usuario){
    if (usuario.nome === 'pagme' && usuario.senha === 'sparkmobile') {
      this.logged_in = true;
      console.log(this.logged_in)
      this.router.navigate(['dashboard']);
    }
  }
}
