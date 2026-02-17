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
    'sou': 'Sou', // Texto fixo antes do efeito de digitação
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


    // --- MODAIS (DESCRIÇÕES COMPLETAS) ---
    'modal_qa_desc': 'As a Test Analyst, I focus on ensuring software quality through manual testing and automation. I use tools like Selenium and JUnit to create robust and reliable tests.',
    'modal_dev_desc': 'Details about development projects, Java and SpringBoot, and code examples or links to repositories.',
    'modal_student_desc': 'Academic journey at FATEC Rubens Lara...',
    'modal_hd_desc': 'Experience with customer support, troubleshooting, and ensuring user experience quality.',

    // --- MODAIS (DETALHES) ---
    'modal_qa_titulo': 'Portfólio: Analista de Testes',
    'modal_qa_desc': 'Como Analista de Testes, foco em garantir a qualidade do software através de testes manuais e automação. Utilizo ferramentas como Selenium e JUnit para criar testes robustos e confiáveis.',

    'modal_dev_titulo': 'Portfólio: Desenvolvedor',
    'modal_dev_desc': 'Detalhes sobre projetos de desenvolvimento, Java e SpringBoot, e exemplos de código ou links para repositórios.',

    'modal_student_titulo': 'Portfólio: Estudante de ADS',
    'modal_student_desc': 'Jornada acadêmica na FATEC Rubens Lara...',

    'modal_hd_titulo': 'Portfólio: Analista de HelpDesk',
    'modal_hd_desc': 'Experiência com suporte ao cliente, resolução de problemas e garantia da qualidade da experiência do usuário.',

    // --- TRAJETÓRIA (EDUCAÇÃO) ---
    'titulo_educacao': 'Educação',

    'edu_fatec_curso': 'Tecnólogo em Análise e Des. de Sistemas',
    'edu_fatec_desc': 'Ensino superior focado em Engenharia de Software, Gestão de Projetos e Programação (Java/Spring). Foram realizados diversos projetos utilizando metodologias do mercado atuais, utilizando soluções existentes para resolver problemas.',
    'tag_presencial': 'On-Campus',
    'tag_gestao_projetos' : 'Gestão de projetos',
    'tag_estrutura_dados' : 'Estrutura de Dados',
    'tag_logica_programacao' : 'Lógica de Programação',
    

    'edu_etec_curso': 'Técnico em Desenvolvimento de Sistemas',
    'edu_etec_desc': 'Base técnica em lógica de programação e banco de dados. No curso, foram desenvolvidos diversos projetos utilizando linguagens de programação, resolvendo problemas comuns no mercado em exercícios.',

    // --- TRAJETÓRIA (EXPERIÊNCIA) ---
    'titulo_xp_profissional': 'Experiência Profissional',

    // XP 1 - SOC Analista
    'data_ago_atual': 'Ago/2025 - Atualmente',
    'xp_soc_analista': 'Analista de HelpDesk',
    'xp_soc_analista_desc': 'Responsável pela análise aprofundada de erros sistêmicos e validação de regras de negócio conforme documentação. Atuo também na execução de testes de novas funcionalidades em dias de atualizações, fornecendo feedback direto ao time de desenvolvimento e garantindo a qualidade das entregas. Realizo também, treinamentos para os usuários finais do software e consultorias quando necessário.',
    'tag_map_erros': 'Mapeamento de Erros',
    'tag_treinamento': 'Treinamento para Clientes',
    'tag_testes': 'Testes de Software',

    // XP 2 - SOC Assistente
    'data_jul_24_25': 'Jul/2024 - Jul/2025',
    'xp_soc_assistente': 'Assistente de HelpDesk',
    'xp_soc_assistente_desc': 'Atuação focada no atendimento ao cliente e suporte na resolução de chamados. Realizei escalonamento de tickets para o time de Desenvolvimento em casos de BUGs, e atualizações da documentação quando necessário.',
    'tag_suporte_n1': 'Suporte N1',
    'tag_resolucao': 'Resolução de Chamados',
    'tag_atendimento': 'Atendimento',

    // XP 3 - SOC Estágio
    'data_out_jun': 'Out/2023 - Jun/2024',
    'xp_soc_estagio': 'Estagiário - Relacionamento e Negócios',
    'xp_soc_estagio_desc': 'Início da jornada na empresa, com foco no aprendizado das regras de negócio e relacionamento com clientes. Desenvolvimento de soft skills essenciais e entendimento do ecossistema do software SOC SST.',
    'tag_relacionamento': 'Relacionamento',
    'tag_negocios': 'Negócios',
    'tag_comunicacao': 'Comunicação e Flexibilidade',

    // XP 4 - FORTEC
    'xp_fortec': 'Auxiliar Técnico TI',
    'xp_fortec_desc': 'Suporte técnico abrangente a softwares e hardwares, incluindo manutenção de redes e equipamentos. Atuei também na automatização de processos manuais, otimizando a rotina interna da instituição.',
    'tag_infra': 'Infraestrutura',
    'tag_redes': 'Redes',
    'tag_automacao': 'Automação',

    // XP 5 - BTP
    'xp_btp': 'Aprendiz de Suporte de TI',
    'xp_btp_desc': 'Primeira experiência profissional em TI. Responsável pela preparação e instalação de equipamentos (computadores, coletores, rádios), gestão de usuários e suporte direto aos colaboradores.',
    'tag_gestao_acessos': 'Gestão de Acessos',
    'tag_suporte': 'Suporte Técnico',

    // --- CERTIFICAÇÕES ---
    'titulo_certificacoes_completo': 'Certifications and Courses Wall',
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
    'menu_trajetoria': 'Journey', // "Journey" soa melhor que "Trajectory" em inglês
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

    'card_dev_titulo': 'Developer',
    'card_dev_desc': 'I develop websites and applications, building technological projects that add value.',

    'card_student_titulo': 'Systems Analysis Student',
    'card_student_desc': 'I study at FATEC, in my final year. I hold a Technician degree in Systems Development from ETEC.',

    'card_hd_titulo': 'HelpDesk Analyst',
    'card_hd_desc': 'I currently work answering tickets, ensuring the quality of the customer experience.',

    // --- CARDS (TECNOLOGIAS) ---
    'tech_qa': 'Java · Selenium · WebDriver · JUnit',
    'tech_dev': 'Java · SpringBoot · JavaScript · MySql',
    'tech_student': 'Team & Project Management · Development',
    'tech_hd': 'L1 Ticket Management · Customer Service',


    // --- MODAIS (DESCRIÇÕES COMPLETAS) ---
    'modal_qa_desc': 'Como Analista de Testes, foco em garantir a qualidade do software através de testes manuais e automação. Utilizo ferramentas como Selenium e JUnit para criar testes robustos e confiáveis.',
    'modal_dev_desc': 'Detalhes sobre projetos de desenvolvimento, Java e SpringBoot, e exemplos de código ou links para repositórios.',
    'modal_student_desc': 'Jornada acadêmica na FATEC Rubens Lara...',
    'modal_hd_desc': 'Experiência com suporte ao cliente, resolução de problemas e garantia da qualidade da experiência do usuário.',

    // --- MODAIS (DETALHES) ---
    'modal_qa_titulo': 'Portfolio: QA Analyst',
    'modal_qa_desc': 'As a Test Analyst, I focus on ensuring software quality through manual testing and automation. I use tools like Selenium and JUnit to create robust and reliable tests.',

    'modal_dev_titulo': 'Portfolio: Developer',
    'modal_dev_desc': 'Details about development projects, Java and SpringBoot, and code examples or links to repositories.',

    'modal_student_titulo': 'Portfolio: Systems Analysis Student',
    'modal_student_desc': 'Academic journey at FATEC Rubens Lara...',

    'modal_hd_titulo': 'Portfolio: HelpDesk Analyst',
    'modal_hd_desc': 'Experience with customer support, troubleshooting, and ensuring user experience quality.',

    // --- TRAJETÓRIA (EDUCAÇÃO) ---
    'titulo_educacao': 'Education',

    'edu_fatec_curso': 'Technologist Degree in Systems Analysis',
    'edu_fatec_desc': 'Higher education focused on Software Engineering, Project Management, and Programming (Java/Spring). Several projects were carried out using current market methodologies and existing solutions to solve problems.',
    'tag_presencial': 'On-Campus',
    'tag_gestao_projetos' : 'Project Management',
    'tag_estrutura_dados' : 'Data Structure',
    'tag_logica_programacao' : 'Programming Logic',


    'edu_etec_curso': 'Technician in Systems Development',
    'edu_etec_desc': 'Technical foundation in programming logic and databases. In the course, several projects were developed using programming languages, solving common market problems in exercises.',

    // --- TRAJETÓRIA (EXPERIÊNCIA) ---
    'titulo_xp_profissional': 'Professional Experience',

    // XP 1 - SOC Analista
    'data_ago_atual': 'Aug/2025 - Present',
    'xp_soc_analista': 'HelpDesk Analyst',
    'xp_soc_analista_desc': 'Responsible for in-depth analysis of systemic errors and validation of business rules according to documentation. I also act in the execution of tests for new features on update days, providing direct feedback to the development team and ensuring delivery quality. I also conduct training for end-users of the software and consulting when necessary.',
    'tag_map_erros': 'Error Mapping',
    'tag_treinamento': 'Client Training',
    'tag_testes': 'Software Testing',

    // XP 2 - SOC Assistente
    'data_jul_24_25': 'Jul/2024 - Jul/2025',
    'xp_soc_assistente': 'HelpDesk Assistant',
    'xp_soc_assistente_desc': 'Role focused on customer service and support in ticket resolution. I performed ticket escalation to the Development team in cases of BUGs, and documentation updates when necessary.',
    'tag_suporte_n1': 'L1 Support',
    'tag_resolucao': 'Ticket Resolution',
    'tag_atendimento': 'Customer Service',

    // XP 3 - SOC Estágio
    'data_out_jun': 'Oct/2023 - Jun/2024',
    'xp_soc_estagio': 'Intern - Relationship and Business',
    'xp_soc_estagio_desc': 'Beginning of the journey at the company, focusing on learning business rules and customer relationships. Development of essential soft skills and understanding of the SOC SST software ecosystem.',
    'tag_relacionamento': 'Relationship',
    'tag_negocios': 'Business',
    'tag_comunicacao': 'Communication & Flexibility',

    // XP 4 - FORTEC
    'xp_fortec': 'IT Technical Assistant',
    'xp_fortec_desc': 'Comprehensive technical support for software and hardware, including network and equipment maintenance. I also worked on automating manual processes, optimizing the institution\'s internal routine.',
    'tag_infra': 'Infrastructure',
    'tag_redes': 'Networks',
    'tag_automacao': 'Automation',

    // XP 5 - BTP
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