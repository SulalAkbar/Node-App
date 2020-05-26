const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/816bfe1d9a80ac4f3ca588a3d563156c/' + latitude + ',' + longitude

    console.log(latitude,longitude) /////

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('(forecast) Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('(forecast) Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
