window.addEventListener('DOMContentLoaded', function () {

  // --- 1. LÓGICA DO MENU MOBILE ---
  // --- 1. LÓGICA DO MENU MOBILE (SIMPLIFICADA) ---
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  // Abrir/Fechar ao clicar no ícone
  if (menuIcon) {
    menuIcon.addEventListener('click', () => {
      // Apenas abre/fecha o menu. NÃO mexe no ícone.
      navbar.classList.toggle('active');
    });
  }

  // Fechar o menu ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

  // Fechar o menu ao clicar em qualquer link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      if (menuIcon) menuIcon.classList.remove('fa-times');
    });
  });


  // --- 2. LÓGICA DE SCROLL (MENU ATIVO + COR) ---
  const sections = document.querySelectorAll('section');
  const body = document.body;

  window.addEventListener('scroll', () => {
    let currentSectionId = '';

    // Descobre qual seção está visível no momento
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // O -150 serve para ativar a aba um pouco antes de chegar no topo exato
      if (window.scrollY >= (sectionTop - 150)) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // Aplica a classe 'active' no link correspondente
    navLinks.forEach(link => {
      link.classList.remove('active');

      // Verifica se o link contém o ID da seção atual (ex: href="#certificacoes")
      if (link.getAttribute('href').includes(currentSectionId)) {
        link.classList.add('active');
      }
    });

    // Muda a cor do tema (Dourado) se não estiver na Home
    if (currentSectionId && currentSectionId !== 'home') {
      body.classList.add('cor-dourada');
    } else {
      body.classList.remove('cor-dourada');
    }

    // Fecha o menu mobile se o usuário rolar a tela
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      if (menuIcon) menuIcon.classList.remove('fa-times');
    }
  });


  // --- 3. LÓGICA DOS MODAIS (POP-UPS) ---
  const openModalButtons = document.querySelectorAll(".open-modal");
  const closeModalButtons = document.querySelectorAll(".close-modal");
  const modalOverlays = document.querySelectorAll(".modal-overlay");

  // Função para fechar modal
  const closeModal = (modal) => {
    modal.classList.remove("show");
    // Aguarda a transição CSS (300ms) antes de esconder o elemento
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  };

  // Abrir modal
  openModalButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = button.getAttribute("data-modal-target");
      const modal = document.querySelector(modalId);

      if (modal) {
        modal.style.display = "flex";
        // Truque para forçar o navegador a processar o display flex antes da opacidade
        void modal.offsetWidth;
        modal.classList.add("show");
      }
    });
  });

  // Fechar pelo botão X
  closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal-overlay");
      closeModal(modal);
    });
  });

  // Fechar clicando fora (no fundo escuro)
  modalOverlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

});

//MENU DE LINGUAGENS
// --- SISTEMA DE TRADUÇÃO COMPLETO ---

