// Função para cadastrar um novo usuário
document.getElementById('register-button').addEventListener('click', function() {
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;
    
    // Salva os dados no localStorage
    localStorage.setItem(newUsername, newPassword);
    
    // Redireciona para a tela de login
    window.location.href = 'telaLogin.html';
});

// Função para logar o usuário
document.getElementById('login-button').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Verifica se os dados estão corretos
    if(localStorage.getItem(username) === password) {
        // Redireciona para outra página
        window.location.href = 'telaFuncionario.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});