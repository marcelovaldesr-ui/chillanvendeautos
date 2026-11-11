/**
 * CHILLÁN VENDE AUTOS - Interactive Functionality
 * Compraventa de Autos Clásicos y Seleccionados - Chillán, Chile
 */

(function($) {
  'use strict';

  // Car Catalog Data
  const CARS = [
    {
      id: 'c10-1978',
      year: '1978',
      brand: 'Chevrolet',
      category: 'camionetas',
      model: 'Chevrolet C10 Custom Deluxe 4x4',
      badge: 'Ícono del Logo',
      badgeClass: 'featured',
      img: 'images/car-c10.jpg',
      engine: 'V8 350ci (5.7L) Small Block',
      trans: 'Automática TH350 4x4',
      km: '54.200 km',
      color: 'Rojo Carmesí / Negro',
      hp: '280 HP',
      priceClp: '$28.500.000 CLP',
      priceUsd: 'US$ 29.800',
      desc: 'La verdadera camioneta clásica que inspira la marca Chillán Vende Autos. Suspensión elevada 4 pulgadas, neumáticos All-Terrain nuevos de 35", interior en cuero beige original impecable y motor V8 con escape doble Flowmaster. Papeles al día y lista para rodar en Chile.'
    },
    {
      id: 'mustang-1969',
      year: '1969',
      brand: 'Ford',
      category: 'ford',
      model: 'Ford Mustang Fastback Mach 1',
      badge: 'Destacado',
      badgeClass: '',
      img: 'images/car-mustang-69.jpg',
      engine: 'V8 351ci Windsor 4-BBL',
      trans: 'Manual 4 Velocidades',
      km: '48.200 km',
      color: 'Candy Apple Red / Franjas Negras',
      hp: '300 HP',
      priceClp: '$48.900.000 CLP',
      priceUsd: 'US$ 51.200',
      desc: 'Auténtico Mustang Mach 1 Fastback con toma de aire Shaker funcional, llantas Magnum 500, frenos de disco delanteros y dirección asistida. Restauración de concurso importado directamente a nuestro showroom en Chillán.'
    },
    {
      id: 'chevelle-1970',
      year: '1970',
      brand: 'Chevrolet',
      category: 'chevrolet',
      model: 'Chevrolet Chevelle SS 454',
      badge: 'Poder Puro',
      badgeClass: 'featured',
      img: 'images/car-chevelle-70.jpg',
      engine: 'V8 454ci Big Block LS5',
      trans: 'Automática Turbo Hydra-Matic 400',
      km: '36.500 km',
      color: 'Cranberry Red / Rayas Blancas',
      hp: '450 HP',
      priceClp: '$52.000.000 CLP',
      priceUsd: 'US$ 54.500',
      desc: 'El rey absoluto de la era dorada de los Muscle Cars. Capot Cowl Induction funcional, diferencial 12 pernos Posi-Traction, sonido atronador y condición 10/10.'
    },
    {
      id: 'camaro-1968',
      year: '1968',
      brand: 'Chevrolet',
      category: 'chevrolet',
      model: 'Chevrolet Camaro SS 396',
      badge: 'Clásico',
      badgeClass: '',
      img: 'images/car-camaro-68.jpg',
      engine: 'V8 396ci Big Block L35',
      trans: 'Manual Muncie M21 4 vel',
      km: '41.000 km',
      color: 'Matador Red / Franja SS Blanca',
      hp: '350 HP',
      priceClp: '$44.500.000 CLP',
      priceUsd: 'US$ 46.600',
      desc: 'Primera generación del Camaro con motor Big Block de fábrica, consola central con tacómetro Tic-Toc-Tach, escape de acero inoxidable y manejo sumamente deportivo.'
    },
    {
      id: 'challenger-1971',
      year: '1971',
      brand: 'Dodge',
      category: 'mopar',
      model: 'Dodge Challenger R/T 440 Magnum',
      badge: 'Mopar Legend',
      badgeClass: 'featured',
      img: 'images/car-challenger-71.jpg',
      engine: 'V8 440ci Magnum Six-Pack',
      trans: 'Automática TorqueFlite 727',
      km: '39.000 km',
      color: 'Plum Crazy Purple',
      hp: '390 HP',
      priceClp: '$49.800.000 CLP',
      priceUsd: 'US$ 52.100',
      desc: 'Color Mopar High-Impact legendario, gráficos R/T laterales, suspensión reforzada y carburadores triples Holley. Uno de los ejemplares más codiciados por coleccionistas en Sudamérica.'
    },
    {
      id: 'belair-1957',
      year: '1957',
      brand: 'Chevrolet',
      category: 'chevrolet',
      model: 'Chevrolet Bel Air Sport Coupe',
      badge: 'Colección',
      badgeClass: '',
      img: 'images/car-belair-57.jpg',
      engine: 'V8 283ci Super Turbo-Fire',
      trans: 'Automática Powerglide',
      km: '62.000 km',
      color: 'Turquesa Tropical / Techo Blanco',
      hp: '220 HP',
      priceClp: '$39.500.000 CLP',
      priceUsd: 'US$ 41.300',
      desc: 'El ícono automotriz más reconocible de los años 50 en el mundo. Cromados relucientes como espejos, tapicería bicolor vintage y andar sumamente suave y placentero.'
    },
    {
      id: 'corvette-1963',
      year: '1963',
      brand: 'Chevrolet',
      category: 'chevrolet',
      model: 'Chevrolet Corvette Sting Ray Split Window',
      badge: 'Rareza Top',
      badgeClass: 'featured',
      img: 'images/car-corvette-63.jpg',
      engine: 'V8 327ci 360 HP Fuelie',
      trans: 'Manual 4 Velocidades',
      km: '29.500 km',
      color: 'Riverside Red',
      hp: '360 HP',
      priceClp: '$78.000.000 CLP',
      priceUsd: 'US$ 81.500',
      desc: 'Pieza de museo única producida solamente en 1963 con la mítica luneta trasera dividida (Split Window). Inyección mecánica Rochester original y estado inmaculado de concurso.'
    },
    {
      id: 'charger-1968',
      year: '1968',
      brand: 'Dodge',
      category: 'mopar',
      model: 'Dodge Charger R/T 440',
      badge: 'Recién Llegado',
      badgeClass: '',
      img: 'images/charger-rt-8d463037febb39709aed46b70a0e1308.png',
      engine: 'V8 440ci Magnum',
      trans: 'Automática 727 Heavy Duty',
      km: '45.000 km',
      color: 'Negro Brillante / Franjas Blancas',
      hp: '375 HP',
      priceClp: '$54.000.000 CLP',
      priceUsd: 'US$ 56.500',
      desc: 'Faros ocultos escamoteables, línea fastback "coke-bottle" inconfundible y el torque demoledor del 440 Magnum. Disponible de inmediato en Chillán con despacho a cualquier región de Chile.'
    }
  ];

  // Render Car Cards
  function renderCarGrid(carsToRender) {
    const $grid = $('#cva-cars-grid');
    if (!$grid.length) return;
    $grid.empty();

    const prefix = window.CVA_IMG_PREFIX || '';

    if (carsToRender.length === 0) {
      $grid.html('<div style="grid-column: 1/-1; text-align: center; color: #888; padding: 40px; font-size: 20px;">No se encontraron vehículos que coincidan con la búsqueda.</div>');
      return;
    }

    carsToRender.forEach(function(car) {
      const wspMessage = encodeURIComponent(`Hola Chillán Vende Autos! Estoy interesado en el ${car.year} ${car.model} (${car.priceClp}) que vi en su catálogo web.`);
      const wspUrl = `https://wa.me/56994749513?text=${wspMessage}`;
      const imgSrc = prefix + car.img;

      const cardHtml = `
        <div class="cva-card" data-category="${car.category}" data-id="${car.id}">
          <div class="cva-card-img-wrap">
            <img src="${imgSrc}" alt="${car.year} ${car.model}" loading="lazy">
            <span class="cva-badge ${car.badgeClass}">${car.badge}</span>
          </div>
          <div class="cva-card-body">
            <div class="cva-card-year">${car.year} • ${car.brand}</div>
            <h3 class="cva-card-title">${car.model}</h3>
            
            <div class="cva-card-specs">
              <div class="cva-spec-item">
                <span class="cva-spec-label">Motor</span>
                <span class="cva-spec-val">${car.engine}</span>
              </div>
              <div class="cva-spec-item">
                <span class="cva-spec-label">Transmisión</span>
                <span class="cva-spec-val">${car.trans}</span>
              </div>
              <div class="cva-spec-item">
                <span class="cva-spec-label">Kilometraje</span>
                <span class="cva-spec-val">${car.km}</span>
              </div>
              <div class="cva-spec-item">
                <span class="cva-spec-label">Potencia</span>
                <span class="cva-spec-val">${car.hp}</span>
              </div>
            </div>

            <div class="cva-card-price-row">
              <div class="cva-price-clp">${car.priceClp}</div>
              <div class="cva-price-usd">${car.priceUsd} aprox</div>
            </div>

            <div class="cva-card-actions">
              <a href="#" class="cva-btn-detail" data-car-id="${car.id}">Ver Ficha</a>
              <a href="${wspUrl}" target="_blank" rel="noopener" class="cva-btn-wsp">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      `;
      $grid.append(cardHtml);
    });
  }

  // Filter & Search Logic
  function initInventoryFilters() {
    let currentCategory = 'all';
    let searchQuery = '';

    function applyFilters() {
      let filtered = CARS.filter(function(car) {
        const matchesCategory = currentCategory === 'all' || 
          (currentCategory === 'camionetas' && car.category === 'camionetas') ||
          (currentCategory === 'chevrolet' && car.brand.toLowerCase() === 'chevrolet') ||
          (currentCategory === 'ford' && car.brand.toLowerCase() === 'ford') ||
          (currentCategory === 'mopar' && (car.brand.toLowerCase() === 'dodge' || car.category === 'mopar'));
        
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = !q || 
          car.model.toLowerCase().indexOf(q) !== -1 ||
          car.year.indexOf(q) !== -1 ||
          car.engine.toLowerCase().indexOf(q) !== -1 ||
          car.desc.toLowerCase().indexOf(q) !== -1;

        return matchesCategory && matchesSearch;
      });

      renderCarGrid(filtered);
    }

    $(document).on('click', '.cva-pill-btn', function(e) {
      e.preventDefault();
      $('.cva-pill-btn').removeClass('active');
      $(this).addClass('active');
      currentCategory = $(this).data('filter') || 'all';
      applyFilters();
    });

    $(document).on('input', '#cva-car-search', function() {
      searchQuery = $(this).val();
      applyFilters();
    });
  }

  // Car Detail Modal Handler
  function initCarModal() {
    $(document).on('click', '.cva-btn-detail', function(e) {
      e.preventDefault();
      const carId = $(this).data('car-id');
      const car = CARS.find(c => c.id === carId);
      if (!car) return;

      const prefix = window.CVA_IMG_PREFIX || '';
      $('#cva-modal-title').text(`${car.year} ${car.model}`);
      $('#cva-modal-img').attr('src', prefix + car.img).attr('alt', car.model);
      $('#cva-modal-desc').text(car.desc);
      $('#cva-modal-engine').text(car.engine);
      $('#cva-modal-trans').text(car.trans);
      $('#cva-modal-hp').text(car.hp);
      $('#cva-modal-km').text(car.km);
      $('#cva-modal-color').text(car.color);
      $('#cva-modal-price').text(`${car.priceClp} (${car.priceUsd})`);

      const wspMessage = encodeURIComponent(`Hola Chillán Vende Autos! Quiero agendar una visita o reservar el ${car.year} ${car.model} (${car.priceClp}).`);
      $('#cva-modal-wsp-btn').attr('href', `https://wa.me/56994749513?text=${wspMessage}`);

      $('#cva-car-modal').modal('show');
    });
  }

  // Contact Form AJAX simulation with pleasant feedback
  function initForms() {
    // General Contact Form
    $(document).on('submit', '.contact_form', function(e) {
      e.preventDefault();
      const $form = $(this);
      const name = $form.find('input[name="contact[name]"]').val() || 'Amigo';
      const email = $form.find('input[name="contact[email]"]').val() || '';
      const phone = $form.find('input[name="contact[phone]"]').val() || '';
      const comment = $form.find('textarea[name="contact[comment]"]').val() || '';

      const $submitBtn = $form.find('.form-submit');
      $submitBtn.val('Enviando...').prop('disabled', true);

      setTimeout(function() {
        $form.hide();
        const $success = $form.siblings('.contact-success');
        $success.find('.submitted-text h2').text(`¡Gracias por contactarnos, ${name}!`);
        $success.find('.submitted-text').append(`<p style="color:#ddd; margin-top:10px;">Hemos recibido tu mensaje correctamente. Nuestro equipo de Chillán Vende Autos te responderá a la brevedad.</p>`);
        $success.show();
      }, 700);
    });

    // Text Message Widget Form
    $(document).on('submit', '.text-message-widget-form', function(e) {
      e.preventDefault();
      const $form = $(this);
      const name = $form.find('input[name="contact[name]"]').val() || '';
      const phone = $form.find('input[name="contact[phone]"]').val() || '';

      $form.hide();
      $('#text-success').show();
      $('#text-success .success-message').html(`¡Mensaje Recibido, ${name}!<br><small style="font-size:14px;color:#aaa;">Un asesor de Chillán Vende Autos te escribirá al ${phone}.</small>`);
    });

    // Newsletter Subscribe Form
    $(document).on('submit', '#cva-newsletter-form', function(e) {
      e.preventDefault();
      const email = $('#cva-newsletter-email').val();
      if (!email) return;
      $('#cva-newsletter-form').html('<div style="color: #27ae60; font-family: \'Rajdhani\', sans-serif; font-size: 20px; font-weight: 700; padding: 10px 0;">✓ ¡Suscripción confirmada! Te mantendremos informado de los nuevos clásicos en Chillán.</div>');
    });
  }

  // Smooth scroll for nav anchor links
  function initSmoothScroll() {
    $(document).on('click', 'a[href^="#"]', function(e) {
      const targetId = $(this).attr('href');
      if (targetId && targetId !== '#' && $(targetId).length) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $(targetId).offset().top - 90
        }, 500);

        // Close mobile nav if opened
        if ($('body').hasClass('fixed-body')) {
          $('body').removeClass('fixed-body');
          $('.mobile-menu-btn').removeClass('is-open');
        }
      }
    });
  }

  // Document Ready
  $(document).ready(function() {
    renderCarGrid(CARS);
    initInventoryFilters();
    initCarModal();
    initForms();
    initSmoothScroll();
  });

})(jQuery);
