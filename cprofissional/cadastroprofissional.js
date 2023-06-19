// Array que armazena os profissionais cadastrados
var profissionais = [];
    
    // Função que atualiza a lista de profissionais exibida na página
    function atualizarListaProfissionais() {
      // Obtém a referência da lista de profissionais na página
      var listaProfissionais = document.getElementById("listaProfissionais");
      // Limpa a lista de profissionais
      listaProfissionais.innerHTML = "";
      
      // Itera sobre o array de profissionais
      for (var i = 0; i < profissionais.length; i++) {
        var profissional = profissionais[i];
        
        // Cria um novo elemento de lista para cada profissional
        var listItem = document.createElement("li");
        // Preenche o conteúdo do item da lista com os dados do profissional
        listItem.innerHTML = "<strong>Nome Completo:</strong> " + profissional.nome + "<br>" +
                             "<strong>CPF:</strong> " + profissional.cpf + "<br>" +
                             "<strong>CEP:</strong> " + profissional.cep + "<br>" +
                             "<strong>Cidade:</strong> " + profissional.cidade + "<br>" +
                             "<strong>Número:</strong> " + profissional.numero + "<br>" +
                             "<strong>Endereço:</strong> " + profissional.endereco + "<br>" +
                             "<strong>Estado:</strong> " + profissional.estado + "<br>" +
                             "<strong>Data de Nascimento:</strong> " + profissional.dataNascimento + "<br>" +
                             "<strong>Email:</strong> " + profissional.email + "<br>" +
                             "<strong>Telefone:</strong> " + profissional.telefone;
                             // Adiciona o item da lista à lista de profissionais na página
                             listaProfissionais.appendChild(listItem);
      }
    }
    // Obtém a referência ao formulário de cadastro na página
    var form = document.getElementById("cadastroForm");
    // Registra um evento de envio (submit) do formulário para chamar a função cadastrarProfissional
    form.addEventListener("submit", cadastrarProfissional);

    // Função que cadastra um novo profissional
    function cadastrarProfissional(event) {
      // Previne o comportamento padrão do evento de envio do formulário
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
  
      // Verifica se as senhas digitadas são iguais
      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
        return;
      }

      // Verifica se a senha atende aos requisitos mínimos
      var senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
      if (!senhaRegex.test(senha)) {
        alert("A senha deve conter pelo menos um caractere maiúsculo e um caractere especial.");
        return;
      }

      // Verifica se os dados abaixo são válidos
      var hoje = new Date();
      var dataNascimentoObj = new Date(dataNascimento);
      var diffAnos = hoje.getFullYear() - dataNascimentoObj.getFullYear();
      
      if (diffAnos < 18) {
        alert("Apenas pessoas com 18 anos ou mais podem se cadastrar.");
        return;
      }
  
      var cpfValido = /^\d{11}$/.test(cpf);

      if (!cpfValido) {
        alert("Verifique o CPF");
        return;
      }

      var profissionalExistente = profissionais.find(function(profissional) {
        return profissional.cpf === cpf;
      });

      if (profissionalExistente) {
        alert("CPF já cadastrado. Por favor, verifique os dados e tente novamente.");
        return;
      }

      var cepValido = /^\d{8}$/.test(cep);

      if (!cepValido) {
        alert("Verifique o CEP");
        return;
      }

      if (!cidade) {
        alert("Verifique a cidade");
        return;
      }

      if (!numero) {
        alert("Verifique o número");
        return;
      }

      // Cria um objeto com os dados do profissional
      var profissional = {
        nome: nomeCompleto,
        empresa: nomeNegocio,
        cnpj: cnpj,
        profissao: PROFISSOES,
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
      
      // Adiciona o novo profissional ao array de profissionais
      profissionais.push(profissional);

      document.getElementById("nome").value = "";
      document.getElementById("empresa").value = "";
      document.getElementById("cnpj").value = "";
      document.getElementById("profissao").value = "";
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

      // Atualiza a lista de profissionais na página
      atualizarListaProfissionais();
    }

  const PROFISSOES = [
    { name: 'Administrador de Rede' },
    { name: 'Administrador(a)' },
    { name: 'Administrador(a) de Banco de Dados' },
    { name: 'Administrador(a) de Empresas' },
    { name: 'Administrador(a) de Recursos Humanos' },
    { name: 'Administrador(a) Hospitalar' },
    { name: 'Administradora de Serviços do Lar' },
    { name: 'Advogado(a)' },
    { name: 'Agente Ambiental' },
    { name: 'Agricultor(a)' },
    { name: 'Agrônomo(a)' },
    { name: 'Agropecuarista' },
    { name: 'Ajudante de Caminhão' },
    { name: 'Ajudante de Composição' },
    { name: 'Ajudante de Foguista' },
    { name: 'Ajudante de Vidreiro' },
    { name: 'Almoxarife' },
    { name: 'Analista' },
    { name: 'Analista Administrativo (a)' },
    { name: 'Analista Contábil' },
    { name: 'Analista de Administração de Pessoal' },
    { name: 'Analista de Captação' },
    { name: 'Analista de Contratos' },
    { name: 'Analista de Controladoria' },
    { name: 'Analista de Controle Interno' },
    { name: 'Analista de Crédito' },
    { name: 'Analista de Custos' },
    { name: 'Analista de Departamento Pessoal' },
    { name: 'Analista de Exportação' },
    { name: 'Analista de Faturamento' },
    { name: 'Analista de IT' },
    { name: 'Analista de Laboratório' },
    { name: 'Analista de Logística' },
    { name: 'Analista de Marketing' },
    { name: 'Analista de Negócios' },
    { name: 'Analista de Orçamentos' },
    { name: 'Analista de Organização e Métodos' },
    { name: 'Analista de Pessoal' },
    { name: 'Analista de Recursos Humanos' },
    { name: 'Analista de Remuneração Senior' },
    { name: 'Analista de Sistemas' },
    { name: 'Analista de Suporte Administrativo' },
    { name: 'Analista de Suporte Pleno' },
    { name: 'Analista de Tecidos' },
    { name: 'Analista de Vendas' },
    { name: 'Analista Financeiro' },
    { name: 'Analista Fiscal' },
    { name: 'Analista Senior de Previdência Privada' },
    { name: 'Analista Tributária' },
    { name: 'Apicultor(a)' },
    { name: 'Aposentado(a)' },
    { name: 'Armador de Pesca' },
    { name: 'Arquiteto(a)' },
    { name: 'Artesão(ã)' },
    { name: 'Assistente Administrativo' },
    { name: 'Assistente Comercial' },
    { name: 'Assistente Contábil' },
    { name: 'Assistente de Contas' },
    { name: 'Assistente de Departamento Pessoal' },
    { name: 'Assistente de Escritório' },
    { name: 'Assistente de Faturamento' },
    { name: 'Assistente de Gerencia de R.H.' },
    { name: 'Assistente de Hotelaria Hospitalar' },
    { name: 'Assistente de Planejamento' },
    { name: 'Assistente de Processo' },
    { name: 'Assistente de Produção' },
    { name: 'Assistente de Recursos Humanos' },
    { name: 'Assistente de Suprimentos' },
    { name: 'Assistente Financeiro' },
    { name: 'Assistente Jurídico' },
    { name: 'Assistente Social' },
    { name: 'Assistente Técnico Operacional' },
    { name: 'Atendente' },
    { name: 'Ator' },
    { name: 'Atriz' },
    { name: 'Auditor(a)' },
    { name: 'Auditor(a) Fiscal' },
    { name: 'Autônomo(a)' },
    { name: 'Aux. de Serviços Gerais' },
    { name: 'Auxiliar Acadêmico' },
    { name: 'Auxiliar Administrativo' },
    { name: 'Auxiliar Contábil' },
    { name: 'Auxiliar de Compras' },
    { name: 'Auxiliar de Cozinha' },
    { name: 'Auxiliar de Departamento de Crédito' },
    { name: 'Auxiliar de Departamento Financeiro' },
    { name: 'Auxiliar de Departamento Fiscal' },
    { name: 'Auxiliar de eletricista' },
    { name: 'Auxiliar de Enfermagem' },
    { name: 'Auxiliar de Escritório' },
    { name: 'Auxiliar de Inspeção de Qualidade' },
    { name: 'Auxiliar de Laboratório' },
    { name: 'Auxiliar de Produção' },
    { name: 'Auxiliar de Registro de Saúde' },
    { name: 'Auxiliar de RH' },
    { name: 'Auxiliar de Serviços' },
    { name: 'Auxiliar Financeiro' },
    { name: 'Auxiliar Operacional' },
    { name: 'Auxiliar Técnico' },
    { name: 'Avicultor( a )' },
    { name: 'Bailarina (o)' },
    { name: 'Bancário(a)' },
    { name: 'Biólogo(a)' },
    { name: 'Biomédico (a)' },
    { name: 'Cabeleireiro(a)' },
    { name: 'Caminhoneiro (a)' },
    { name: 'carregador' },
    { name: 'Catador(a)' },
    { name: 'Catraqueiro' },
    { name: 'Chefe da Secretaria de Expediente' },
    { name: 'Chefe de Recursos Humanos' },
    { name: 'Chefe de Serviços de Transporte' },
    { name: 'Cirurgião(ã) Dentista' },
    { name: 'Citricultor(a)' },
    { name: 'Coletor(a) de Material Reciclável' },
    { name: 'Comerciante' },
    { name: 'Comerciário(a)' },
    { name: 'Comprador(a)' },
    { name: 'Comunicador(a) Social' },
    { name: 'Condutor(a) Autônomo(a)' },
    { name: 'Condutor(a) Escolar' },
    { name: 'Conferente' },
    { name: 'construtor' },
    { name: 'Consultor(a) Administrativo' },
    { name: 'Consultor(a) de Vendas' },
    { name: 'Contabilista' },
    { name: 'Contador(a)' },
    { name: 'Contramestre' },
    { name: 'Controller' },
    { name: 'Coordenador(a)' },
    { name: 'Coordenador(a) Administrativo Pessoal' },
    { name: 'Coordenador(a) de Atendimento' },
    { name: 'Coordenador(a) de Controladoria' },
    { name: 'Coordenador(a) de Controle de Qualidade' },
    { name: 'Coordenador(a) de Controle Interno' },
    { name: 'Coordenador(a) de Engenharia Industrial' },
    { name: 'Coordenador(a) de Exportação' },
    { name: 'Coordenador(a) de Impostos' },
    { name: 'Coordenador(a) de Instrumentos' },
    { name: 'Coordenador(a) de Manutenção' },
    { name: 'Coordenador(a) de Produção' },
    { name: 'Coordenador(a) de Projetos' },
    { name: 'Coordenador(a) de Recursos Humanos' },
    { name: 'Coordenador(a) de Suprimentos' },
    { name: 'Coordenador(a) de Transportes' },
    { name: 'Coordenador(a) de Vendas' },
    { name: 'Coordenador(a) Pedagógico(a)' },
    { name: 'Coreógrafo' },
    { name: 'Corretor(a) de Imóveis' },
    { name: 'Corretor(a) de Seguros' },
    { name: 'Costureiro(a)' },
    { name: 'Cozinheiro(a)' },
    { name: 'Cronoanalista' },
    { name: 'Cuidador(a) de idoso' },
    { name: 'Dançarina' },
    { name: 'Delegado' },
    { name: 'Dentista' },
    { name: 'Desenvolvedor de Arte' },
    { name: 'Desenvolvedor de Produtos Texteis' },
    { name: 'Despachante' },
    { name: 'Digitador(a)' },
    { name: 'Diretor' },
    { name: 'Diretor (a) Executivo (a)' },
    { name: 'Diretor de Escola' },
    { name: 'Diretor de Recursos Humanos' },
    { name: 'Diretor(a) de Assuntos Técnicos' },
    { name: 'Diretor(a) de Criação' },
    { name: 'Diretor(a) de Produções' },
    { name: 'Diretor(a) de Relações Públicas' },
    { name: 'Diretor(a) de Relações Públicas e Sociais' },
    { name: 'Do lar' },
    { name: 'Economista' },
    { name: 'Eletricista' },
    { name: 'Eletricitário' },
    { name: 'Embalador(a)' },
    { name: 'Embalador(a) de Produtos' },
    { name: 'Empregada Doméstica' },
    { name: 'Empresário(a)' },
    { name: 'Empresário(a) Rural' },
    { name: 'Encarregado Automotivo' },
    { name: 'Encarregado de Controladoria' },
    { name: 'Encarregado(a)' },
    { name: 'Encarregado(a) de Mídia' },
    { name: 'Enfermeiro(a)' },
    { name: 'Engenheiro(a)' },
    { name: 'Engenheiro(a) Administrador(a)' },
    { name: 'Engenheiro(a) Agrônomo(a)' },
    { name: 'Engenheiro(a) Civil' },
    { name: 'Engenheiro(a) de Alimentos' },
    { name: 'Engenheiro(a) de Desenvolvimento Ambiental' },
    { name: 'Engenheiro(a) de Segurança do Trabalho' },
    { name: 'Engenheiro(a) Eletricista' },
    { name: 'Engenheiro(a) Florestal' },
    { name: 'Engenheiro(a) Mecânico' },
    { name: 'Engenheiro(a) Naval' },
    { name: 'Engenheiro(a) Químico(a)' },
    { name: 'Escrevente Técnico Judiciário' },
    { name: 'Escrituraria' },
    { name: 'Escriturario(a)' },
    { name: 'Especialista em Banco de Dados' },
    { name: 'Estudante' },
    { name: 'Farmacêutica(o)' },
    { name: 'Faturista' },
    { name: 'faxineira (o)' },
    { name: 'Ferramenteiro' },
    { name: 'Ferroviário' },
    { name: 'Fisioterapeuta' },
    { name: 'Floricultor(a)' },
    { name: 'Fotógrafo(a)' },
    { name: 'Funcionário(a) Público(a)' },
    { name: 'funileiro' },
    { name: 'Geógrafo(a)' },
    { name: 'Geólogo(a)' },
    { name: 'Gerente' },
    { name: 'Gerente de Área' },
    { name: 'Gerente de Contabilidade' },
    { name: 'Gerente de Crédito e Cobrança' },
    { name: 'Gerente de Faturamento' },
    { name: 'Gerente de Recursos Humanos' },
    { name: 'Gerente de Serviços de Transporte' },
    { name: 'Gerente de Sistemas' },
    { name: 'Gerente de Tecnologa da Informação' },
    { name: 'Gerente de Tributário' },
    { name: 'Gerente de Vendas' },
    { name: 'Gerente de Vendas Distribuidores' },
    { name: 'Gerente Departamento de Compra' },
    { name: 'Gerente Financeiro' },
    { name: 'Gerente Operacional' },
    { name: 'Gerente Regional de Vendas' },
    { name: 'Gestor(a) de Logística' },
    { name: 'Gestor(a) de Negócios' },
    { name: 'Gestor(a) de Projetos' },
    { name: 'Gestor(a) Financeiro' },
    { name: 'Impressor' },
    { name: 'Industriário(a)' },
    { name: 'Inspetor de Qualidade' },
    { name: 'Instrumentista' },
    { name: 'Intérprete' },
    { name: 'Jardineiro' },
    { name: 'Jornalista' },
    { name: 'Lavrador(a)' },
    { name: 'Líder de Embalagem' },
    { name: 'Líder de Higienização' },
    { name: 'Líder de Recepção' },
    { name: 'Marceneiro' },
    { name: 'Matemático(a)' },
    { name: 'Mecânico' },
    { name: 'Mecânico de Manutenção' },
    { name: 'Medico(a)' },
    { name: 'Médico(a) Pediátrico(a)' },
    { name: 'Médico(a) Veterinário(a)' },
    { name: 'Metalúrgico' },
    { name: 'Militar' },
    { name: 'Ministro Religioso' },
    { name: 'Motorista' },
    { name: 'Nutricionista' },
    { name: 'Odontólogo (a)' },
    { name: 'Oficial de Cartório' },
    { name: 'Oficial de Justiça' },
    { name: 'Oficial de Promotoria' },
    { name: 'Oleiro(a)' },
    { name: 'Operador (a)' },
    { name: 'Operador (a) de Crédito Rural' },
    { name: 'Operador de Caldeira' },
    { name: 'Operador de Conicaleira' },
    { name: 'Operador de Máquina' },
    { name: 'Operador de Texturização' },
    { name: 'Operador(a) de Caldeira' },
    { name: 'Operador(a) de Forming' },
    { name: 'Operador(a) de Imagem' },
    { name: 'Operador(a) de Máquinas' },
    { name: 'Orientador(a) Educacional' },
    { name: 'Pecuarista' },
    { name: 'Pedagogo(a)' },
    { name: 'pedreiro' },
    { name: 'Pedreiro Refratarista' },
    { name: 'Planejador(a) de Manutenção' },
    { name: 'Policial' },
    { name: 'Policial Rodoviário' },
    { name: 'Porteiro(a)' },
    { name: 'Prensista' },
    { name: 'Produtor (a)' },
    { name: 'Produtor(a) Agropecuário' },
    { name: 'Produtor(a) Rural' },
    { name: 'Professor(a)' },
    { name: 'Profissional Liberal' },
    { name: 'Programador(a)' },
    { name: 'Psicólogo(a)' },
    { name: 'Publicitário(a)' },
    { name: 'Químico(a)' },
    { name: 'Reciclador(a)' },
    { name: 'Reciclador(a) Ambiental Autônomo(a)' },
    { name: 'Recobridor' },
    { name: 'Representante Comercial' },
    { name: 'Secretária Bilíngue' },
    { name: 'Secretária de Diretoria' },
    { name: 'Secretária Executiva' },
    { name: 'Secretária(o)' },
    { name: 'Securitário(a)' },
    { name: 'Segurança' },
    { name: 'Selecionador(a)' },
    { name: 'Serralherio' },
    { name: 'Servidor(a) Público(a)' },
    { name: 'Sociólogo' },
    { name: 'Supervisor(a)' },
    { name: 'Supervisor(a) Administrativo' },
    { name: 'Supervisor(a) de Adminstração de Pessoal' },
    { name: 'Supervisor(a) de Atendimento' },
    { name: 'Supervisor(a) de Compras' },
    { name: 'Supervisor(a) de Custos' },
    { name: 'Supervisor(a) de Elétrica e Instrumentação' },
    { name: 'Supervisor(a) de Manufatura' },
    { name: 'Supervisor(a) de Manutenção Industrial' },
    { name: 'Supervisor(a) de Matéria-Prima' },
    { name: 'Supervisor(a) de Operações' },
    { name: 'Supervisor(a) de Produção' },
    { name: 'Supervisor(a) de Recursos Humanos' },
    { name: 'Supervisor(a) de Suprimentos' },
    { name: 'Supervisor(a) de Tesouraria' },
    { name: 'Supervisor(a) Financeiro' },
    { name: 'Supervisor(a) Fiscal' },
    { name: 'Tabelião' },
    { name: 'Taxista' },
    { name: 'Tecelão' },
    { name: 'Técinico em Kaizen' },
    { name: 'Técnica Agropecuária' },
    { name: 'Técnico (a) Administrativo (a)' },
    { name: 'Técnico de Métodos Gráficos' },
    { name: 'Técnico de Operação de Usina Hidrelétrica' },
    { name: 'Técnico de Tinturaria' },
    { name: 'Técnico em Informática' },
    { name: 'Técnico em Processamento' },
    { name: 'Técnico(a) Agrícola' },
    { name: 'Técnico(a) de Enfermagem' },
    { name: 'Técnico(a) de Gesso' },
    { name: 'Técnico(a) de Manutenção Elétrico' },
    { name: 'Técnico(a) de Processos' },
    { name: 'Técnico(a) em Contabilidade' },
    { name: 'Técnico(a) em Edificações' },
    { name: 'Técnico(a) em Eletrônica' },
    { name: 'Técnico(a) em Informática' },
    { name: 'Técnico(a) em Meio Ambiente' },
    { name: 'Técnico(a) em Plástico' },
    { name: 'Técnico(a) em Radiologia Médica' },
    { name: 'Técnico(a) em Segurança do Trabalho' },
    { name: 'Técnico(a) Mecânico(a)' },
    { name: 'Técnico(a) Químico Industrial' },
    { name: 'Tecnólogo do Produto Sênior' },
    { name: 'Tecnólogo em Gestão Financeira' },
    { name: 'Tecnólogo em Telecomunicações' },
    { name: 'Tecnólogo(a)' },
    { name: 'Tecnólogo(a) de Processo de Produção' },
    { name: 'Tecnólogo(a) em Processamento de Dados' },
    { name: 'Tecnólogo(a) Mecânico' },
    { name: 'Telefonista' },
    { name: 'Tintureiro' },
    { name: 'Torneiro Mecânico' },
    { name: 'Tradutor(a)' },
    { name: 'Urdidor' },
    { name: 'Vendedor(a)' },
    { name: 'Vidreiro(a)' },
    { name: 'Vigilante' },
    { name: 'Web Designer' },
    { name: 'Zootécnico(a)' }
  ];

  // Obtém a referência do elemento select com o id profissao
  const selectElement = document.getElementById('profissao');

  // Função que renderiza as opções do select
  const renderOptions = () => {
    // Percorre o array de profissões
    PROFISSOES.forEach((profissao, index) => {
      // Cria um elemento option
      const optionElement = document.createElement('option');
      // Define o valor e o texto do option com o nome da profissão
      optionElement.value = profissao.name;
      optionElement.text = profissao.name;
      // Adiciona o option no select
      selectElement.appendChild(optionElement);
    });
  };
  
  // Chama a função para renderizar as opções
  renderOptions();