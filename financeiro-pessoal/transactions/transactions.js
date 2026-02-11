
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

   return novaTransacao;
}



function removerTransacao () {

}

function atualizarTransacao () {

}
/*
OBJETIVO:
Calcular saldo total, total de receitas e total de despesas.

PENSAMENTO:

1) O saldo começa em 0.
2) Para cada transação:
   - Se for receita, soma.
   - Se for despesa, subtrai.
3) Para calcular totais separados:
   - Filtrar por tipo.
   - Somar valores.

DICA IMPORTANTE:
Use reduce().

Pergunta:
- O que é o acumulador?
- Qual deve ser o valor inicial?

Exemplo mental:
[100, -50, 200]
Resultado esperado: 250

Não escreva loops tradicionais.
*/
