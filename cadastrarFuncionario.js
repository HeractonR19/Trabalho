document.getElementById('funcionarioForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeFuncionario = document.getElementById('nomeFuncionario').value;
    const cargoFuncionario = document.getElementById('cargoFuncionario').value;
    const salarioFuncionario = document.getElementById('salarioFuncionario').value;

    const funcionario = {
      nome: nomeFuncionario,
      cargo: cargoFuncionario,
      salario: salarioFuncionario
    };

    let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    funcionarios.push(funcionario);
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
  });