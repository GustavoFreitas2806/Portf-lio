// Espera a página carregar completamente
window.addEventListener('DOMContentLoaded', function () {

  // --- LÓGICA DE SCROLL E MENU ATIVO ---
  // Pega todos os links da navbar
  const links = document.querySelectorAll('nav a');
  // Pega todas as seções com id
  const sections = document.querySelectorAll('section[id]');
  // Pega o body para manipular classes globais
  const body = document.body;

  // Quando o usuário rolar a página
  window.addEventListener('scroll', function () {
    // Para cada seção da página
    sections.forEach(function (section) {
      // Pega o topo da seção e sua altura
      const top = window.scrollY;
      const offset = section.offsetTop - 150; // margem de ativação
      const height = section.offsetHeight;
      const id = section.getAttribute('id'); // ex: "skills"

      // Verifica se o scroll está dentro da seção
      if (top >= offset && top < offset + height) {
        // Remove "active" de todos os links
        links.forEach(function (link) {
          link.classList.remove('active');
        });

        // Adiciona "active" no link correspondente à seção atual
        const currentLink = document.querySelector('nav a[href="#' + id + '"]');
        if (currentLink) {
          currentLink.classList.add('active');
        }

        // Altera a cor principal de acordo com a seção atual
        // Se não for a seção "home", ativa a cor dourada
        if (id !== 'home') {
          body.classList.add('cor-dourada');
        } else {
          body.classList.remove('cor-dourada');
        }
      }
    });
  });

  // --- LÓGICA PARA MÚLTIPLOS MODAIS ---
  // Pega todos os botões que abrem modais
  const openModalButtons = document.querySelectorAll(".open-modal");
  // Pega todos os botões de fechar
  const closeModalButtons = document.querySelectorAll(".close-modal");
  // Pega todos os overlays
  const modalOverlays = document.querySelectorAll(".modal-overlay");

  // Adiciona o evento de clique para cada botão de abrir
  openModalButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // Impede o comportamento padrão do link

      const modalId = button.getAttribute("data-modal-target");
      const modal = document.querySelector(modalId);

      if (modal) {
        modal.style.display = "flex";
        // Força o reflow para a transição funcionar
        void modal.offsetWidth;
        modal.classList.add("show");
      }
    });
  });

  // Função para fechar um modal
  const closeModal = (modal) => {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // Deve ser o mesmo tempo da transição no CSS
  };

  // Adiciona o evento de clique para cada botão de fechar
  closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal-overlay");
      closeModal(modal);
    });
  });

  // Adiciona o evento de clique para fechar ao clicar fora (no overlay)
  modalOverlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });
});