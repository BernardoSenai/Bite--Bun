import { faturamentoTotal } from "./faturamento.mjs";
import { faturamento, maiorEmenor, ultrapassamValorDefinido } from "./faturamento.mjs";
console.log(`Faturamento Total: ${faturamento()}
Pedidos com o valor ultrapassado do pré definido: ${ultrapassamValorDefinido()}`);
maiorEmenor();
console.log("Ticket médio: "+faturamentoTotal().toFixed(2));
