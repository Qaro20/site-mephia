// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = new FormData(contactForm);
            const data = {
                discord: formData.get('discord'),
                budget: formData.get('budget'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            // Construction du corps du mail
            const mailBody = `
                Pseudo Discord: ${data.discord}
                Budget: ${data.budget}€
                Email: ${data.email}
                
                Message:
                ${data.message}
            `;

            // Envoi du mail
            window.location.href = `mailto:paranoqaro@gmail.com?subject=Demande de devis - Mephia Group&body=${encodeURIComponent(mailBody)}`;
        });
    }
});

// Animation du menu de navigation
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
}); 