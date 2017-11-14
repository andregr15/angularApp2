import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

class CarrinhoService {
    public itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[] {
        return this.itens;
    }

    public incluirItem(oferta: Oferta) {

        let itemCarrinho = this.itens.find(x => x.id === oferta.id);
        if (itemCarrinho) {
            itemCarrinho.quantidade++;
        } else {
            let item = new ItemCarrinho (
                oferta.id,
                oferta.imagens[0],
                oferta.titulo,
                oferta.descricao_oferta,
                oferta.valor,
                1
            );

            this.itens.push(item);
        }
    }
}


export { CarrinhoService };