// 1. O Dicionário (Adicione suas traduções aqui)
// 1. O Dicionário (Adicione suas traduções aqui)
const translations = {
  'pt': {
    // --- MENU ---
    'menu_inicial': 'Inicial',
    'menu_sobre': 'Sobre mim',
    'menu_trajetoria': 'Trajetória',
    'menu_cursos': 'Cursos',
    'menu_xp': 'Experiência',
    'menu_contato': 'Contato',

    // --- HOME ---
    'ola_sou': 'Olá! Sou o',
    'sou': 'Sou',
    'home_desc': 'Seja muito bem-vindo (a) ao meu portfólio. Aqui quero que veja um pouquinho mais sobre quem eu sou, sobre minha vida acadêmica e profissional.',
    'btn_saiba_mais': 'Saiba mais',

    // --- SIDEBAR ESQUERDA ---
    'titulo_contatos': 'Contatos',
    'btn_baixar_cv': 'Baixar CV',

    // --- SIDEBAR DIREITA (QUEM SOU) ---
    'quem_sou_eu': 'Quem eu sou?',
    'conheca_mais': 'Conheça mais:',

    // --- CARDS (RESUMO) ---
    'card_qa_titulo': 'Analista de Testes',
    'card_qa_desc': 'Realizo testes e automações, visando garantir a qualidade do produto e atender os requisitos.',
    'link_saiba_mais': 'Saiba mais',

    'card_dev_titulo': 'Desenvolvedor',
    'card_dev_desc': 'Desenvolvo sites e aplicativos, construindo projetos tecnológicos que agregam valor.',

    'card_student_titulo': 'Estudante de ADS',
    'card_student_desc': 'Estudo na FATEC, no último ano. Sou formado em Técnico em Desenvolvimento de Sistemas pela ETEC.',

    'card_hd_titulo': 'Analista de HelpDesk',
    'card_hd_desc': 'Trabalho atualmente respondendo chamados, garantindo a qualidade da experiência do cliente.',

    // --- CARDS (TECNOLOGIAS) ---
    'tech_qa': 'Java · Selenium · WebDriver · JUnit',
    'tech_dev': 'Java · SpringBoot · JavaScript · MySql',
    'tech_student': 'Gestão de Equipes e Projetos · Desenvolvimento',
    'tech_hd': 'Gestão de Chamados N1 · Atendimento ao Cliente',

    // --- MODAL QA (NOVAS TRADUÇÕES) ---
    'modal_qa_titulo': 'Portfólio: Automação & QA',
    'modal_qa_desc': 'Realizo criações de testes funcionais automatizados para aplicações Web. Utilizo Java para criar scripts robustos, focando em resolver problemas reais do dia-a-dia como sincronismo, localização de elementos e massa de dados, garantindo um código limpo e legível quanto o da própria aplicação.',
    'qa_sec_ferramentas': 'Ferramentas Principais',
    'qa_tech_java': 'Linguagem Base',
    'qa_tech_selenium': 'WebDriver & Grid',
    'qa_tech_junit': 'Estrutura de Testes',
    'qa_sec_competencias': 'Competências Desenvolvidas',
    'qa_comp_fw_title': 'Framework & Page Objects',
    'qa_comp_fw_desc': 'Criação de projetos do zero utilizando o padrão Page Object para organização. Desenvolvimento de uma DSL (Domain Specific Language) própria para tornar os testes mais enxutos, legíveis e fáceis de manter.',
    'qa_comp_sync_title': 'Sincronismo & Elementos',
    'qa_comp_sync_desc': 'Estratégias avançadas para localização de elementos (XPaths robustos) e interação com componentes complexos como Alerts, Frames e PopUps.',
    'qa_comp_grid_title': 'Execução Grid & Cloud',
    'qa_comp_grid_desc': 'Experiência na execução de testes em paralelo, sequencial ou remotamente utilizando Selenium GRID e serviços de nuvem (Saucelabs), cobrindo múltiplos browsers (Firefox, Chrome, IE).',
    'qa_comp_api_title': 'Testes de API & Exceptions',
    'qa_comp_api_desc': 'Realização de testes de consumo de APIs, implementando tratamento rigoroso de erros com Exceptions personalizadas para garantir que a falha seja identificada e tratada corretamente, aumentando a resiliência da automação.',
    'qa_sec_tipos': 'Tipos de Testes Realizados',
    'qa_type_regress_title': 'Testes de Regressão',
    'qa_type_regress_desc': 'Execução de baterias de testes automatizados para garantir que novas alterações no código (deploys) não quebraram funcionalidades que já estavam funcionando no sistema legado.',
    'qa_type_black_title': 'Testes de Caixa Preta',
    'qa_type_black_desc': 'Validação funcional focada nas entradas e saídas (Inputs/Outputs), testando a aplicação sob a perspectiva do usuário final, sem considerar a estrutura interna do código.',
    'qa_type_unit_title': 'Testes Unitários',
    'qa_type_unit_desc': 'Utilização do framework JUnit para testar as menores unidades de código (métodos e classes) de forma isolada, garantindo a lógica de programação antes da integração.',
    'qa_type_func_title': 'Testes Funcionais',
    'qa_type_func_desc': 'Verificação dos requisitos de negócio e histórias de usuário, simulando a interação real (cliques, preenchimentos e navegação) para assegurar que o software faz o que deve fazer.',

    // --- MODAL DEV (NOVAS TRADUÇÕES) ---
    'modal_dev_titulo': 'Portfólio: Desenvolvedor Java Backend',
    'modal_dev_desc': 'Desenvolvimento Back-end com foco na linguagem Java. Domínio completo dos fundamentos da linguagem e do paradigma de Orientação a Objetos. Capacidade de criar aplicações que consomem APIs externas, manipulam estruturas de dados complexas e realizam tratamento robusto de exceções e arquivos.',
    'dev_sec_stack': 'Stack Tecnológica',
    'dev_tech_java': 'Linguagem Base',
    'dev_tech_poo': 'Paradigma',
    'dev_tech_integration': 'Integração',
    'dev_tech_api': 'APIs & JSON',
    'dev_sec_competencias': 'Competências Desenvolvidas',
    'dev_comp_fund_title': 'Fundamentos & Lógica',
    'dev_comp_fund_desc': 'Domínio da sintaxe Java, incluindo controle de fluxo (if/else), laços de repetição (loops) e manipulação de variáveis, criando a base lógica para qualquer sistema back-end.',
    'dev_comp_oo_title': 'Orientação a Objetos (OO)',
    'dev_comp_oo_desc': 'Modelagem de sistemas reais utilizando Classes, Herança, Polimorfismo e Interfaces. Criação de códigos organizados, reutilizáveis e fáceis de manter.',
    'dev_comp_list_title': 'Collections & Listas',
    'dev_comp_list_desc': 'Manipulação avançada de listas e coleções de dados (ArrayList, etc), permitindo gerenciar grandes volumes de informações e objetos dentro da aplicação.',
    'dev_comp_api_title': 'APIs, Arquivos & Exceções',
    'dev_comp_api_desc': 'Consumo de APIs externas, conversão de dados (Desserialização) de JSON para Objetos Java, gravação de arquivos e tratamento defensivo de erros (Try/Catch/Exceptions).',
    'dev_sec_projetos': 'Projetos & Atuação',
    'dev_proj_integ_title': 'Integração de Sistemas',
    'dev_proj_integ_desc': 'Desenvolvimento de aplicação capaz de conectar-se a serviços web, buscar informações remotas (via HTTP), tratar o retorno JSON e apresentar os dados formatados.',
    'dev_proj_file_title': 'Manipulação de Arquivos',
    'dev_proj_file_desc': 'Implementação de funcionalidades para gerar e ler arquivos locais, permitindo a persistência de dados extraídos das APIs ou gerados pelo sistema.',
    'dev_proj_model_title': 'Modelagem de Domínio',
    'dev_proj_model_desc': 'Criação de classes que representam entidades do mundo real, aplicando regras de encapsulamento e relacionamento entre objetos para garantir a integridade do sistema.',
    'dev_proj_resil_title': 'Código Resiliente',
    'dev_proj_resil_desc': 'Aplicação preparada para lidar com falhas. Uso de tratamento de exceções para garantir que o sistema não pare de funcionar caso ocorra um erro inesperado (ex: API fora do ar).',

    // --- MODAL STUDENT (NOVAS TRADUÇÕES) ---
    'modal_student_titulo': 'Portfólio: Estudante de ADS',
    'modal_student_desc': 'Graduando em Análise e Desenvolvimento de Sistemas pela FATEC Rubens Lara. Formação focada em analisar, projetar, documentar, testar e implantar sistemas computacionais. O curso une raciocínio lógico, metodologias de projetos e linguagens de programação para criar soluções robustas e seguras.',
    'stu_stat_fatec': 'FATEC Rubens Lara',
    'stu_stat_hours': '2.800 Horas',
    'stu_stat_cycle': '6º Ciclo (Final)',
    'stu_sec_pilares': 'Pilares da Formação',
    'stu_pilar_dev': 'Desenvolvimento',
    'stu_pilar_dev_sub': 'Lógica & POO',
    'stu_pilar_eng': 'Engenharia',
    'stu_pilar_eng_sub': 'Software & Testes',
    'stu_pilar_mgmt': 'Gestão',
    'stu_pilar_mgmt_sub': 'Projetos & TI',
    'stu_sec_grade': 'Competências da Grade Curricular',
    'stu_grade_eng_title': 'Engenharia de Software (I, II, III)',
    'stu_grade_eng_desc': 'Ciclo completo de desenvolvimento: levantamento de requisitos, modelagem de sistemas (UML), documentação técnica, padrões de projeto e metodologias ágeis (Scrum/Kanban).',
    'stu_grade_prog_title': 'Programação & Estrutura de Dados',
    'stu_grade_prog_desc': 'Domínio de Algoritmos, Estrutura de Dados (Listas, Pilhas, Árvores) e Paradigma Orientado a Objetos. Conhecimento específico em Programação para Mainframe e Web.',
    'stu_grade_db_title': 'Banco de Dados & Big Data',
    'stu_grade_db_desc': 'Modelagem conceitual e lógica, linguagem SQL avançada e administração de bancos de dados. Integração com conceitos de Inteligência Artificial e Ciência de Dados.',
    'stu_grade_infra_title': 'Infraestrutura & Segurança',
    'stu_grade_infra_desc': 'Conhecimentos sólidos em Sistemas Operacionais, Redes de Computadores e Segurança da Informação, garantindo a integridade e disponibilidade dos sistemas.',
    'stu_grade_mgmt_title': 'Gestão de TI & Equipes',
    'stu_grade_mgmt_desc': 'Formação em Gestão de Projetos, Gestão de Equipes, Governança de TI e Empreendedorismo. Preparo para liderar times técnicos e alinhar tecnologia aos objetivos de negócio.',
    'stu_grade_eng_title_lang': 'Inglês Técnico (I ao VI)',
    'stu_grade_eng_desc_lang': 'Seis ciclos de formação em língua inglesa focada em tecnologia, permitindo a leitura fluente de documentações técnicas, manuais e comunicação em ambiente globalizado.',

    // --- MODAL HELPDESK (NOVAS TRADUÇÕES) ---
    'modal_hd_titulo': 'Portfólio: Analista de Suporte Técnico',
    'modal_hd_desc': 'Atuação analítica no suporte técnico, indo além do atendimento. Responsável pela análise de erros sistêmicos, validação de regras de negócio conforme documentação e execução de testes em novas funcionalidades, fornecendo feedback qualificado diretamente ao time de desenvolvimento.',
    'hd_sec_tools': 'Ferramentas & Processos',
    'hd_tool_analise': 'Análise',
    'hd_tool_analise_sub': 'Erros Sistêmicos',
    'hd_tool_chamados': 'Chamados',
    'hd_tool_chamados_sub': 'Escalonamento',
    'hd_tool_testes': 'Testes',
    'hd_tool_testes_sub': 'Novas Features',
    'hd_sec_comp': 'Competências Desenvolvidas',
    'hd_comp_analise_title': 'Análise de Erros & Regras',
    'hd_comp_analise_desc': 'Investigação aprofundada de incidentes, validando se o comportamento do sistema está de acordo com a documentação técnica e as regras de negócio estabelecidas.',
    'hd_comp_testes_title': 'Testes de Novas Funcionalidades',
    'hd_comp_testes_desc': 'Atuação ativa na validação de entregas (releases), testando novas features em ambiente de homologação/produção e fornecendo feedback técnico detalhado para a equipe de desenvolvimento.',
    'hd_comp_triagem_title': 'Triagem & Escalonamento',
    'hd_comp_triagem_desc': 'Filtro técnico dos chamados: realizo a análise prévia e testes de reprodução. O chamado só é escalonado para o time de correção (Dev) com evidências claras, poupando tempo da engenharia.',
    'hd_comp_melhoria_title': 'Sugestão de Melhorias',
    'hd_comp_melhoria_desc': 'Identificação de gargalos e dores recorrentes dos usuários, transformando essas informações em sugestões de melhorias sistêmicas (Features Requests) para a equipe de produto.',

    // --- TRAJETÓRIA (EDUCAÇÃO) ---
    'titulo_educacao': 'Educação',
    'edu_fatec_curso': 'Tecnólogo em Análise e Des. de Sistemas',
    'edu_fatec_desc': 'Ensino superior focado em Engenharia de Software, Gestão de Projetos e Programação (Java/Spring). Foram realizados diversos projetos utilizando metodologias do mercado atuais, utilizando soluções existentes para resolver problemas.',
    'tag_presencial': 'On-Campus',
    'tag_gestao_projetos': 'Gestão de projetos',
    'tag_estrutura_dados': 'Estrutura de Dados',
    'tag_logica_programacao': 'Lógica de Programação',

    'edu_etec_curso': 'Técnico em Desenvolvimento de Sistemas',
    'edu_etec_desc': 'Base técnica em lógica de programação e banco de dados. No curso, foram desenvolvidos diversos projetos utilizando linguagens de programação, resolvendo problemas comuns no mercado em exercícios.',

    // --- TRAJETÓRIA (EXPERIÊNCIA) ---
    'titulo_xp_profissional': 'Experiência Profissional',
    'data_ago_atual': 'Ago/2025 - Atualmente',
    'xp_soc_analista': 'Analista de HelpDesk',
    'xp_soc_analista_desc': 'Responsável pela análise aprofundada de erros sistêmicos e validação de regras de negócio conforme documentação. Atuo também na execução de testes de novas funcionalidades em dias de atualizações, fornecendo feedback direto ao time de desenvolvimento e garantindo a qualidade das entregas. Realizo também, treinamentos para os usuários finais do software e consultorias quando necessário.',
    'tag_map_erros': 'Mapeamento de Erros',
    'tag_treinamento': 'Treinamento para Clientes',
    'tag_testes': 'Testes de Software',

    'data_jul_24_25': 'Jul/2024 - Jul/2025',
    'xp_soc_assistente': 'Assistente de HelpDesk',
    'xp_soc_assistente_desc': 'Atuação focada no atendimento ao cliente e suporte na resolução de chamados. Realizei escalonamento de tickets para o time de Desenvolvimento em casos de BUGs, e atualizações da documentação quando necessário.',
    'tag_suporte_n1': 'Suporte N1',
    'tag_resolucao': 'Resolução de Chamados',
    'tag_atendimento': 'Atendimento',

    'data_out_jun': 'Out/2023 - Jun/2024',
    'xp_soc_estagio': 'Estagiário - Relacionamento e Negócios',
    'xp_soc_estagio_desc': 'Início da jornada na empresa, com foco no aprendizado das regras de negócio e relacionamento com clientes. Desenvolvimento de soft skills essenciais e entendimento do ecossistema do software SOC SST.',
    'tag_relacionamento': 'Relacionamento',
    'tag_negocios': 'Negócios',
    'tag_comunicacao': 'Comunicação e Flexibilidade',

    'xp_fortec': 'Auxiliar Técnico TI',
    'xp_fortec_desc': 'Suporte técnico abrangente a softwares e hardwares, incluindo manutenção de redes e equipamentos. Atuei também na automatização de processos manuais, otimizando a rotina interna da instituição.',
    'tag_infra': 'Infraestrutura',
    'tag_redes': 'Redes',
    'tag_automacao': 'Automação',

    'xp_btp': 'Aprendiz de Suporte de TI',
    'xp_btp_desc': 'Primeira experiência profissional em TI. Responsável pela preparação e instalação de equipamentos (computadores, coletores, rádios), gestão de usuários e suporte direto aos colaboradores.',
    'tag_gestao_acessos': 'Gestão de Acessos',
    'tag_suporte': 'Suporte Técnico',

    // --- CERTIFICAÇÕES ---
    'titulo_certificacoes_completo': 'Mural de Certificações e Cursos',
    'status_concluido': 'Concluído',
    'arraste_lado': 'Arraste para o lado',

    // --- PLACEHOLDERS FINAIS ---
    'titulo_exp_placeholder': 'Experiência',
    'desc_exp_placeholder': 'Conteúdo da seção de experiências profissionais.',
    'titulo_contato_placeholder': 'Contato',
    'desc_contato_placeholder': 'Conteúdo da seção de contato.'
  },

  'en': {
    // --- MENU ---
    'menu_inicial': 'Home',
    'menu_sobre': 'About me',
    'menu_trajetoria': 'Journey',
    'menu_cursos': 'Courses',
    'menu_xp': 'Experience',
    'menu_contato': 'Contact',

    // --- HOME ---
    'ola_sou': 'Hello! I am',
    'sou': 'I am',
    'home_desc': 'Welcome to my portfolio. Here you can see a little bit more about who I am, covering both my academic and professional life.',
    'btn_saiba_mais': 'Learn more',

    // --- SIDEBAR ESQUERDA ---
    'titulo_contatos': 'Contact Info',
    'btn_baixar_cv': 'Download CV',

    // --- SIDEBAR DIREITA (QUEM SOU) ---
    'quem_sou_eu': 'Who am I?',
    'conheca_mais': 'Know more:',

    // --- CARDS (RESUMO) ---
    'card_qa_titulo': 'QA Analyst',
    'card_qa_desc': 'I perform tests and automation, aiming to guarantee product quality and meet requirements.',
    'link_saiba_mais': 'Learn more',
    'tech_qa': 'Java · Selenium · WebDriver · JUnit',

    'card_dev_titulo': 'Developer',
    'card_dev_desc': 'I develop websites and applications, building technological projects that add value.',
    'tech_dev': 'Java · SpringBoot · JavaScript · MySql',

    'card_student_titulo': 'Systems Analysis Student',
    'card_student_desc': 'I study at FATEC, in my final year. I hold a Technician degree in Systems Development from ETEC.',
    'tech_student': 'Team & Project Management · Development',

    'card_hd_titulo': 'HelpDesk Analyst',
    'card_hd_desc': 'I currently work answering tickets, ensuring the quality of the customer experience.',
    'tech_hd': 'L1 Ticket Management · Customer Service',

    // --- MODAL QA (ENGLISH) ---
    'modal_qa_titulo': 'Portfolio: Automation & QA',
    'modal_qa_desc': 'I create automated functional tests for Web applications. I use Java to create robust scripts, focusing on solving real-day-to-day problems such as synchronization, element location, and data mass management, ensuring code as clean and readable as the application itself.',
    'qa_sec_ferramentas': 'Main Tools',
    'qa_tech_java': 'Core Language',
    'qa_tech_selenium': 'WebDriver & Grid',
    'qa_tech_junit': 'Testing Framework',
    'qa_sec_competencias': 'Developed Competencies',
    'qa_comp_fw_title': 'Framework & Page Objects',
    'qa_comp_fw_desc': 'Creation of projects from scratch using the Page Object pattern for organization. Development of a custom DSL (Domain Specific Language) to make tests leaner, more readable, and easier to maintain.',
    'qa_comp_sync_title': 'Synchronism & Elements',
    'qa_comp_sync_desc': 'Advanced strategies for element location (robust XPaths) and interaction with complex components like Alerts, Frames, and PopUps.',
    'qa_comp_grid_title': 'Grid Execution & Cloud',
    'qa_comp_grid_desc': 'Experience in parallel, sequential, or remote test execution using Selenium GRID and cloud services (Saucelabs), covering multiple browsers (Firefox, Chrome, IE).',
    'qa_comp_api_title': 'API Tests & Exceptions',
    'qa_comp_api_desc': 'Execution of API consumption tests, implementing rigorous error handling with custom Exceptions to ensure failure is identified and handled correctly, increasing automation resilience.',
    'qa_sec_tipos': 'Types of Tests Performed',
    'qa_type_regress_title': 'Regression Testing',
    'qa_type_regress_desc': 'Execution of automated test suites to ensure that new code changes (deploys) have not broken functionalities that were already working in the legacy system.',
    'qa_type_black_title': 'Black Box Testing',
    'qa_type_black_desc': 'Functional validation focused on Inputs/Outputs, testing the application from the end-user perspective, without considering internal code structure.',
    'qa_type_unit_title': 'Unit Testing',
    'qa_type_unit_desc': 'Using the JUnit framework to test the smallest code units (methods and classes) in isolation, guaranteeing programming logic before integration.',
    'qa_type_func_title': 'Functional Testing',
    'qa_type_func_desc': 'Verification of business requirements and user stories, simulating real interaction (clicks, inputs, and navigation) to ensure the software does what it is supposed to do.',

    // --- MODAL DEV (ENGLISH) ---
    'modal_dev_titulo': 'Portfolio: Java Backend Developer',
    'modal_dev_desc': 'Backend development focused on Java language. Complete mastery of language fundamentals and the Object-Oriented paradigm. Ability to create applications that consume external APIs, manipulate complex data structures, and perform robust exception and file handling.',
    'dev_sec_stack': 'Tech Stack',
    'dev_tech_java': 'Core Language',
    'dev_tech_poo': 'Paradigma',
    'dev_tech_integration': 'Integration',
    'dev_tech_api': 'APIs & JSON',
    'dev_sec_competencias': 'Developed Competencies',
    'dev_comp_fund_title': 'Fundamentals & Logic',
    'dev_comp_fund_desc': 'Mastery of Java syntax, including flow control (if/else), loops, and variable manipulation, creating the logical foundation for any backend system.',
    'dev_comp_oo_title': 'Object-Oriented (OO)',
    'dev_comp_oo_desc': 'Modeling real systems using Classes, Inheritance, Polymorphism, and Interfaces. Creating organized, reusable, and maintainable code.',
    'dev_comp_list_title': 'Collections & Lists',
    'dev_comp_list_desc': 'Advanced manipulation of lists and data collections (ArrayList, etc.), allowing management of large volumes of information and objects within the application.',
    'dev_comp_api_title': 'APIs, Files & Exceptions',
    'dev_comp_api_desc': 'Consumption of external APIs, data conversion (Deserialization) from JSON to Java Objects, file writing, and defensive error handling (Try/Catch/Exceptions).',
    'dev_sec_projetos': 'Projects & Activities',
    'dev_proj_integ_title': 'System Integration',
    'dev_proj_integ_desc': 'Development of applications capable of connecting to web services, fetching remote information (via HTTP), handling JSON return, and presenting formatted data.',
    'dev_proj_file_title': 'File Manipulation',
    'dev_proj_file_desc': 'Implementation of functionalities to generate and read local files, allowing persistence of data extracted from APIs or generated by the system.',
    'dev_proj_model_title': 'Domain Modeling',
    'dev_proj_model_desc': 'Creation of classes representing real-world entities, applying encapsulation and object relationship rules to ensure system integrity.',
    'dev_proj_resil_title': 'Resilient Code',
    'dev_proj_resil_desc': 'Application prepared to handle failures. Use of exception handling to ensure the system does not stop working in case of an unexpected error (e.g., API downtime).',

    // --- MODAL STUDENT (ENGLISH) ---
    'modal_student_titulo': 'Portfolio: Systems Analysis Student',
    'modal_student_desc': 'Undergraduate in Systems Analysis and Development at FATEC Rubens Lara. Training focused on analyzing, designing, documenting, testing, and implementing computational systems. The course unites logical reasoning, project methodologies, and programming languages to create robust and secure solutions.',
    'stu_stat_fatec': 'FATEC Rubens Lara',
    'stu_stat_hours': '2,800 Hours',
    'stu_stat_cycle': '6th Cycle (Final)',
    'stu_sec_pilares': 'Education Pillars',
    'stu_pilar_dev': 'Development',
    'stu_pilar_dev_sub': 'Logic & OOP',
    'stu_pilar_eng': 'Engineering',
    'stu_pilar_eng_sub': 'Software & Tests',
    'stu_pilar_mgmt': 'Management',
    'stu_pilar_mgmt_sub': 'Projects & IT',
    'stu_sec_grade': 'Curriculum Competencies',
    'stu_grade_eng_title': 'Software Engineering (I, II, III)',
    'stu_grade_eng_desc': 'Complete development cycle: requirements gathering, system modeling (UML), technical documentation, design patterns, and agile methodologies (Scrum/Kanban).',
    'stu_grade_prog_title': 'Programming & Data Structures',
    'stu_grade_prog_desc': 'Mastery of Algorithms, Data Structures (Lists, Stacks, Trees), and Object-Oriented Paradigm. Specific knowledge in Mainframe Programming and Web.',
    'stu_grade_db_title': 'Database & Big Data',
    'stu_grade_db_desc': 'Conceptual and logical modeling, advanced SQL language, and database administration. Integration with Artificial Intelligence and Data Science concepts.',
    'stu_grade_infra_title': 'Infrastructure & Security',
    'stu_grade_infra_desc': 'Solid knowledge in Operating Systems, Computer Networks, and Information Security, ensuring system integrity and availability.',
    'stu_grade_mgmt_title': 'IT & Team Management',
    'stu_grade_mgmt_desc': 'Training in Project Management, Team Management, IT Governance, and Entrepreneurship. Preparation to lead technical teams and align technology with business goals.',
    'stu_grade_eng_title_lang': 'Technical English (I to VI)',
    'stu_grade_eng_desc_lang': 'Six cycles of English training focused on technology, allowing fluent reading of technical documentation, manuals, and communication in a globalized environment.',

    // --- MODAL HELPDESK (ENGLISH) ---
    'modal_hd_titulo': 'Portfolio: Technical Support Analyst',
    'modal_hd_desc': 'Analytical performance in technical support, going beyond service. Responsible for systemic error analysis, validation of business rules according to documentation, and execution of tests on new features, providing qualified feedback directly to the development team.',
    'hd_sec_tools': 'Tools & Processes',
    'hd_tool_analise': 'Analysis',
    'hd_tool_analise_sub': 'Systemic Errors',
    'hd_tool_chamados': 'Tickets',
    'hd_tool_chamados_sub': 'Escalation',
    'hd_tool_testes': 'Testing',
    'hd_tool_testes_sub': 'New Features',
    'hd_sec_comp': 'Developed Competencies',
    'hd_comp_analise_title': 'Error Analysis & Rules',
    'hd_comp_analise_desc': 'In-depth investigation of incidents, validating if system behavior aligns with technical documentation and established business rules.',
    'hd_comp_testes_title': 'New Feature Testing',
    'hd_comp_testes_desc': 'Active role in release validation, testing new features in staging/production environments and providing detailed technical feedback to the development team.',
    'hd_comp_triagem_title': 'Triage & Escalation',
    'hd_comp_triagem_desc': 'Technical filtering of tickets: I perform preliminary analysis and reproduction tests. The ticket is only escalated to the correction team (Dev) with clear evidence, saving engineering time.',
    'hd_comp_melhoria_title': 'Improvement Suggestions',
    'hd_comp_melhoria_desc': 'Identification of bottlenecks and recurring user pain points, transforming this information into systemic improvement suggestions (Feature Requests) for the product team.',

    // --- TRAJETÓRIA (ENGLISH) ---
    'titulo_educacao': 'Education',
    'edu_fatec_curso': 'Technologist Degree in Systems Analysis',
    'edu_fatec_desc': 'Higher education focused on Software Engineering, Project Management, and Programming (Java/Spring). Several projects were carried out using current market methodologies and existing solutions to solve problems.',
    'tag_presencial': 'On-Campus',
    'tag_gestao_projetos': 'Project Management',
    'tag_estrutura_dados': 'Data Structure',
    'tag_logica_programacao': 'Programming Logic',

    'edu_etec_curso': 'Technician in Systems Development',
    'edu_etec_desc': 'Technical foundation in programming logic and databases. In the course, several projects were developed using programming languages, solving common market problems in exercises.',

    // --- TRAJETÓRIA (EXPERIENCE) ---
    'titulo_xp_profissional': 'Professional Experience',
    'data_ago_atual': 'Aug/2025 - Present',
    'xp_soc_analista': 'HelpDesk Analyst',
    'xp_soc_analista_desc': 'Responsible for in-depth analysis of systemic errors and validation of business rules according to documentation. I also act in the execution of tests for new features on update days, providing direct feedback to the development team and ensuring delivery quality. I also conduct training for end-users of the software and consulting when necessary.',
    'tag_map_erros': 'Error Mapping',
    'tag_treinamento': 'Client Training',
    'tag_testes': 'Software Testing',

    'data_jul_24_25': 'Jul/2024 - Jul/2025',
    'xp_soc_assistente': 'HelpDesk Assistant',
    'xp_soc_assistente_desc': 'Role focused on customer service and support in ticket resolution. I performed ticket escalation to the Development team in cases of BUGs, and documentation updates when necessary.',
    'tag_suporte_n1': 'L1 Support',
    'tag_resolucao': 'Ticket Resolution',
    'tag_atendimento': 'Customer Service',

    'data_out_jun': 'Oct/2023 - Jun/2024',
    'xp_soc_estagio': 'Intern - Relationship and Business',
    'xp_soc_estagio_desc': 'Beginning of the journey at the company, focusing on learning business rules and customer relationships. Development of essential soft skills and understanding of the SOC SST software ecosystem.',
    'tag_relacionamento': 'Relationship',
    'tag_negocios': 'Business',
    'tag_comunicacao': 'Communication & Flexibility',

    'xp_fortec': 'IT Technical Assistant',
    'xp_fortec_desc': 'Comprehensive technical support for software and hardware, including network and equipment maintenance. I also worked on automating manual processes, optimizing the institution\'s internal routine.',
    'tag_infra': 'Infrastructure',
    'tag_redes': 'Networks',
    'tag_automacao': 'Automation',

    'xp_btp': 'IT Support Apprentice',
    'xp_btp_desc': 'First professional experience in IT. Responsible for the preparation and installation of equipment (computers, data collectors, radios), user management, and direct support to employees.',
    'tag_gestao_acessos': 'Access Management',
    'tag_suporte': 'Technical Support',

    // --- CERTIFICAÇÕES ---
    'titulo_certificacoes_completo': 'Certifications and Courses Wall',
    'status_concluido': 'Completed',
    'arraste_lado': 'Swipe to the side',

    // --- PLACEHOLDERS FINAIS ---
    'titulo_exp_placeholder': 'Experience',
    'desc_exp_placeholder': 'Content of the professional experience section.',
    'titulo_contato_placeholder': 'Contact',
    'desc_contato_placeholder': 'Content of the contact section.'
  }
};

