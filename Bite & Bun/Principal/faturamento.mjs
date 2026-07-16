import {pedido} from "./Arrays.mjs";

export function faturamentoTotal() {
    const quantidadeDePedidos=7
    return faturamento()/quantidadeDePedidos
};

export function ultrapassamValorDefinido() {
    let i=0
    let pedidosUltrapassados=0
    while (i<pedido.length) {
    if (pedido[i].valor>20) {
        pedidosUltrapassados++        
    }i++
}return pedidosUltrapassados
};

export function maiorEmenor() {
    let i=0
    let menorValor= pedido[0].valor
    let maiorValor= pedido[0].valor

    while (i<pedido.length) {
        let valorNovo=pedido[i].valor;

    if (valorNovo>maiorValor) {
        maiorValor=valorNovo;
    }

    if (valorNovo<menorValor) {
        menorValor=valorNovo;
    }i++;
}
console.log(`Maior valor de venda: ${maiorValor}
Menor valor de venda: ${menorValor}`);

}

export function faturamento() {
    let i=0
    let valor=0
    while (i<pedido.length) {
        i++
       return pedido[i].valor+valor
    }
}