import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

class CarrinhoService {
    public itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[] {
        return this.itens;
    }

    public incluirItem(oferta: Oferta) {

        let itemCarrinho = this.findItem(oferta.id);
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

    public totalCarrinhoCompras(): number {
        let total = 0;
        this.itens.map(x => total += x.valor * x.quantidade);
        return total;
    }

    public removerQuantidade(item: ItemCarrinho): void {
        let itemCarrinho = this.findItem(item.id);
        if (itemCarrinho) {
            itemCarrinho.quantidade--;
        }
    }

    public adicionarQuantidade(item: ItemCarrinho): void {
        let itemCarrinho = this.findItem(item.id);
        if (itemCarrinho) {
            itemCarrinho.quantidade++;
        }
    }

    private findItem(id: number): ItemCarrinho {
        return this.itens.find(x => x.id === id);
    }
}

export { CarrinhoService };
