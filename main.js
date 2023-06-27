const myfemale = document.getElementById('female');
const headOne = document.getElementById('hdOne');
const headTwo = document.getElementById('hdTwo');
const subheads = document.getElementById('subhead');
const learn_more = document.getElementById('learn_more');
const logo = document.getElementById('logo');
const replay = document.getElementById('replay');
const ref = document.getElementById('ref')



function fadeIn() {
    myfemale.classList.add("fade-in");
    myfemale.classList.remove("fade-out");
}

function fadeOut() {
    myfemale.classList.add("fade-out");
    myfemale.classList.remove("fade-in");
}

function displayNoneFemale() {
    myfemale.classList.add("displayFemale");
}

setTimeout(fadeIn, 1000);
setTimeout(fadeOut, 3000);
setTimeout(displayNoneFemale, 4000);

/**--------------------------------------headline 1------------------------------- */

function slideLeft(){
    headOne.classList.add("slide-left");
    headOne.classList.remove("slide-out");
}

function slideRight(){
    headOne.classList.add("slide-out");
    headOne.classList.remove("slide-left");
}

setTimeout(slideLeft, 2000);

setTimeout(slideRight, 4000);


function slideRights(){
    headTwo.classList.add("slide-right");
    headTwo.classList.remove("slide-out-right");
}


setTimeout(slideRights, 3800);


////////////////////////////////////////

function fdin(){
    subheads.classList.add("fd-in");
    subheads.classList.remove("fd-out");
}


setTimeout(fdin, 4500);


////////////////////////////////////////

function fdins(){
    learn_more.classList.add("fd-ins");
    learn_more.classList.remove("fd-outs");
}


setTimeout(fdins, 5000);


/////////////////////////////////

function logoSlideLeft(){
    logo.classList.add("logoSlide-left");
    logo.classList.remove("logoSlide-out");
}

function logoSlideRight(){
    logo.classList.add("logoSlide-out");
    logo.classList.remove("logoSlide-left");
}

setTimeout(logoSlideLeft, 6000);



///////////////////////////////////////

function replaySlideLeft(){
    replay.classList.add("replayFade-in");
    replay.classList.remove("replayFade-out");
}


setTimeout(replaySlideLeft, 7000);


replay.addEventListener('click', () => {
    location.reload();
})