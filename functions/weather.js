'use strict'

const config = require('dotenv').config()
const fetch = require('node-fetch')

function tempToWords(celsius) {
  if (celsius < 5) { return 'rather cold' }
  if (celsius >= 5 && celsius < 20) { return 'cool' }
  if (celsius >= 20 && celsius < 27) { return 'nice' }
  if (celsius >= 27) { return 'rather hot' }
  return 'unknown'
}

function handler(event, context, callback) {
  const weatherInWords = '%C'
  const weatherIcon = '%c'
  const temperature = '%t'
  const metricUnits = 'm'
  // wttr.in has trouble fulfilling the request if output looks like an object,
  // so using an array instead.
  const outputFormat = `["${weatherInWords}", "${weatherIcon}", "${temperature}"]`
  const url = `https://wttr.in/${config.WEATHER_LOCATION}?${metricUnits}&format=${outputFormat}`

  fetch(url)
    .then(response => response.json())
    .then(json => {
      const HTTP_OK = 200
      const weather = {
        words: json[0].toLowerCase(),
        icon: json[1],
      }
      const temp = {
        celsius: parseInt(json[2]),
        fahrenheit: `${Math.round(parseInt(json[2]) * (9/5) + 32)}`,
        words: tempToWords(parseInt(json[2])),
      }

      return callback(
        null,
        {
          statusCode: HTTP_OK,
          body: JSON.stringify({ temp, weather }),
        },
      )
    })
}

module.exports = { handler }
