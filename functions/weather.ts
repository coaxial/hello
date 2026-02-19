"use strict";

const Sentry = require("./_shared/sentry");

const nodeFetch = require("node-fetch");

interface Temp {
  celsius: number;
  fahrenheit: number;
  words: string;
}

interface Weather {
  words: string;
  icon: string;
}

interface ResponseBody {
  temp: Temp;
  weather: Weather;
}

function tempToWords(celsius: number): string {
  if (celsius < 5) {
    return "rather cold";
  }
  if (celsius >= 5 && celsius < 20) {
    return "cool";
  }
  if (celsius >= 20 && celsius < 27) {
    return "nice";
  }
  if (celsius >= 27) {
    return "rather hot";
  }
  return "unknown";
}

function handler(
  event: any,
  context: any,
  callback: (error: any, response: any) => void,
): void {
  const weatherInWords: string = "%C";
  const weatherIcon: string = "%c";
  const temperature: string = "%t";
  const metricUnits: string = "m";
  // wttr.in has trouble fulfilling the request if output looks like an object,
  // so using an array instead.
  const outputFormat: string = `["${weatherInWords}", "${weatherIcon}", "${temperature}"]`;
  const url: string = `https://wttr.in/${process.env.WEATHER_LOCATION}?${metricUnits}&format=${outputFormat}`;

  nodeFetch(url)
    .then((response: any): Promise<any> => response.json())
    .then((json: any): void => {
      const HTTP_OK: number = 200;
      const weather: Weather = {
        words: json[0].toLowerCase(),
        icon: json[1],
      };
      const temp: Temp = {
        celsius: parseInt(json[2]),
        fahrenheit: Math.round(parseInt(json[2]) * (9 / 5) + 32),
        words: tempToWords(parseInt(json[2])),
      };

      return callback(null, {
        statusCode: HTTP_OK,
        body: JSON.stringify({ temp, weather } as ResponseBody),
      });
    })
    .catch((error: any): void => {
      Sentry.captureException(error);

      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error }),
      });
    });
}

module.exports = { handler };
