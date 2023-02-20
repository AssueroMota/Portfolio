let right = document.querySelector('.right');
let Hidden = document.querySelector('.hidden');

function LookCerficate(){
    right.classList.remove('hidden');
    right.classList.add('rigth');
    Hidden.classList.remove('rigth');
    Hidden.classList.add('hidden');
}

function HiddenCerficate(){
    right.classList.remove('rigth');
    right.classList.add('hidden');
    Hidden.classList.remove('hidden');
    Hidden.classList.add('right');
}