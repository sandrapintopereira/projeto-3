
export let transacoes = [];

export function adicionarTransacao(dados) {
   const novaTransacao = {
      id: Date.now(),
      descricao: dados.descricao,
      valor: Number(dados.valor),
      tipo: dados.tipo,
      categoria: dados.categoria,
      data: new Date().toLocaleDateString()
   };

   transacoes.push(novaTransacao);
   //teste
   console.log(transacoes);
   console.log(novaTransacao);
   return novaTransacao;

   
}

export function removerTransacao (id) {
   transacoes = transacoes.filter(t => t.id !== id);

   return transacoes;

}

export function atualizarTransacao (id, novosDados) {
   transacoes = transacoes.map(t => {
      if(t.id === id) {
         return {
            ...t,
            descricao: novosDados.descricao,
            valor: Number(novosDados.valor),
            tipo: novosDados.tipo,
            categoria: novosDados.categoria
         };
      }
      return t;
   });

   return transacoes;
}
/*
OBJETIVO:
Centralizar o controle das transações em memória.

PENSAMENTO:

1) Carregar as transações salvas quando o sistema iniciar.
2) Criar função para:
   - Retornar lista atual.
   - Adicionar nova transação.
   - (Opcional) remover transação.
3) Sempre que alterar o estado:
FALTA ATUALIZAR O LOCALSTORAGE
   - Atualizar o localStorage.

REFLEXÃO:
- Por que não manipular o localStorage diretamente no UI?
- O que significa separar responsabilidade?

DESAFIO:
Como garantir que o array nunca fique fora de sincronia?
*/