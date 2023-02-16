import { videoConfig } from "../config/video_config.js";

export class DataForm {
    #videosElement;
    #formElement;
    #inputElements;
    constructor(parrentId) {        
        const parentFormElement = document.getElementById(parrentId);
        if (!parentFormElement) {
            throw `wrong perrent ID ${parrentId}`;
        }
        parentFormElement.innerHTML = `
        <form id="input-form" class="form-class">
        <input required name="playingTime" type="number" min="${videoConfig.minTime}" max="${videoConfig.maxTime}" placeholder="enter playing time in seconds" class="form-inpit">
        <label for="selected-video">Choose video:</label>
        <select name="selectedVideo" id="selected-video">           
            <option></option>
        </select>
        <div class="form-buttons">
            <button type="submit">Submit</button>
        </div>        
    </form>
        `
        this.#formElement = document.getElementById("input-form");
        this.#videosElement = document.getElementById("selected-video");
        this.#inputElements = document.querySelectorAll("#input-form [name]")
        this.setVideos();
    }
    setVideos(){
        this.#videosElement.innerHTML = videoConfig.videoLinks.map((value, id) => `<option value="${value}">Video ${id + 1}</option>`);
    }
    addHandler(handlerFunc){
        this.#formElement.addEventListener("submit", async (event) => {
            event.preventDefault();
            const videoData = Array.from(this.#inputElements)
            .reduce((res, val) => {
                res[val.name] = val.value;
                return res;
            }, {});
            const message = await handlerFunc(videoData);
            if(message) {
                alert(message);
            }
        } )
    }
}
