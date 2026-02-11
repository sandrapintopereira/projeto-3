import { calcularSaldo, calcularReceita,calcularDespesa } from "../state/state";

export const containerLista = document.querySelector(".lista-transacoes");

export function limparLista() {
   containerLista.innerHTML = "";
   //para teste, retirar no fim
   console.log("lista limpa!");
}

export function criarTransacaoElemento(transacao) {
   const div = document.createElement("div");
   div.className = "transacao-item";
   div.dataset.id = transacao.id;

   div.innerHTML = `
   <span>${transacao.descricao}</span>
   <span>${transacao.categoria}</span>
   <span>${transacao.data}</span>
   <span>${transacao.valor}</span>
   `;
   return div;
};

export function renderizarListaTransacoes(lista) {
   limparLista();
   lista.forEach(transacao => {
      containerLista.appendChild(criarTransacaoElemento(transacao));
   });
   console.log(`${lista.length} transações renderizadas`);
}


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
