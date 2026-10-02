const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.menu-toggle');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

const clients = [
  { name: 'Concesionaria Vial del Pacífico', logo: 'assets/clients/covipacifico.jpg' },
  { name: 'Concesionaria Ruta al Sur', logo: 'assets/clients/ruta-al-sur.png' },
  { name: 'Empresa Nacional de Autopistas ENA Panamá', logo: 'assets/clients/ena.png' },
  { name: 'Concesionaria Rutas del Valle', logo: 'assets/clients/rutas-del-valle.jpg' },
  { name: 'Transversal del Sisga', logo: 'assets/clients/sisga.svg' },
  { name: 'Concesión Ruta al Mar', logo: 'assets/clients/ruta-al-mar.jpg' },
  { name: 'POB Perimetral Oriental de Bogotá', logo: 'assets/clients/pob.svg' },
  { name: 'Metro de Medellín', logo: 'assets/clients/metro-medellin.svg' },
  { name: 'Ruta Costera ISA', logo: 'assets/clients/ruta-costera.svg' }
];
const clientGrid = document.querySelector('#client-grid');

if (clients.length) {
  clientGrid.innerHTML = clients.map(({ name, logo }) => `
    <article class="client-card">
      <div class="client-logo">
        ${logo ? `<img src="${logo}" alt="Logo de ${name}">` : `<span class="client-logo-fallback">${name.slice(0, 2).toUpperCase()}</span>`}
      </div>
      <div><h3>${name}</h3></div>
    </article>`).join('');
} else {
  clientGrid.innerHTML = '<div class="client-placeholder">La galería de concesiones se incorporará con la imagen de referencia correcta.</div>';
}
