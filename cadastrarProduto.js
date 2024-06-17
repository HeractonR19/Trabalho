document.getElementById('produtoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeProduto = document.getElementById('nomeProduto').value;
    const descricaoProduto = document.getElementById('descricaoProduto').value;
    const precoProduto = document.getElementById('precoProduto').value;

    const produto = {
      nome: nomeProduto,
      descricao: descricaoProduto,
      preco: precoProduto
    };

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
  });