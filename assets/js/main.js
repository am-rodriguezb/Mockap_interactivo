// Función para simular búsqueda colegios
document.getElementById("btn-buscar").addEventListener("click", () => {
  const query = document.getElementById("input-buscar").value.trim();
  const cont = document.getElementById("resultado-busqueda");
  if (!query) {
    cont.innerHTML = '<div class="alert alert-danger">Ingresa un nombre o comuna para buscar.</div>';
    return;
  }
  // Simulación de resultados
  cont.innerHTML = `
    <div class="alert alert-success">
      <strong>Resultados:</strong> colegio "${query} Municipal" - Comuna X. <button class="btn btn-link">Ver detalles</button>
    </div>`;
});

// Función al clicar en tarjetas de contexto
function verTema(tema) {
  const indexMap = { presupuesto: 0, energia: 1, sueldos: 2 };
  const idx = indexMap[tema];
  const carousel = new bootstrap.Carousel(document.getElementById('carouselTemas'));
  carousel.to(idx);
}

// Inicializar: si usas Chart.js y otras funciones, debes mantenerlo
document.addEventListener("DOMContentLoaded", function(){
  if (typeof iniciarApp === 'function') iniciarApp();
  
  // Menú hamburguesa para móviles
  const navbar = document.querySelector('.navbar-tranfic');
  const menu = document.querySelector('.navbar-tranfic .menu');
  
  if (navbar && menu) {
    navbar.addEventListener('click', function(e) {
      // Verificar si el clic fue en el botón hamburguesa (::before)
      const rect = navbar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Área aproximada del botón hamburguesa (esquina superior derecha)
      if (x > rect.width - 50 && y < 50) {
        navbar.classList.toggle('menu-open');
        menu.classList.toggle('active');
        e.preventDefault();
      }
    });
    
    // Cerrar menú al hacer clic en un enlace
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbar.classList.remove('menu-open');
        menu.classList.remove('active');
      });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
      if (!navbar.contains(e.target)) {
        navbar.classList.remove('menu-open');
        menu.classList.remove('active');
      }
    });
  }
  
  // Efecto de hover para el texto lateral
  const cardBlanco = document.getElementById('card-blanco');
  const textoLateral = document.getElementById('texto-lateral');
  const statsRowWhite = document.getElementById('stats-row-white');
  
  if (cardBlanco && textoLateral && statsRowWhite) {
    cardBlanco.addEventListener('mouseenter', function() {
      textoLateral.style.opacity = '1';
      textoLateral.style.transform = 'translateX(0)';
      
      setTimeout(() => {
        statsRowWhite.style.opacity = '1';
        statsRowWhite.style.transform = 'translateX(0)';
      }, 300);
    });
    
    cardBlanco.addEventListener('mouseleave', function() {
      textoLateral.style.opacity = '0';
      textoLateral.style.transform = 'translateX(-50px)';
      
      statsRowWhite.style.opacity = '0';
      statsRowWhite.style.transform = 'translateX(-30px)';
    });
  }

  // Efecto de hover para infraestructura (desde derecha hacia izquierda)
  const cardInfraestructura = document.getElementById('card-infraestructura');
  const textoInfraestructura = document.getElementById('texto-infraestructura');
  const statsInfra = document.getElementById('stats-infra');
  
  if (cardInfraestructura && textoInfraestructura && statsInfra) {
    cardInfraestructura.addEventListener('mouseenter', function() {
      textoInfraestructura.style.opacity = '1';
      textoInfraestructura.style.transform = 'translateX(0)';
      
      setTimeout(() => {
        statsInfra.style.opacity = '1';
        statsInfra.style.transform = 'translateX(0)';
      }, 300);
    });
    
    cardInfraestructura.addEventListener('mouseleave', function() {
      textoInfraestructura.style.opacity = '0';
      textoInfraestructura.style.transform = 'translateX(50px)';
      
      statsInfra.style.opacity = '0';
      statsInfra.style.transform = 'translateX(30px)';
    });
  }

  // Efecto de hover para materiales
  const cardMateriales = document.getElementById('card-materiales');
  const textoMateriales = document.getElementById('texto-materiales');
  const statsMateriales = document.getElementById('stats-materiales');
  
  if (cardMateriales && textoMateriales && statsMateriales) {
    cardMateriales.addEventListener('mouseenter', function() {
      textoMateriales.style.opacity = '1';
      textoMateriales.style.transform = 'translateX(0)';
      
      setTimeout(() => {
        statsMateriales.style.opacity = '1';
        statsMateriales.style.transform = 'translateX(0)';
      }, 300);
    });
    
    cardMateriales.addEventListener('mouseleave', function() {
      textoMateriales.style.opacity = '0';
      textoMateriales.style.transform = 'translateX(-50px)';
      
      statsMateriales.style.opacity = '0';
      statsMateriales.style.transform = 'translateX(-30px)';
    });
  }



  // Efecto fade-in para las secciones
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observar todas las secciones con fade-in
  const fadeInSections = document.querySelectorAll('.fade-in');
  fadeInSections.forEach(section => {
    observer.observe(section);
  });

  // Array de colegios disponibles
  const colegios = [
    { nombre: "Escuela Los Aromos", comuna: "Linares", id: 1 },
    { nombre: "Colegio Mapu", comuna: "Santiago", id: 2 },
    { nombre: "Liceo San Pedro", comuna: "Valparaíso", id: 3 },
    { nombre: "Escuela El Roble", comuna: "Concepción", id: 4 },
    { nombre: "Colegio San Francisco", comuna: "La Serena", id: 5 },
    { nombre: "Liceo Industrial", comuna: "Antofagasta", id: 6 },
    { nombre: "Escuela República de México", comuna: "Santiago", id: 7 },
    { nombre: "Colegio San Agustín", comuna: "Viña del Mar", id: 8 },
    { nombre: "Liceo Bicentenario", comuna: "Temuco", id: 9 },
    { nombre: "Escuela Básica Municipal", comuna: "Iquique", id: 10 }
  ];

  // Función para buscar colegios
  function buscarColegios(query) {
    return colegios.filter(colegio => 
      colegio.nombre.toLowerCase().includes(query.toLowerCase()) ||
      colegio.comuna.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Función para mostrar resultados
  function mostrarResultados(resultados) {
    const cont = document.getElementById("resultado-busqueda");
    
    if (resultados.length === 0) {
      cont.innerHTML = '<div class="alert alert-warning">No se encontraron colegios con ese nombre o comuna.</div>';
      return;
    }
    
    let html = '<div class="row">';
    resultados.forEach(colegio => {
      html += `
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card">
            <div class="card-body text-center">
              <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(colegio.nombre)}&background=0d6e3e&color=fff&rounded=true&size=60" 
                   class="rounded-circle mb-2" alt="${colegio.nombre}">
              <h6 class="card-title">${colegio.nombre}</h6>
              <p class="card-text small text-muted">${colegio.comuna}</p>
              <button class="btn btn-success btn-sm">Ver detalles</button>
            </div>
          </div>
        </div>
      `;
    });
    html += '</div>';
    
    cont.innerHTML = html;
  }

  // Event listeners para búsqueda
  const btnBuscar = document.getElementById("btn-buscar");
  const inputBuscar = document.getElementById("input-buscar");
  
  if (btnBuscar && inputBuscar) {
    btnBuscar.addEventListener("click", () => {
      const query = inputBuscar.value.trim();
      if (!query) {
        document.getElementById("resultado-busqueda").innerHTML = 
          '<div class="alert alert-danger">Ingresa un nombre o comuna para buscar.</div>';
        return;
      }
      const resultados = buscarColegios(query);
      mostrarResultados(resultados);
    });
    
    // Búsqueda en tiempo real
    inputBuscar.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      if (query.length >= 2) {
        const resultados = buscarColegios(query);
        mostrarResultados(resultados);
      } else if (query.length === 0) {
        document.getElementById("resultado-busqueda").innerHTML = '';
      }
    });
  }
});
