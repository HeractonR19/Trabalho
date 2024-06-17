const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
clientes.forEach((cliente) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${cliente.nome} - ${cliente.email} - ${cliente.contato}`;
  document.getElementById('clientes').appendChild(listItem);
});

const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
funcionarios.forEach((funcionario) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${funcionario.nome} - ${funcionario.cargo} - ${funcionario.salario}`;
  document.getElementById('funcionarios').appendChild(listItem);
});

const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
produtos.forEach((produto) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${produto.nome} - ${produto.descricao} - ${produto.preco}`;
  document.getElementById('produtos').appendChild(listItem);
});