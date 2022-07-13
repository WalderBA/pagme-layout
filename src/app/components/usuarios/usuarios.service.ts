import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  getUsuarios(){
    return [
      {
        id: 1,
        nome: 'Walder',
        email: 'walder@gmail.com'
      },
      {
        id: 2,
        nome: 'Lídia',
        email: 'lidia@gmail.com'
      },
    ]
  }

  constructor() { }
}
