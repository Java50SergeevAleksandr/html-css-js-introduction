import { checkPlayingTime } from "./service/checkTime.js";
import { DataForm } from "./ui/input-data-form.js";
import { VideoPlayer } from "./ui/video-player.js";
import { sleep } from "./utils/sleep.js";

const inputForm = new DataForm("form-section");
const videoPlayer = new VideoPlayer("video-section");

async function handleVideo(videoData) {
    const message = checkPlayingTime(videoData.playingTime);
    if(!message) {
        videoPlayer.setUrl(videoData.selectedVideo);
        videoPlayer.start();
        await sleep(videoData.playingTime * 1000);
        videoPlayer.stop();
    }
    return message;
}

inputForm.addHandler(handleVideo);