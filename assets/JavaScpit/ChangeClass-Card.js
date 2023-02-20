//PRIMEIRO CARD

let oneHand = document.querySelector('#card-one .Ul #one');
let TwoHand = document.querySelector('#card-one .Ul #two');
let ThreeHand = document.querySelector('#card-one .Ul #three');
let FourHand = document.querySelector('#card-one .Ul #four');
let FiveHand = document.querySelector('#card-one .Ul #five');
let IconRightOne = document.querySelector('.IconRightOne');
let IconRightTwo = document.querySelector('.IconRightTwo');
let IconRightThree = document.querySelector('.IconRightThree');
let IconRightFour = document.querySelector('.IconRightFour');
let IconRightFive = document.querySelector('.IconRightFive');


//FIRST CARD EFECTS - EVENT


oneHand.addEventListener('mouseover', ()=> {
    IconRightOne.classList.remove('Hidden');
    IconRightOne.classList.add('Look');

})


oneHand.addEventListener('mouseleave', ()=> {
    IconRightOne.classList.remove('Look');
    IconRightOne.classList.add('Hidden');

})

TwoHand.addEventListener('mouseover', ()=> {
    IconRightTwo.classList.remove('Hidden');
    IconRightTwo.classList.add('Look');

})

TwoHand.addEventListener('mouseleave', ()=> {
    IconRightTwo.classList.remove('Look');
    IconRightTwo.classList.add('Hidden');

})


ThreeHand.addEventListener('mouseover', ()=> {
    IconRightThree.classList.remove('Hidden');
    IconRightThree.classList.add('Look');

})

ThreeHand.addEventListener('mouseleave', ()=> {
    IconRightThree.classList.remove('Look');
    IconRightThree.classList.add('Hidden');

})


FourHand.addEventListener('mouseover', ()=> {
    IconRightFour.classList.remove('Hidden');
    IconRightFour.classList.add('Look');

})

FourHand.addEventListener('mouseleave', ()=> {
    IconRightFour.classList.remove('Look');
    IconRightFour.classList.add('Hidden');

})


FiveHand.addEventListener('mouseover', ()=> {
    IconRightFive.classList.remove('Hidden');
    IconRightFive.classList.add('Look');

})

FiveHand.addEventListener('mouseleave', ()=> {
    IconRightFive.classList.remove('Look');
    IconRightFive.classList.add('Hidden');

})




//SEGUNDO CARD 
let cardTwoOneHand = document.querySelector('#card-two .Ul #six');
let cardTwoTwoHand = document.querySelector('#card-two .Ul #seven');
let cardTwoThreeHand = document.querySelector('#card-two .Ul #eigth');
let cardTwoFourHand = document.querySelector('#card-two .Ul #nine');

let IconRightOneHand = document.querySelector('.IconRightOneHand');
let IconRightTwoHand = document.querySelector('.IconRightTwoHand ');
let IconRightThreeHand = document.querySelector('.IconRightThreeHand');
let IconRightFourHand = document.querySelector('.IconRightFourHand');


cardTwoOneHand.addEventListener('mouseover', ()=> {
    IconRightOneHand.classList.remove('Hidden');
    IconRightOneHand.classList.add('Look');

})

cardTwoOneHand.addEventListener('mouseleave', ()=> {
    IconRightOneHand.classList.remove('Look');
    IconRightOneHand.classList.add('Hidden');

})

cardTwoTwoHand.addEventListener('mouseover', ()=> {
    IconRightTwoHand.classList.remove('Hidden');
    IconRightTwoHand.classList.add('Look');

})

cardTwoTwoHand.addEventListener('mouseleave', ()=> {
    IconRightTwoHand.classList.remove('Look');
    IconRightTwoHand.classList.add('Hidden');

})

cardTwoThreeHand.addEventListener('mouseover', ()=> {
    IconRightThreeHand.classList.remove('Hidden');
    IconRightThreeHand.classList.add('Look');

})

cardTwoThreeHand.addEventListener('mouseleave', ()=> {
    IconRightThreeHand.classList.remove('Look');
    IconRightThreeHand.classList.add('Hidden');

})
cardTwoFourHand.addEventListener('mouseover', ()=> {
    IconRightFourHand.classList.remove('Hidden');
    IconRightFourHand.classList.add('Look');

})

cardTwoFourHand.addEventListener('mouseleave', ()=> {
    IconRightFourHand.classList.remove('Look');
    IconRightFourHand.classList.add('Hidden');

})

//THREE CARD 





let cardThreeOneHandC = document.querySelector('.card-Chesf-2 .Ul #eleven');

let IconRightOneHandC = document.querySelector('.IconRightOneHandC');



cardThreeOneHandC.addEventListener('mouseover', ()=> {
    IconRightOneHandC.classList.remove('Hidden');
    IconRightOneHandC.classList.add('Look');

})

cardThreeOneHandC.addEventListener('mouseleave', ()=> {
    IconRightOneHandC.classList.remove('Look');
    IconRightOneHandC.classList.add('Hidden');

})



//Last Card



let cardFourOneHandCM = document.querySelector('.card-Marista .Ul #twelve');

let IconRightOneHandCM = document.querySelector('.IconRightOneHandCM');



cardFourOneHandCM.addEventListener('mouseover', ()=> {
    IconRightOneHandCM.classList.remove('Hidden');
    IconRightOneHandCM.classList.add('Look');

})

cardFourOneHandCM.addEventListener('mouseleave', ()=> {
    IconRightOneHandCM.classList.remove('Look');
    IconRightOneHandCM.classList.add('Hidden');

})











