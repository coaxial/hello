'use strict'

const config = require('dotenv').config()
const http = require('http')

function handler(event, context, callback) {
  const weatherInWords = '%C'
  const weatherIcon = '%c'
  const temperature = '%t'
  const outputFormat = `["${weatherInWords}", "${weatherIcon}", "${temperature}"]`
  http.get(
    `http://wttr.in/${config.WEATHER_LOCATION}?format=${outputFormat}`,
    response => {
      const HTTP_OK = 200
      const HTTP_ERROR = 500
      const { statusCode } = response
      
      if(statusCode !== HTTP_OK) {
        return callback(
          null,
          {
            statusCode: HTTP_ERROR,
            body: JSON.stringify({
              message: 'Weather API error.',
            }),
          },
        )
      }

      let rawData = ''
      response.setEncoding('utf-8')
      response.on('data', data => rawData += data)
      response.on('end', () => {
        const json = JSON.parse(rawData)
        const weather = {
          words: json[0].toLowerCase(),
          icon: json[1],
          temp: json[2],
        }

        return callback(
          null,
          {
            statusCode: HTTP_OK,
            body: JSON.stringify({ weather }),
          },
        )
      })
    },
  ).on('error', () => {
    return callback(
      null,
      {
        statusCode: HTTP_ERROR,
        body: JSON.stringify({
          message: 'Weather API error.',
        }),
      },
    )
  })
}

module.exports = { handler }
