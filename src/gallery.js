const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails-anchor");

function setDetails (anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
    const dataTitle = anchor.getAttribute("data-details-title");
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = dataTitle; 
}

for (let i = 0; i < thumbnailsAnchors.length; i++) {
    thumbnailsAnchors[i].addEventListener("click",function() {
        setDetails(thumbnailsAnchors[i]);
    } )
}