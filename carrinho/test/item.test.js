/* eslint-disable no-undef */
import Carrinho from "../carrinho.js";
import Item from "../item.js";

describe('Testes dos itens', () => {
    it('Deve ter 3 campos: nome, valor e quantidade', () => {
        const item = new Item('Beterraba', 2.5, 10);

        expect(item.nome).toBe('Beterraba');
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);
    });
    it('Deve ter o preço calculado de acordo com a quantidade', () => {
        const item = new Item('Batata', 0.1, 3);

        expect(item.pegaValorTotalItem()).toBeCloseTo(0.3);
    });
    it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
        function englobaErroCarrinho(){
            const carrinho = new Carrinho();
            carrinho.finalizaCompra();
        }

        expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
    });
});