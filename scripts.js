let listaProdutos = [];

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeProduto = document.getElementById('nomeProduto').value;
    const descricaoProduto = document.getElementById('descricaoProduto').value;
    const precoProduto = parseFloat(document.getElementById('precoProduto').value);
    const produtoDisponivel = document.getElementById('produtoDisponivel').value;

    const novoProduto = {
        nome: nomeProduto,
        descricao: descricaoProduto,
        preco: precoProduto,
        disponibilidade: produtoDisponivel === 'sim'
    };

    listaProdutos.push(novoProduto);

    document.getElementById('productForm').reset();

    atualizarListaProdutos();
});

function atualizarListaProdutos() {
    const sortedProdutos = [...listaProdutos].sort((a, b) => a.preco - b.preco);

    const tabelaListaProdutos = document.querySelector('#listaProdutos tbody');
    tabelaListaProdutos.innerHTML = '';

    sortedProdutos.forEach(produto => {
        const linha = document.createElement('tr');
        const celulaNome = document.createElement('td');
        celulaNome.textContent = produto.nome;
        const celulaPreco = document.createElement('td');
        celulaPreco.textContent = `R$ ${produto.preco.toFixed(2)}`;
        linha.appendChild(celulaNome);
        linha.appendChild(celulaPreco);
        tabelaListaProdutos.appendChild(linha);
    });
}

document.getElementById('novoProduto').addEventListener('click', function() {
    document.getElementById('productForm').scrollIntoView({ behavior: 'smooth' });
});
