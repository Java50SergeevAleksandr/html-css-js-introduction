import { weatherConfig } from "./config/weather_config.js";
import { DataProcessor } from "./service/dataProcessor.js";



const url = weatherConfig.url;
const cities = weatherConfig.cities;
const dataProcessor = new DataProcessor(url, cities);
async function displayTemperatures() {
    const data = await dataProcessor.getTemperatureData("Haifa", "2023-02-14", "2023-02-15", "10", "12");
    console.log(data);
}
displayTemperatures();