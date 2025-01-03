let listaProdutos = [];

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeProduto = document.getElementById('nomeProduto').value;
    const descriçãoProduto = document.getElementById('descriçãoProduto').value;
    const preçoProduto = document.getElementById('preçoProduto').value;
    const produtoDisponivel = document.getElementById('produtoDisponivel').value;

    const novoProduto = {
        nome: nomeProduto,
        descrição: descriçãoProduto,
        preço: preçoProduto,
        disponibilidade: produtoDisponivel === 'SIM'
    };

    listaProdutos.push(novoProduto);

    document.getElementById('productForm').reset();

    atualizarListaProdutos();
});

function atualizarListaProdutos(){
    const sortedProdutos = [...listaProdutos].sort((a,b) => a.price - b.price);
    
    const tabelaListaProdutos = document.querySelector('#listaProdutos tbody');
    tabelaListaProdutos.innerHTML = '';

    // Adiciona os produtos ordenados à tabela
    produtosOrdenados.forEach(produto => {
        const linha = document.createElement('tr');
        const celulaNome = document.createElement('td');
        celulaNome.textContent = produto.nome;
        const celulaPreco = document.createElement('td');
        celulaPreco.textContent = `R$ ${produto.preço.toFixed(2)}`;
        linha.appendChild(celulaNome);
        linha.appendChild(celulaPreco);
        tabelaListaProdutos.appendChild(linha);
    });
}

// Função para exibir o formulário de cadastro
document.getElementById('btnNovoProduto').addEventListener('click', function() {
    document.getElementById('formularioProduto').style.display = 'block';
});