// Espera a página carregar completamente
window.addEventListener('DOMContentLoaded', function () {
  
    // Pega todos os links da navbar
    const links = document.querySelectorAll('nav a');
  
    // Pega todas as seções com id
    const sections = document.querySelectorAll('section[id]');
  
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
        }
      });
    });
  });
  