// Mobile Menu Toggle com controle de propagação
function toggleMobileMenu(event) {
    event.stopPropagation(); // Impede que o clique no botão feche o menu
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

    if (
        mobileMenu.classList.contains('active') &&
        !mobileMenu.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)
    ) {
        mobileMenu.classList.remove('active');
    }
});

// Impede que cliques dentro do menu fechem o menu
document.getElementById('mobileMenu').addEventListener('click', function(e) {
    e.stopPropagation();
});

// Smooth Scroll
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// WhatsApp Integration
function openWhatsApp(plan = '') {
    const phoneNumber = '5521988313327';
    let message = 'Olá! Gostaria de saber mais sobre as aulas da SMS Hidronat.';
    
    if (plan) {
        message = `Olá! Tenho interesse no ${plan}. Gostaria de mais informações.`;
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const service = formData.get('service');
            const message = formData.get('message');
            
            const serviceNames = {
                'natacao-iniciantes': 'Natação para Iniciantes',
                'taf': 'TAF (Teste de Aptidão Física)',
                'hidroginastica': 'Hidroginástica Terceira Idade'
            };
            
            const serviceName = serviceNames[service] || service;
            
            let whatsappMessage = `*Nova solicitação de aula experimental*\n\n`;
            whatsappMessage += `*Nome:* ${name}\n`;
            whatsappMessage += `*WhatsApp:* ${phone}\n`;
            whatsappMessage += `*E-mail:* ${email}\n`;
            whatsappMessage += `*Modalidade:* ${serviceName}\n`;
            if (message) {
                whatsappMessage += `*Mensagem:* ${message}\n`;
            }
            whatsappMessage += `\nEnviado através do site SMS Hidronat`;
            
            const phoneNumber = '5521988313327';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
            
            contactForm.reset();
            alert('Sua mensagem foi enviada! Entraremos em contato em breve.');
        });
    }

    // Animações com Intersection Observer
    const animatedElements = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card, .benefit');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Scroll Effects (header dinâmico)
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});
