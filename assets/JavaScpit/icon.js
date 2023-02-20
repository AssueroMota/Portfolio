
const Emailer = document.querySelector('.Emailer');
const fa_regular = document.querySelector('.fa-regular');
Emailer.addEventListener('mouseleave', () => {
    Emailer.innerHTML = `<a href="#"><i class="fa-regular fa-envelope-open"></i><span>E-mail</span>`
})

// Emailer.addEventListener('mouseleave', () => {
//     Emailer.innerHTML = `<a href="#"><i class="fa-regular fa-envelope"></i><span>E-mail</span>`
// })