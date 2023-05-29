var loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", realizarLogin);

  function realizarLogin(event) {
    event.preventDefault();

    var tipoUsuario = document.getElementById("tipoUsuario").value;
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    var usuarios;
    if (tipoUsuario === "cliente") {
      usuarios = clientes;
    } else if (tipoUsuario === "profissional") {
      usuarios = profissionais;
    } else {
      alert("Por favor, selecione o tipo de usuário.");
      return;
    }

    var usuario = usuarios.find(function(usr) {
      return usr.login === login && usr.senha === senha;
    });

    if (usuario) {
      if (tipoUsuario === "cliente") {
        window.location.href = "area-do-cliente.html";
      } else if (tipoUsuario === "profissional") {
        window.location.href = "area-do-profissional.html";
      }
    } else {
      var confirmarCadastro = confirm("Usuário não cadastrado. Deseja se cadastrar?");

      if (confirmarCadastro) {
        if (tipoUsuario === "cliente") {
          window.location.href = "cadastro-cliente.html";
        } else if (tipoUsuario === "profissional") {
          window.location.href = "cadastro-profissional.html";
        }
      }
    }
  }