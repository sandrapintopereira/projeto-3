import { adicionarTransacao, transacoes } from "./transactions/transactions.js";

const botaoAdicionar = document.querySelector(".adiciona-historia");

botaoAdicionar.addEventListener("click", () => {
    const descricao = document.querySelector("#descricao").value.trim();
    const valor = document.querySelector("#quantidade").value;
    const tipo = document.querySelector("#tipo-transacao").value;

    const categoria = "Outros";

    if(!descricao || valor <= 0) {
        alert("Preenche corretamente os campos.");
        return;
    }

    const novaTransacao = adicionarTransacao({
        descricao,
        valor,
        tipo,
        categoria
    });
    //retirar isto depois - só para teste 
    console.log("Transação adicionada:", novaTransacao);
    console.log("Estado atual:", transacoes);
    
})

/*OBJETIVO:
Conectar tudo.

PASSO A PASSO:

1) Capturar inputs do formulário.
2) Escutar clique do botão.
3) Validar dados.
4) Criar objeto transação.
5) Atualizar estado.
6) Re-renderizar UI.
7) Limpar formulário.

IMPORTANTE:
Sempre que adicionar uma transação:
- Atualizar lista
- Atualizar cards

Pergunta:
O que deve acontecer quando a página recarrega?
*/
