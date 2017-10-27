import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

    constructor(private http: Http) {}

    public getOfertas(): Promise<Array<Oferta>> {
        // efetuar uma requisição http
        // retornar uma promise oferta[]
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
                   .toPromise()
                   .then((resposta: any) => resposta.json());
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
                   .toPromise()
                   .then((resposta: any) => resposta.json());
    }
}
