import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

import { CarrinhoService } from '../carrinho.service';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta;

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService
  ) { }

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

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta);
  }
}
