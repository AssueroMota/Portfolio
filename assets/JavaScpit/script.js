
// Efeito de maquina de escrever no portifolio inicial

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 110 * i);
    }, 2000);}
// const titulo = document.querySelector('h1');
const titulotwo = document.querySelector('h2');
typeWriter(titulotwo);
function Start() {
typeWriter(titulotwo);}
function StartTwo() {typeWriter(titulotwo);}