// 2. Função que troca o texto na tela
function changeLanguage(lang) {
  // Procura todos os elementos que tenham o atributo data-lang
  const elements = document.querySelectorAll('[data-lang]');

  elements.forEach(element => {
    const key = element.getAttribute('data-lang');
    // Se a tradução existir no dicionário, troca o texto
    if (translations[lang] && translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });

  // Salva a preferência
  localStorage.setItem('selected-language', lang);
}

// 3. Lógica do Menu Dropdown (Visual)
const langSelector = document.querySelector('.language-selector');
const selectedLangDisplay = document.querySelector('.selected-lang');
const langOptions = document.querySelectorAll('.lang-options li');

if (langSelector) {
  // Abrir/Fechar menu
  selectedLangDisplay.addEventListener('click', (e) => {
    e.stopPropagation();
    langSelector.classList.toggle('active');
  });

  // Clicar em uma opção (PT ou EN)
  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang'); // 'pt' ou 'en'

      // A) Chama a função de tradução
      changeLanguage(lang);

      // B) Atualiza a Bandeira e Texto do Topo
      const flagClass = option.querySelector('.lang-flag').classList[1]; // ex: 'br'
      const textCode = option.querySelector('span').innerText;

      // Seleciona os elementos do topo
      const topFlag = selectedLangDisplay.querySelector('.lang-flag');
      const topText = selectedLangDisplay.querySelector('.lang-text');

      // Troca a classe da bandeira (remove a antiga e põe a nova)
      topFlag.className = `lang-flag ${flagClass}`;

      // Troca o texto (PT ou EN)
      topText.innerText = lang.toUpperCase();

      // Fecha o menu
      langSelector.classList.remove('active');
    });
  });

  

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!langSelector.contains(e.target)) {
      langSelector.classList.remove('active');
    }
  });
}

// --- 4. LÓGICA DO CARROSSEL (PROJETO DESTAQUE) ---
let slideIndex = 0;
const slides = document.querySelectorAll('.bento-carousel .slide');
const dots = document.querySelectorAll('.bento-carousel .dot');

function showSlides(n) {
    if (!slides.length) return; // Evita erro se a seção for removida no futuro
    
    slideIndex = n;
    
    // Cria o Loop Infinito (Se passar da última foto, volta pra primeira)
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    
    // Esconde todas as imagens e desmarca as bolinhas
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Mostra a imagem atual e acende a bolinha correspondente
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

// Função para os botões Previous / Next
function moveSlide(n) {
    showSlides(slideIndex + n);
}

// Função para clicar diretamente na bolinha
function currentSlide(n) {
    showSlides(n);
}

// Autoplay: Troca a foto automaticamente a cada 4 segundos
setInterval(() => {
    if(slides.length > 0) {
        moveSlide(1);
    }
}, 4000);