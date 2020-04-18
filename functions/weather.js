'use strict';

const config = require('dotenv').config()

export function handler(event, context, callback) {
  http.get(
    `https://wttr.in/${config.WEATHER_LOCATION}?format=%c`,
    response => {
      const HTTP_OK = 200
      const HTTP_ERROR = 500
      const { statusCode } = response
      
      if(statusCode !== HTTP_OK) {
        return callback(
          null,
          {
            statusCode: HTTP_ERROR,
            body: {
              message: 'Weather API error.',
            },
          },
        )
      }

      const rawData = ''
      response.setEncoding('utf-8')
      response.on('data', data => rawData += data)
      response.on('end', () => {
        return callback(
          null,
          statusCode: HTTP_OK,
          body: {
            weatherIcon: response.body,
          },
        )
      })
    },
  ).on('error', () => {
    return callback(
      null,
      {
        statusCode: HTTP_ERROR,
        body: {
          message: 'Weather API error.',
        },
      },
    )
  })
}
