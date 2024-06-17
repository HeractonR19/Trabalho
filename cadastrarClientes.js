// document.getElementById('cadastroForm').addEventListener('submit', function(event) {
//      event.preventDefault();

// const clientes = [];

// function cadastrarCliente() {
//   const usuario = document.getElementById("usuario").value;
//   const senha = document.getElementById("senha").value;
//   const nome = document.getElementById("nome").value;
//   const razaoSocial = document.getElementById("razaoSocial").value;
//   const email = document.getElementById("email").value;

//   if (
//     !usuario === "" ||
//     !senha === "" ||
//     !nome === "" ||
//     !razaoSocial === "" ||
//     !email === ""
//   ) {
//     alert("Preencha todos os campos obrigatórios.");
//     return;
//   }

//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     alert("Por favor, insira um email válido");
//     return;
//   }

//   console.log("Cadastro do cliente");
//   console.log("Usuário: ", usuario);
//   console.log("Nome: ", nome);
//   console.log("Razão Social: ", razaoSocial);
//   console.log("Email: ", email);

//   document.getElementById("cadastroForm").reset();

//   const novoCliente = {
//     usuario,
//     senha,
//     nome,
//     razaoSocial,
//     email,
//   };
//   document.addEventListener(
//     "DOMContentLoaded",

//     function () {
//       clientes.push(novoCliente);

//       const botaoCadastrar = document.getElementById("botaoCadastrar");
//       botaoCadastrar.addEventListener("click", cadastrarCliente);
//     }
//   );
// }

document.getElementById("cadastroForm")
  document.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const razaoSocial = document.getElementById("razaoSocial").value;
    const email = document.getElementById("email").value;

    if (usuario === "" || senha === "" || razaoSocial === "" || email === "") {
      displayMessage("Todos os campos são obrigatórios.", "error");
      return;
    }

    if (!validateEmail(email)) {
      displayMessage("Email inválido.", "error");
      return;
    }

    const cliente = {
      usuario: usuario,
      senha: senha,
      razaoSocial: razaoSocial,
      email: email,
    };

    localStorage.setItem("cliente", JSON.stringify(cliente));
    // displayMessage("Cadastro realizado com sucesso!", "success");

    document.getElementById("cadastroForm").reset();
  });

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

function displayMessage(message, type) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  messageDiv.className = type;
}
