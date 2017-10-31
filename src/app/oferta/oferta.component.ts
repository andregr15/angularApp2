import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  private sub1: Subscription;
  private sub2: Subscription;

  constructor(private ofertasService: OfertasService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro.id);
    // });
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        }).
        catch((param: any) => console.log(param));

        // this.route.params.subscribe(
        //   (parametro: any) => console.log(parametro),
        //   (erro: any) => console.log(erro),
        //   () => console.log('processamento foi classificado como concluído!')
        // );

        let tempo = Observable.interval(500);
        this.sub1 = tempo.subscribe((intervalo: number) => {
          console.log(intervalo);
        });

        // observable (observável)
        let meuObservableTeste = Observable.create(
          (observer: Observer<number>) => {
            observer.next(1);
            observer.next(2);
            observer.complete();
          }
        );


        // observable (observador)
        this.sub2 = meuObservableTeste.subscribe(
          (resultado: number) => { console.log(resultado); },
          (erro: string) => { console.log(erro); },
          () => { console.log('stream de eventos foi finalizada'); }
        );
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
