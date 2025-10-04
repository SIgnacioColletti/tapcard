// ===== MENÚ MÓVIL =====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Animación del ícono hamburguesa
  const spans = menuToggle.querySelectorAll("span");
  if (navMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translateY(8px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translateY(-8px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Cerrar menú al hacer click en un enlace
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const spans = menuToggle.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  });
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 5px 30px rgba(0,0,0,0.15)";
  } else {
    header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
  }
});

// ===== ANIMACIÓN DE ENTRADA PARA ELEMENTOS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observar elementos para animación
const animatedElements = document.querySelectorAll(
  ".step-card, .package-card, .benefit-card, .audience-item, .comparison-card, .faq-item"
);
animatedElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});

// ===== CONTADOR DE AHORRO =====
const updateSavingsCounter = () => {
  const savingsElements = document.querySelectorAll(".package-savings");
  savingsElements.forEach((el) => {
    const text = el.textContent;
    if (text.includes("$")) {
      el.style.fontWeight = "700";
      el.style.fontSize = "1.1rem";
    }
  });
};

updateSavingsCounter();

// ===== FAQ ACCORDION (OPCIONAL) =====
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  // Inicialmente ocultar respuestas (opcional)
  // answer.style.display = 'none';

  question.addEventListener("click", () => {
    // Toggle respuesta
    if (answer.style.display === "none") {
      answer.style.display = "block";
      question.style.color = "var(--dorado)";
    } else {
      answer.style.display = "block"; // Mantener siempre visible por defecto
    }
  });
});

// ===== BOTÓN SCROLL TO TOP (OPCIONAL) =====
const createScrollTopButton = () => {
  const button = document.createElement("button");
  button.innerHTML = "↑";
  button.className = "scroll-top-btn";
  button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--azul-primario);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s;
        z-index: 999;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    `;

  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      button.style.opacity = "1";
    } else {
      button.style.opacity = "0";
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  button.addEventListener("mouseenter", () => {
    button.style.background = "var(--dorado)";
    button.style.transform = "translateY(-5px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.background = "var(--azul-primario)";
    button.style.transform = "translateY(0)";
  });
};

createScrollTopButton();

// ===== CONSOLE LOG DE BIENVENIDA =====
console.log(
  "%c🚀 TapCard Rosario - Landing Page Cargada",
  "color: #2563eb; font-size: 16px; font-weight: bold;"
);
console.log(
  "%cPowered by TapCard Rosario 2025",
  "color: #d4af37; font-size: 12px;"
);
