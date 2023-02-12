export class VideoPlayer {
    #videoElement;
    constructor(parentId) {
        const parentEormElement = document.getElementById(parentId);
        if(!parentEormElement) {
            throw `wrong parent ID ${parentId}`;
        }
        parentEormElement.innerHTML = `
        <video id="video-player" scr="" width="420"></video>
        `

        this.#videoElement = document.getElementById("video-player");
    }
    start(){
        this.#videoElement.play();
    }
    stop(){
        this.#videoElement.pause();
    }
    setUrl(url){
        this.#videoElement.scr = url;
    }
}