const fs = require('fs');
const request = require('request');
const {promisify} = require('util');

const promisifiedRequest = promisify(request);

const getWeekWeather = async (location, countryCode) => {
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/forecast?q=${location},${countryCode}&units=metric&APPID=${process.env.APPID}`,
        json: true
    })
    fs.writeFileSync('FiveDayWeather.json', JSON.stringify(data.body, null, 2))

    let content = fs.readFileSync('FiveDayWeather.json')
    content = JSON.parse(content)

    return data.body
}

module.exports = getWeekWeather;