const perfil = document.getElementsByClassName('bloque-perfil')[0];
const menu = document.getElementsByClassName('bloques-menu')[0];
const presentacion = document.getElementsByClassName('bloque-pres')[0];
const presText = document.getElementsByClassName('presentacion')[0];
const cerrar = document.getElementById('cerrar');
const estudios = document.getElementsByClassName('bloque-estudios')[0];
const exp = document.getElementsByClassName('bloque-experiencia')[0];
const contacto = document.getElementsByClassName('bloque-contacto')[0];
const pageWidth  = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

perfil.addEventListener('click', () => {
    menu.classList.add('hide-menu');
    presentacion.classList.add('pres-cambio');
    presText.classList.add('pres-text-cambio');
    document.getElementsByTagName('nav')[0].classList.add('mostrar-nav');
    document.getElementsByClassName('contenido-perfil')[0].classList.add('mostrarP');
});

cerrar.addEventListener('click', () => {
    menu.classList.remove('hide-menu');
    presentacion.classList.remove('pres-cambio');
    presText.classList.remove('pres-text-cambio');
    document.getElementsByTagName('nav')[0].classList.remove('mostrar-nav');
    document.getElementsByClassName('contenido-perfil')[0].classList.remove('mostrarP');
});

estudios.addEventListener('click', () => {
    document.getElementsByTagName('ul')[0].getElementsByTagName('a')[1].click();
    menu.classList.add('hide-menu');
    presentacion.classList.add('pres-cambio');
    presText.classList.add('pres-text-cambio');
    document.getElementsByTagName('nav')[0].classList.add('mostrar-nav');
    document.getElementsByClassName('contenido-perfil')[0].classList.add('mostrarP');
});

exp.addEventListener('click', () => {
    document.getElementsByTagName('ul')[0].getElementsByTagName('a')[2].click();
    menu.classList.add('hide-menu');
    presentacion.classList.add('pres-cambio');
    presText.classList.add('pres-text-cambio');
    document.getElementsByTagName('nav')[0].classList.add('mostrar-nav');
    document.getElementsByClassName('contenido-perfil')[0].classList.add('mostrarP');
});

contacto.addEventListener('click', () => {
    document.getElementsByTagName('ul')[0].getElementsByTagName('a')[3].click();
    menu.classList.add('hide-menu');
    presentacion.classList.add('pres-cambio');
    presText.classList.add('pres-text-cambio');
    document.getElementsByTagName('nav')[0].classList.add('mostrar-nav');
    document.getElementsByClassName('contenido-perfil')[0].classList.add('mostrarP');
});

// if (pageWidth <= 800) {

// }