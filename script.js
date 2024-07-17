const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');
const body = document.body;

// Función para cambiar el tema a oscuro
function activateDarkMode() {
    body.classList.add('dark-mode');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline';
    localStorage.setItem('theme', 'dark');
}

// Función para cambiar el tema a claro
function activateLightMode() {
    body.classList.remove('dark-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
    localStorage.setItem('theme', 'light');
}

// Event listener para icono de luna (tema oscuro)
moonIcon.addEventListener('click', () => {
    activateDarkMode();
});

// Event listener para icono de sol (tema claro)
sunIcon.addEventListener('click', () => {
    activateLightMode();
});

// Verificar el almacenamiento local para la preferencia de tema
if (localStorage.getItem('theme') === 'dark') {
    activateDarkMode();
} else {
    activateLightMode();
}
