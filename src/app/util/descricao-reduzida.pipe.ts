import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

    transform(texto: string, truncarEm: number): string {
        return texto.length > truncarEm ? texto.substr(0, truncarEm) + '...' : texto;
    }

}
