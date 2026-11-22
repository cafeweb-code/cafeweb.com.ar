document.addEventListener("DOMContentLoaded", function() {
  
  // --- 1. MENÚ HAMBURGUESA MÓVIL ---
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (openMenuBtn && closeMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });

    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  }

  // --- 2. INTERACTIVIDAD DE SCROLL REVEAL ---
  const revealElements = document.querySelectorAll('.reveal');

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => {
    scrollObserver.observe(el);
  });

  // --- 3. INTERACTIVIDAD DE PESTAÑAS (SERVICES TABS) ---
  const tabPills = document.querySelectorAll('.tab-pill');
  
  const servicesData = {
    brand: {
      title: "Brand identity systems built to last in any medium.",
      features: ["Logo design", "Color & typography", "Brand guidelines", "Stationery pack"],
      timeline: "2 to 4 weeks",
      price: "From $3.5k",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    },
    web: {
      title: "Diseño Web Personalizado centrado en la claridad y la conversión.",
      features: ["Diseño UX/UI", "Diseño de Maquetación Personalizado", "Diseño Adaptado para Moviles", "Optimización en los Buscadores"],
      timeline: "1 a 2 Semanas",
      price: "Desde $150.000 ARS",
      image: "images/web-design.png"
    },
    framer: {
      title: "Plan Mensual de Producción y Edición de Contenido.",
      features: ["Diseño de Post Carrousel", "Diseño de Historias", "Edición para Reels", "Contenido Semanal o Mensual"],
      timeline: "2 a 4 Semanas",
      price: "Desde $150.000",
      image: "images/redes.png"
    },
    product: {
      title: "Campañas en Google ADS Search",
      features: ["Investigación de palabras clave (Keyword Research) y estructura de campañas de Búsqueda.", "Redacción de anuncios adaptativos con extensiones clave.", "Reporte mensual de métricas (CPC, Clics, Conversiones, CPA).", "Creación de la Cuenta Verificada", "Creación de la Campaña"],
      timeline: "Depende el paquete que elija",
      price: "Desde $80.000",
      image: "images/google-ads.png"
    },
    support: {
      title: "Campañas en Meta ADS (Facebook - Instagram).",
      features: ["Creación de las Cuentas Facebook , Instagram", "Conexión de las Cuentas Whatsapp Business, Facebook , Instagram", "Creación de la Campañas Publicitarias", "Configuración de Píxel y Conversion API (CAPI).", "Reportes Semanales ó Mensuales de Métricas", "Segmentación de Audiencias", "Creación de Portfolio Comercial"],
      timeline: "Depende el paquete que elija",
      price: "Desde $80.000",
      image: "images/media.png"
    }
  };

  tabPills.forEach(pill => {
    pill.addEventListener('click', () => {
      tabPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const serviceKey = pill.getAttribute('data-service');
      const data = servicesData[serviceKey];

      if (data) {
        document.querySelector('.service-title-main').textContent = data.title;
        document.querySelector('.metric-item:nth-child(1) .metric-value').textContent = data.timeline;
        document.querySelector('.metric-item:nth-child(2) .metric-value').textContent = data.price;
        document.querySelector('.service-image-col img').src = data.image;

        const featuresList = document.querySelector('.service-features-list');
        featuresList.innerHTML = data.features.map(feat => `
          <li><span class="check-icon">✓</span> ${feat}</li>
        `).join('');
      }
    });
  });

  // --- 4. ACORDEÓN DE FAQ ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-icon').textContent = '+';
      });

      if (!isOpen) {
        item.classList.add('active');
        icon.textContent = '−';
      }
    });
  });

   // --- 5. FORMULARIO DE CONTACTO A WHATSAPP ---
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nombreInput = document.getElementById('nombre');
      const emailInput = document.getElementById('email');
      const telefonoInput = document.getElementById('telefono');
      const servicioInput = document.getElementById('servicio');
      const mensajeInput = document.getElementById('mensaje');

      if (!nombreInput || !emailInput || !telefonoInput || !servicioInput || !mensajeInput) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
      }

      const nombre = nombreInput.value.trim();
      const email = emailInput.value.trim();
      const telefono = telefonoInput.value.trim();
      const servicio = servicioInput.value;
      const mensaje = mensajeInput.value.trim();

      const numeroWhatsApp = "5491162326333";

      const texto = `Hola Cafe Web! Me contacto desde la web:\n\n` +
                    `*Nombre:* ${nombre}\n` +
                    `*Email:* ${email}\n` +
                    `*Teléfono:* ${telefono}\n` +
                    `*Servicio de interés:* ${servicio}\n` +
                    `*Mensaje:* ${mensaje}`;

      const mensajeCodificado = encodeURIComponent(texto);
      const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeCodificado}`;

      window.open(urlWhatsApp, '_blank');
    });
  }

});