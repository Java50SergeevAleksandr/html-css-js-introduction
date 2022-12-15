const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector("main");
const hideButton = document.getElementById("hide-button")
const HIDDEN = "hidden";

function showDetals() {
    mainElement.classList.remove(HIDDEN);
}
function hideDetals() {
    mainElement.classList.add(HIDDEN);
}
function setDetails (anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
    const dataTitle = anchor.getAttribute("data-details-title");
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = dataTitle;
    showDetals();
}

for (let i = 0; i < thumbnailsAnchors.length; i++) {
    thumbnailsAnchors[i].addEventListener("click", function() {
        setDetails(thumbnailsAnchors[i]);
    } )
}

hideButton.addEventListener("click", hideDetals);

