const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic3VsYWwiLCJhIjoiY2s3cHNxNDdsMGFrbzNkcnNwYmVrdnZqOSJ9.-y8-X_vfnUwKiFQVkV4ZqA'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('(Geocode) Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('(Geocode) Unable to find location. Try another search.', undefined)
        } else {
            //console.log(body.features)
            console.log(body.features[0].center[1],body.features[0].center[0])
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode