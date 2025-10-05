// ==========================================
// STICKY HEADER CON EFECTO SCROLL
// ==========================================
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 100) {
    header.style.background = "rgba(10, 10, 10, 0.98)";
    header.style.borderBottom = "1px solid rgba(212, 175, 55, 0.3)";
  } else {
    header.style.background = "rgba(10, 10, 10, 0.95)";
    header.style.borderBottom = "1px solid rgba(212, 175, 55, 0.1)";
  }
});

// ==========================================
// FAQ ACCORDION
// ==========================================
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    const isActive = item.classList.contains("active");

    // Cerrar todos los items
    document.querySelectorAll(".faq-item").forEach((i) => {
      i.classList.remove("active");
    });

    // Abrir el clickeado si no estaba abierto
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// ==========================================
// INTERSECTION OBSERVER - ANIMACIONES ON SCROLL
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observar todos los elementos con clase fade-in
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// ==========================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ==========================================
// TRACKING DE EVENTOS (Google Analytics)
// ==========================================
function trackEvent(category, action, label) {
  // Si tienes Google Analytics configurado
  if (typeof gtag !== "undefined") {
    gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }

  // Console log para desarrollo
  console.log(`📊 Event: ${category} - ${action} - ${label}`);
}

// Track clicks en botones de contacto
document.querySelectorAll(".btn-gold, .btn-outline").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const btnText = this.textContent.trim();
    trackEvent("CTA", "Click", btnText);
  });
});

// Track clicks en opciones de contacto
document.querySelectorAll(".contact-card").forEach((card) => {
  card.addEventListener("click", function () {
    const method = this.querySelector("h3")?.textContent || "Unknown";
    trackEvent("Contact", "Click", method);
  });
});

// Track clicks en WhatsApp
document
  .querySelector(".whatsapp-float")
  ?.addEventListener("click", function () {
    trackEvent("Contact", "WhatsApp Click", "Float Button");
  });

// Track video demo click
document
  .querySelector(".video-placeholder")
  ?.addEventListener("click", function () {
    trackEvent("Engagement", "Video Demo Click", "Hero Section");
    // Aquí podrías abrir un modal con video real
    alert("¡Proximamente! Video demo en producción 🎥");
  });

// ==========================================
// EFECTO PARALLAX EN HERO (Opcional)
// ==========================================
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector(".hero-background");

  if (heroBackground && scrolled < window.innerHeight) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroBackground.style.opacity = 1 - scrolled / 800;
  }
});

// ==========================================
// ANIMACIÓN DE NÚMEROS (Counter Up)
// ==========================================
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + "+";
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + "+";
    }
  }, 16);
}

// Animar estadísticas cuando estén visibles
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const number = entry.target.querySelector(".stat-number");
        if (number && !number.classList.contains("animated")) {
          number.classList.add("animated");
          const text = number.textContent;
          if (text.includes("+")) {
            const value = parseInt(text);
            animateCounter(number, value);
          }
        }
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".stat").forEach((stat) => {
  statsObserver.observe(stat);
});

// ==========================================
// CURSOR PERSONALIZADO (Opcional - Lujo)
// ==========================================
function createCustomCursor() {
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  cursor.innerHTML = '<div class="cursor-inner"></div>';
  document.body.appendChild(cursor);

  // Estilos inline para el cursor personalizado
  const style = document.createElement("style");
  style.textContent = `
        .custom-cursor {
            position: fixed;
            width: 40px;
            height: 40px;
            border: 2px solid #d4af37;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transition: transform 0.15s ease;
            display: none;
        }
        .cursor-inner {
            width: 8px;
            height: 8px;
            background: #d4af37;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        @media (min-width: 1024px) {
            .custom-cursor { display: block; }
            body { cursor: none; }
            a, button { cursor: none; }
        }
    `;
  document.head.appendChild(style);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 20 + "px";
    cursor.style.top = e.clientY - 20 + "px";
  });

  document.querySelectorAll("a, button, .btn").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)";
      cursor.style.borderColor = "#f4d03f";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursor.style.borderColor = "#d4af37";
    });
  });
}

// Descomentar para activar cursor personalizado (solo desktop)
// if (window.innerWidth > 1024) createCustomCursor();

// ==========================================
// PRELOADER (Opcional)
// ==========================================
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 300);
  }

  // Trigger inicial para animaciones
  document.querySelectorAll(".fade-in").forEach((el, index) => {
    setTimeout(() => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    }, index * 100);
  });
});

// ==========================================
// TILT EFFECT EN TARJETAS (Efecto 3D al hover)
// ==========================================
function initTiltEffect() {
  const cards = document.querySelectorAll(
    ".benefit-card, .use-case, .contact-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });
}

// Activar solo en desktop
if (window.innerWidth > 768) {
  initTiltEffect();
}

// ==========================================
// COPY TO CLIPBOARD
// ==========================================
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Crear notificación
    const notification = document.createElement("div");
    notification.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            background: linear-gradient(135deg, #d4af37, #f4d03f);
            color: #1a1a1a;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
    notification.textContent = "✓ Copiado!";
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideOut 0.3s ease";
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  });
}

// ==========================================
// DETECCIÓN DE USUARIO SALIENDO (Exit Intent)
// ==========================================
let exitIntentShown = false;

document.addEventListener("mouseleave", (e) => {
  if (e.clientY <= 0 && !exitIntentShown && window.innerWidth > 768) {
    exitIntentShown = true;
    trackEvent("Engagement", "Exit Intent", "Triggered");

    // Aquí podrías mostrar un modal con oferta especial
    console.log(
      "💡 Usuario intentando salir - Momento ideal para mostrar oferta"
    );
  }
});

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================
function createScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #d4af37, #f4d03f);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  });
}

// Activar barra de progreso
createScrollProgress();

// ==========================================
// TYPING EFFECT EN HERO (Opcional)
// ==========================================
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Ejemplo de uso (descomentar si querés):
// const heroTitle = document.querySelector('.hero-content h1');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 60);
// }

// ==========================================
// GLITCH EFFECT EN HOVER (Efecto Premium)
// ==========================================
document.querySelectorAll(".text-gold").forEach((el) => {
  el.addEventListener("mouseenter", function () {
    this.classList.add("glitch");
    setTimeout(() => this.classList.remove("glitch"), 500);
  });
});

// CSS para glitch effect (agregar al head si se usa)
const glitchStyle = document.createElement("style");
glitchStyle.textContent = `
    @keyframes glitch {
        0% { text-shadow: 2px 2px #d4af37, -2px -2px #f4d03f; }
        25% { text-shadow: -2px 2px #f4d03f, 2px -2px #d4af37; }
        50% { text-shadow: 2px -2px #d4af37, -2px 2px #f4d03f; }
        75% { text-shadow: -2px -2px #f4d03f, 2px 2px #d4af37; }
        100% { text-shadow: 0 0 transparent; }
    }
    .glitch {
        animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
`;
document.head.appendChild(glitchStyle);

// ==========================================
// CONSOLE LOG - BRAND MESSAGE
// ==========================================
console.log(
  "%c✨ TapCard Premium %c",
  "background: linear-gradient(135deg, #d4af37, #f4d03f); color: #0a0a0a; font-size: 24px; padding: 10px 20px; font-weight: bold;",
  ""
);
console.log(
  "%cNetworking de Lujo con Tecnología NFC 🔥",
  "color: #d4af37; font-size: 14px; font-weight: 600;"
);
console.log(
  "%cHecho con 💛 en Rosario, Argentina",
  "color: #9ca3af; font-size: 12px;"
);

// ==========================================
// PERFORMANCE MONITORING
// ==========================================
if (performance && performance.timing) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const loadTime =
        performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`⚡ Página cargada en ${loadTime}ms`);

      if (loadTime < 1000) {
        console.log(
          "%c🚀 Velocidad de carga: EXCELENTE",
          "color: #10b981; font-weight: bold;"
        );
      } else if (loadTime < 3000) {
        console.log(
          "%c⚠️ Velocidad de carga: BUENA",
          "color: #f59e0b; font-weight: bold;"
        );
      } else {
        console.log(
          "%c⚠️ Velocidad de carga: MEJORABLE",
          "color: #ef4444; font-weight: bold;"
        );
      }
    }, 0);
  });
}
// Banner Promocional
function closeBanner() {
  const banner = document.getElementById("promoBanner");
  if (banner) {
    banner.style.animation = "none";
    banner.style.transform = "translateY(-100%)";
    banner.style.transition = "transform 0.3s ease";

    setTimeout(() => {
      banner.classList.add("hidden");
    }, 300);
  }
}
