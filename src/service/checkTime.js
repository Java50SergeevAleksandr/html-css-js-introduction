import { videoConfig } from "../config/video_config.js";

export function checkPlayingTime(time) {
    let res = "";
    if(videoConfig.minTime > time || time > videoConfig.maxTime) {
        res = `time must be in range [${videoConfig.minTime} - ${videoConfig.maxTime} seconds]`
    }
    return res;
}