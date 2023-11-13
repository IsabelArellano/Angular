import { Injectable } from '@angular/core';
import { Ceo } from './clases/ceos';

@Injectable({
  providedIn: 'root'
})
export class AboutuscontactService {

  private ceos: Ceo[] = [];

  constructor(){
    this.ceos= [
      new Ceo('Laura Ortiz','CEO','Front-End', 'assets/img/lauraAvatar.png'),
      new Ceo('Isabel Arellano','CEO','Back-End', 'assets/img/valeryAvatar.png'),
      new Ceo('Valery Rodriguez','CEO','Back-End', 'assets/img/isabelAvatar.png'),
      new Ceo('Aakriti Guerrero','CEO','Front-End', 'assets/img/aakritiAvatar.png')
    ];
  }

  ObtenerCeos(){
    return this.ceos;
  }

  obtenerCeosporId(id: number):Ceo | undefined {
    let c = this.ceos.find(ceo => ceo.id === id);
    return c;
  }

  obtenerCeosporNombre(nombre: String) {
    return this.ceos.filter(ceo => ceo.nombre_completo === nombre);
  }
  
}
