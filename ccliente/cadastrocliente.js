// Definição de uma lista vazia para armazenar os clientes
var clientes = [];

// Função responsável por atualizar a lista de clientes exibida na página HTML
function atualizarListaClientes() {
  // Obtém a referência ao elemento HTML que irá exibir a lista de clientes
  var listaClientes = document.getElementById("listaClientes");

  // Limpa o conteúdo atual da lista
  listaClientes.innerHTML = "";

  // Percorre a lista de clientes e cria um item da lista para cada cliente
  clientes.forEach(function(cliente) {
    // Cria um novo elemento HTML para representar o item da lista
    var listItem = document.createElement("li");

    // Define o conteúdo HTML do item da lista com as informações do cliente
    listItem.innerHTML = `
      <strong>Nome Completo:</strong> ${cliente.nome}<br>
      <strong>CPF:</strong> ${cliente.cpf}<br>
      <strong>CEP:</strong> ${cliente.cep}<br>
      <strong>Cidade:</strong> ${cliente.cidade}<br>
      <strong>Número:</strong> ${cliente.numero}<br>
      <strong>Endereço:</strong> ${cliente.endereco}<br>
      <strong>Estado:</strong> ${cliente.estado}<br>
      <strong>Data de Nascimento:</strong> ${cliente.dataNascimento}<br>
      <strong>Email:</strong> ${cliente.email}<br>
      <strong>Telefone:</strong> ${cliente.telefone}
    `;

    // Adiciona o item da lista à lista de clientes
    listaClientes.appendChild(listItem);
  });
}

// Obtém a referência ao formulário de cadastro
var form = document.getElementById("cadastroForm");

// Adiciona um evento de submit ao formulário para chamar a função cadastrarCliente
form.addEventListener("submit", cadastrarCliente);

// Função responsável por cadastrar um novo cliente
function cadastrarCliente(event) {
  // Evita o comportamento padrão de envio do formulário
  event.preventDefault();

  // Obtém os valores dos campos do formulário
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

  // Verifica se as senhas coincidem
  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
    return;
  }

  // Verifica se a senha atende aos critérios de segurança
  var senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
  if (!senhaRegex.test(senha)) {
    alert("A senha deve conter pelo menos um caractere maiúsculo e um caractere especial.");
    return;
  }

  // Verifica se a idade é maior ou igual a 18 anos
  var hoje = new Date();
  var dataNascimentoObj = new Date(dataNascimento);
  var diffAnos = hoje.getFullYear() - dataNascimentoObj.getFullYear();
  if (diffAnos < 18) {
    alert("Apenas pessoas com 18 anos ou mais podem se cadastrar.");
    return;
  }

  // Verifica se o CPF possui 11 dígitos numéricos
  var cpfValido = /^\d{11}$/.test(cpf);
  if (!cpfValido) {
    alert("O CPF deve ser uma sequência de 11 números.");
    return;
  }

  // Verifica se o cliente já está cadastrado pelo CPF ou email
  var clienteExistente = clientes.find(function(cliente) {
    return cliente.cpf === cpf || cliente.email === email;
  });
  if (clienteExistente) {
    alert("CPF ou email já cadastrado. Por favor, verifique os dados e tente novamente.");
    return;
  }

  // Verifica se o CEP possui 8 dígitos numéricos
  var cepValido = /^\d{8}$/.test(cep);
  if (!cepValido) {
    alert("O CEP deve ser uma sequência de 8 números.");
    return;
  }

  // Verifica se foi informada uma cidade válida
  if (!cidade) {
    alert("Por favor, insira uma cidade válida.");
    return;
  }

  // Verifica se foi informado um número válido
  if (!numero) {
    alert("Por favor, insira um número válido.");
    return;
  }

  // Cria um objeto cliente com as informações fornecidas
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

  // Adiciona o novo cliente à lista de clientes
  clientes.push(cliente);

  // Limpa os campos do formulário
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

  // Atualiza a lista de clientes na página
  atualizarListaClientes();
}
