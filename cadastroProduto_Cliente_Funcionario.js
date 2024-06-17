// Formulário de cadastro de clientes
const clientes = [];
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const cliente = {
    razaoSocial: document.querySelector('#inputRazaoSocial').value,
    nome: document.querySelector('#inputNome').value,
    email: document.querySelector('#inputEmail').value,
    contato: document.querySelector('#inputContato').value,
    usuario: document.querySelector('#inputUsuario').value,
    senha: document.querySelector('#inputSenha').value,
  };
  clientes.push(cliente);
  localStorage.setItem('clientes', JSON.stringify(clientes));
});

// Formulário de cadastro de produtos
const produtos = [];
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const produto = {
    cor: document.querySelector('#selectCor').value,
    tecido: document.querySelector('#selectTecido').value,
    tamanho: document.querySelector('#selectTamanho').value,
    quantidade: document.querySelector('#inputQuantidade').value,
    estampa: document.querySelector('#selectEstampa').value,
    observacoes: document.querySelector('#textareaObservacoes').value,
  };
  produtos.push(produto);
  localStorage.setItem('produtos', JSON.stringify(produtos));
});

// Formulário de cadastro de funcionários
const funcionarios = [];
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const funcionario = {
    // campos do formulário de cadastro de funcionários
  };
  funcionarios.push(funcionario);
  localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
});