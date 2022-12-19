const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsContainer = document.querySelector(".details-container");
const detailsFrame = document.querySelector(".details-frame");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector("main");
const hideButton = document.getElementById("hide-button");
const myAudio = document.getElementById("audio");
const HIDDEN = "hidden";
const IS_POINT = "is-point";
let soundVolume = 0.5;


function showDetals() {
    mainElement.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function () {
        detailsContainer.classList.remove(IS_POINT)
    }, 0);
}

function hideDetals() {
    mainElement.classList.add(HIDDEN);
}

function playAudio() {
    myAudio.volume = soundVolume;
    myAudio.play();
}

function pauseAudio() {
    myAudio.pause();
}

function playTrack() {
    playAudio();
    setTimeout(pauseAudio, 5000);
}

function muteVOlume() {
    myAudio.pause();
    soundVolume = 0;
}

function setHalfVolume() {
    soundVolume = 0.4;
}

function setFullVolume() {
    soundVolume = 0.8;
}

function setDetails(anchor) {
    // const dataImage = anchor.getAttribute("data-details-image");
    const dataImage = anchor.dataset.detailsImage;
    const dataTitle = anchor.getAttribute("data-details-title");
    const dataAudio = anchor.dataset.detailsAudio;
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = dataTitle;
    myAudio.src = dataAudio;
    showDetals();
    playTrack();
}

for (let i = 0; i < thumbnailsAnchors.length; i++) {
    thumbnailsAnchors[i].addEventListener("click", function () {
        setDetails(thumbnailsAnchors[i]);
    })
}

hideButton.addEventListener("click", hideDetals);

