window.addEventListener('DOMContentLoaded', function () {

    // --- 1. LÓGICA DO MENU MOBILE ---
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    // Abrir/Fechar ao clicar no ícone
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('fa-times'); // Alterna ícone se houver CSS para isso
            navbar.classList.toggle('active');
        });
    }

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
        if(navbar.classList.contains('active')){
            navbar.classList.remove('active');
            if(menuIcon) menuIcon.classList.remove('fa-times');
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