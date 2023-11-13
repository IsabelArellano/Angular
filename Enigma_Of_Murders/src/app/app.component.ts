import { Component, OnInit } from '@angular/core';
import { AboutuscontactService } from "./aboutuscontact.service";
import { Ceo } from './clases/ceos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AboutuscontactService]
})

export class AppComponent implements OnInit{
  title = 'Enigma Of Murders';
  sm = 'SOCIAL MEDIA';

  socialMedias = [
    {
      red: "IG",
      link: [{text:"@studio_vila", url:"https://www.instagram.com/"}]
      
    },
    {
      red: "Gmail",
      link: [{text:"studiovila@gmail.com", url:"https://www.google.com/intl/es/gmail/about/"}]
    }
  ]

  copyright = '@copyright Studio VILA';

  ceos: Array<Ceo> = [];
  selectedCeo: Ceo | undefined;
  constructor( private _contactInfo: AboutuscontactService) {}
  
  ngOnInit(): void {
    this.ceos = this._contactInfo.ObtenerCeos ();
  }

  obtenerCeoPorId(id: number): void {
    this.selectedCeo = this._contactInfo.obtenerCeosporId(id);
  }
}

