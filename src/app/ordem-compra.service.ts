import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Pedido } from './shared/pedido.model';

import {URL_API} from './app.api';

import 'rxjs/add/operator/map';

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http) { }

    public efetivarCompra(pedido: Pedido): Observable<number> {
        return this.http.post(
           `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            new RequestOptions({ headers: new Headers({ 'Content-type': 'application/json' }) })
        ).map((resposta: Response) => {
            return resposta.json().id;
        });
    }
}
