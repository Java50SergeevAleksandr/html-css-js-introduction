export class VideoPlayer {
    #videoElement;
    constructor(parentId) {
        const parentEormElement = document.getElementById(parentId);
        if(!parentEormElement) {
            throw `wrong parent ID ${parentId}`;
        }
        parentEormElement.innerHTML = `
        <video id="video-player" src="" width="420" preload="none"></video>
        `

        this.#videoElement = document.getElementById("video-player");
    }
    start() {        
        this.#videoElement.play();
    }
    stop() {
        this.#videoElement.pause();
    }
    setUrl(url) {
        this.#videoElement.src = url;        
    }
}