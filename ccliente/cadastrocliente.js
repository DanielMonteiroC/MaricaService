var clientes = [];

    function atualizarListaClientes() {
      var listaClientes = document.getElementById("listaClientes");
      listaClientes.innerHTML = "";

      for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];

        var listItem = document.createElement("li");
        listItem.innerHTML = "<strong>Nome Completo:</strong> " + cliente.nome + "<br>" +
                             "<strong>CPF:</strong> " + cliente.cpf + "<br>" +
                             "<strong>CEP:</strong> " + cliente.cep + "<br>" +
                             "<strong>Cidade:</strong> " + cliente.cidade + "<br>" +
                             "<strong>Número:</strong> " + cliente.numero + "<br>" +
                             "<strong>Endereço:</strong> " + cliente.endereco + "<br>" +
                             "<strong>Estado:</strong> " + cliente.estado + "<br>" +
                             "<strong>Data de Nascimento:</strong> " + cliente.dataNascimento + "<br>" +
                             "<strong>Email:</strong> " + cliente.email + "<br>" +
                             "<strong>Telefone:</strong> " + cliente.telefone;
        listaClientes.appendChild(listItem);
      }
    }

    var form = document.getElementById("cadastroForm");
    form.addEventListener("submit", cadastrarCliente);

    function cadastrarCliente(event) {
      event.preventDefault();

      var nomeCompleto = document.getElementById("nome").value;
      var cpf = document.getElementById("cpf").value;
      var cep = document.getElementById("cep").value;
      var cidade = document.getElementById("cidade").value;
      var numero = document.getElementById("numero").value;
      var endereco = document.getElementById("endereco").value;
      var estado = document.getElementById("estado").value;
      var dataNascimento = document.getElementById("dataNascimento").value;
      var email = document.getElementById("email").value;
      var telefone = document.getElementById("telefone").value;
      var senha = document.getElementById("senha").value;
      var confirmarSenha = document.getElementById("confirmarSenha").value;
  
      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
        return;
      }
  
      var senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
  
      if (!senhaRegex.test(senha)) {
        alert("A senha deve conter pelo menos um caractere maiúsculo e um caractere especial.");
        return;
      }
  
      var hoje = new Date();
      var dataNascimentoObj = new Date(dataNascimento);
      var diffAnos = hoje.getFullYear() - dataNascimentoObj.getFullYear();

      if (diffAnos < 18) {
        alert("Apenas pessoas com 18 anos ou mais podem se cadastrar.");
        return;
      }
    
      var cpfValido = /^\d{11}$/.test(cpf);

      if (!cpfValido) {
        alert("O CPF deve ser uma sequência de 11 números.");
        return;
      }

      var clienteExistente = clientes.find(function(cliente) {
        return cliente.cpf === cpf || cliente.email === email;
      });

      if (clienteExistente) {
        alert("CPF ou email já cadastrado. Por favor, verifique os dados e tente novamente.");
        return;
      }

      var cepValido = /^\d{8}$/.test(cep);

      if (!cepValido) {
        alert("O CEP deve ser uma sequência de 8 números.");
        return;
      }

      if (!cidade) {
        alert("Por favor, insira uma cidade válida.");
        return;
      }

      if (!numero) {
        alert("Por favor, insira um número válido.");
        return;
      }

      var cliente = {
        nome: nomeCompleto,
        cpf: cpf,
        cep: cep,
        cidade: cidade,
        numero: numero,
        endereco: endereco,
        estado: estado,
        dataNascimento: dataNascimento,
        email: email,
        telefone: telefone,
        senha: senha
      };

      clientes.push(cliente);

      document.getElementById("nome").value = "";
      document.getElementById("cpf").value = "";
      document.getElementById("cep").value = "";
      document.getElementById("cidade").value = "";
      document.getElementById("numero").value = "";
      document.getElementById("endereco").value = "";
      document.getElementById("estado").value = "";
      document.getElementById("dataNascimento").value = "";
      document.getElementById("email").value = "";
      document.getElementById("telefone").value = "";
      document.getElementById("senha").value = "";
      document.getElementById("confirmarSenha").value = "";
  

      atualizarListaClientes();
    }