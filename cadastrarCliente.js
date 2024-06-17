document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeCliente = document.getElementById('nomeCliente').value;
    const emailCliente = document.getElementById('emailCliente').value;
    const contatoCliente = document.getElementById('contatoCliente').value;

    const cliente = {
      nome: nomeCliente,
      email: emailCliente,
      contato: contatoCliente
    };

    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
  });