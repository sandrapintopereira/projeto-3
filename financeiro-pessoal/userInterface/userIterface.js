import { calcularSaldo, calcularReceita,calcularDespesa } from "../state/state.js";
import { retornarListaTransacoes } from "../transactions/transactions.js";

export const containerLista = document.querySelector(".lista-transacoes");

export function limparLista() {
   return containerLista.innerHTML = "";
}

export function criarTransacaoElemento(transacao) {
   const div = document.createElement("div");
   div.className = "item-transacao";
   let valorFormatado;

   if(transacao.tipo === "receita") {
      valorFormatado = transacao.valor + "€";
   } else {
      valorFormatado = transacao.valor + "-€";
   };

   div.innerHTML = `
   <span>${transacao.descricao}</span>
   <span>${transacao.data}</span>
   <span>${valorFormatado}</span>
   `;
   return div;
};

export function renderizarListaTransacoes(lista) {
   limparLista();
   lista.forEach(transacao => {
      containerLista.appendChild(criarTransacaoElemento(transacao));
   });
};




/*
OBJETIVO:
Atualizar a interface sempre que o estado mudar.

PENSAMENTO:

1) Selecionar o container da lista.
2) Limpar o conteúdo antes de renderizar novamente.
3) Para cada transação:
   - Criar elemento HTML dinamicamente.
   - Inserir no DOM.
4) Atualizar os cards com os valores calculados.

REFLEXÃO:
- Por que limpar antes de renderizar?
- O que acontece se não limpar?

DESAFIO:
Como aplicar classes diferentes para receita e despesa?
*/
