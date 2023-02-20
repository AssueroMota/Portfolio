
// Efeito de maquina de escrever no portifolio inicial

function typeWriter(elemento) {

    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 110 * i);
    }, 2000);

}
// function typeWriterH2(elemento) {
//     const textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = '';
//     textoArray.forEach((letra, i) => {
//         setTimeout(() => elemento.innerHTML += letra, 110 * i);
//     },100);
// }



const titulo = document.querySelector('h1');
const titulotwo = document.querySelector('h2');
// const Biobio = documento.querySelector('.Curriculum');


typeWriter(titulotwo);
// typeWriter(titulo);
// typeWriter(Biobio);


function Start() {
    typeWriter(titulotwo);
    typeWriter(titulo);
}

// function StartOne() {
//     typeWriter(titulo);
// }


function StartTwo() {
    typeWriter(titulotwo);
}
// function StartBio(){
//     typeWriter(Biobio);
// }









