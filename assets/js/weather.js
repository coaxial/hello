'use strict'

const request = new Request('/.netlify/functions/weather')

fetch(request)
  .then(response => response.json())
  .then(json => {
    if(json.weather) {
      const weatherEl = document.querySelector('#weather')
      const icon = `<abbr title="${json.weather.words}">${json.weather.icon}</abbr>`
      const temp = `<abbr title="${json.temp.fahrenheit}℉, ${json.temp.words}">${json.temp.celsius}℃</abbr>`

      weatherEl.innerHTML = ` (${icon}, ${temp})`
    }
  })
  // swallow error intentionally, just don't display the weather if call errors
  .catch(() => {})
