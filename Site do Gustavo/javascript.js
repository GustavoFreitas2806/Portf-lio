window.addEventListener('DOMContentLoaded', function () {

  // --- 1. LÓGICA DO MENU MOBILE ---
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  // Abrir/Fechar ao clicar no ícone
  if (menuIcon) {
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('fa-times'); // Opcional: ícone de fechar
      navbar.classList.toggle('active');
    });
  }

  // Fechar o menu ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      menuIcon.classList.remove('fa-times');
    });
  });

  // --- 2. LÓGICA DE SCROLL E MENU ATIVO ---
  const sections = document.querySelectorAll('section[id]');
  const body = document.body;

  window.addEventListener('scroll', function () {
    // Fecha o menu mobile ao rolar a página (UX melhor)
    if(navbar.classList.contains('active')){
        navbar.classList.remove('active');
        if(menuIcon) menuIcon.classList.remove('fa-times');
    }

    const top = window.scrollY;

    sections.forEach(function (section) {
      const offset = section.offsetTop - 150; // Margem para ativar a cor antes de chegar no topo exato
      const height = section.offsetHeight;
      
      // Pega o ID da seção atual
      let id = section.getAttribute('id'); 

      // --- CORREÇÃO IMPORTANTE AQUI ---
      // Se a seção for "certificacoes", fingimos que é "cursos" para acender o botão certo
      if (id === 'certificacoes') {
        id = 'cursos';
      }

      // Verifica se o scroll está dentro desta seção
      if (top >= offset && top < offset + height) {
        
        // 1. Remove "active" de todos os links
        navLinks.forEach(function (link) {
          link.classList.remove('active');
        });

        // 2. Adiciona "active" APENAS no link correspondente
        // O seletor procura: nav a[href="#cursos"]
        const currentLink = document.querySelector('nav a[href="#' + id + '"]');
        if (currentLink) {
          currentLink.classList.add('active');
        }

        // 3. Muda a cor do tema (Dourado se não for Home)
        if (id !== 'home') {
          body.classList.add('cor-dourada');
        } else {
          body.classList.remove('cor-dourada');
        }
      }
    });
  });

  // --- 3. LÓGICA DOS MODAIS ---
  const openModalButtons = document.querySelectorAll(".open-modal");
  const closeModalButtons = document.querySelectorAll(".close-modal");
  const modalOverlays = document.querySelectorAll(".modal-overlay");

  // Abrir modal
  openModalButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = button.getAttribute("data-modal-target");
      const modal = document.querySelector(modalId);
      if (modal) {
        modal.style.display = "flex";
        // Força o navegador a reconhecer a mudança para ativar a transição CSS
        void modal.offsetWidth; 
        modal.classList.add("show");
      }
    });
  });

  // Função para fechar modal
  const closeModal = (modal) => {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // 300ms deve ser igual ao transition do CSS
  };

  // Botão de fechar (X)
  closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal-overlay");
      closeModal(modal);
    });
  });

  // Clicar fora do modal (Overlay)
  modalOverlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

});