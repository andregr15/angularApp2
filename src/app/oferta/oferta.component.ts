import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta;

  constructor(private ofertasService: OfertasService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro.id);
    // });

    this.route.params.subscribe( (parametros: Params) => {
        this.ofertasService.getOfertaPorId(parametros.id)
          .then( (oferta: Oferta) => this.oferta = oferta )
          .catch( (param: any) => console.log(param) );
      }
    );
  }

  ngOnDestroy() {
  }
}
