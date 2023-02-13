export class DataProcessor {
    #url;
    #cities;
    constructor(url, cities) {
        this.#url = url;
        this.#cities = cities;
    }
    async getData(latitude, longitude) {
        const responseFromServer =
            await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
        return responseFromServer.json();


    }
    async getTemperatureData(city, startDate, endDate, hourFrom, hourTo) {
        const responseFromServer =
            await fetch(`${this.#url}&latitude=${this.#cities[city].latitude}&longitude=${this.#cities[city].longitude}&start_date=${startDate}&end_date=${endDate}`);
        const data = await responseFromServer.json();
        const res = [];
        const lengthHours = Number(hourTo) - Number(hourFrom) + 1 + (24 * (Number(endDate.substr(-2)) - Number(startDate.substr(-2))));
        for (let i = 0; i < lengthHours; i++) {
            res.push({
                date: data.hourly.time[i + Number(hourFrom)].split("T")[0],
                hour: data.hourly.time[i + Number(hourFrom)].split("T")[1],
                temperature: data.hourly.temperature_2m[i + Number(hourFrom)]
            })
        }

        return res;
    }
}