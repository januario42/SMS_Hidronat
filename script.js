// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  const isActive = mobileMenu.classList.contains("active")

  if (isActive) {
    mobileMenu.classList.remove("active")
  } else {
    mobileMenu.classList.add("active")
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  mobileMenu.classList.remove("active")
}

// Smooth Scroll
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// WhatsApp Integration
function openWhatsApp(plan = "") {
  const phoneNumber = "5521988313327"
  let message = "Olá! Gostaria de saber mais sobre as aulas da SMS Hidronat."

  if (plan) {
    message = `Olá! Tenho interesse no ${plan}. Gostaria de mais informações.`
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

// Form Handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = new FormData(contactForm)
      const name = formData.get("name")
      const phone = formData.get("phone")
      const email = formData.get("email")
      const service = formData.get("service")
      const message = formData.get("message")

      // Service names mapping
      const serviceNames = {
        "natacao-iniciantes": "Natação para Iniciantes",
        taf: "TAF (Teste de Aptidão Física)",
        hidroginastica: "Hidroginástica Terceira Idade",
      }

      const serviceName = serviceNames[service] || service

      let whatsappMessage = `*Nova solicitação de aula experimental*\n\n`
      whatsappMessage += `*Nome:* ${name}\n`
      whatsappMessage += `*WhatsApp:* ${phone}\n`
      whatsappMessage += `*E-mail:* ${email}\n`
      whatsappMessage += `*Modalidade:* ${serviceName}\n`

      if (message) {
        whatsappMessage += `*Mensagem:* ${message}\n`
      }

      whatsappMessage += `\nEnviado através do site SMS Hidronat`

      const phoneNumber = "5521988313327"
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

      window.open(whatsappUrl, "_blank")

      // Reset form
      contactForm.reset()

      // Show success message
      alert("Sua mensagem foi enviada! Entraremos em contato em breve.")
    })
  }
})

// Scroll Effects
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")

  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
    header.style.backdropFilter = "blur(20px)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  }
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".service-card, .pricing-card, .testimonial-card, .benefit")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  const mobileMenu = document.getElementById("mobileMenu")
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")

  // Prevent menu from opening on page load
  mobileMenu.classList.remove("active")

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    // Check if click is outside menu and menu button
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.remove("active")
    }
  })

  // Prevent menu close when clicking inside menu
  mobileMenu.addEventListener("click", (e) => {
    e.stopPropagation()
  })

  // Prevent menu toggle when clicking the button (handled by onclick)
  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation()
  })
})
