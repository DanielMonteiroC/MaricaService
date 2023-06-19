// Obtém a referência para o formulário de login
var loginForm = document.getElementById("loginForm");
  // Registra o evento de submissão do formulário
  loginForm.addEventListener("submit", realizarLogin);

  // Função que realiza o login
  function realizarLogin(event) {
    // Previne o comportamento padrão do formulário
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    var tipoUsuario = document.getElementById("tipoUsuario").value;
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    // Verifica o tipo de usuário selecionado e atribui os correspondentes
    var usuarios;
    if (tipoUsuario === "cliente") {
      usuarios = clientes;
    } else if (tipoUsuario === "profissional") {
      usuarios = profissionais;
    } else {
      // Se não houver tipo de usuário selecionado, exibe uma mensagem de erro
      alert("Por favor, selecione o tipo de usuário.");
      return;
    }

    // Busca o usuário com o login e senha informados
    var usuario = usuarios.find(function(usr) {
      return usr.login === login && usr.senha === senha;
    });

    // Se o usuário for encontrado, redireciona para a área do usuário
    if (usuario) {
      if (tipoUsuario === "cliente") {
        window.location.href = "area-do-cliente.html";
      } else if (tipoUsuario === "profissional") {
        window.location.href = "area-do-profissional.html";
      }
    } else {
      // Se o usuário não for encontrado, exibe uma mensagem de erro
      var confirmarCadastro = confirm("Usuário não cadastrado. Deseja se cadastrar?");

      // Se o usuário confirmar o cadastro, redireciona para a página de cadastro
      if (confirmarCadastro) {
        if (tipoUsuario === "cliente") {
          window.location.href = "cadastro-cliente.html";
        } else if (tipoUsuario === "profissional") {
          window.location.href = "cadastro-profissional.html";
        }
      }
    }
  }