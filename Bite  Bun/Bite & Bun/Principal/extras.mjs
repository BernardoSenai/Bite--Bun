import {faturamento} from './faturamento.mjs';
import {pedido} from "./Arrays.mjs";

function faturamentoComDesconto() {
let i=0
let valor=0

while (i<pedido.length) {
    if(pedido[i].valor>30) {
    valor=pedido[i].valor*0.1
};
i++
} return valor
}console.log(faturamentoComDesconto().toFixed(2));

function clienteRepetido() {
    let i=0
    let clienteRepetido=0
    while (i<pedido.length) {
        if (pedido[i].nome===pedido[i++].nome) {
            clienteRepetido++
        }
    i++
}
    return clienteRepetido;
}
console.log(`Clientes repetidos: ${clienteRepetido()}`);