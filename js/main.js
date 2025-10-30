// Smooth scroll para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Manejo del formulario de contacto con WhatsApp
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación básica
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Por favor completá todos los campos requeridos.');
      return;
    }

    // Construir el mensaje para WhatsApp
    const whatsappMessage = `¡Hola! Soy ${name}.\n\n${message}\n\nMi email es: ${email}`;
    
    // Crear el enlace de WhatsApp (usando el número correcto para Argentina)
    const whatsappLink = `https://wa.me/5492622301133?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Redirigir a WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Limpiar el formulario después de enviar
    form.reset();
  });
}

// Manejo del menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !navToggle.contains(e.target) && nav.classList.contains('active')) {
                navToggle.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }
});
