'use strict'

const request = new Request('/.netlify/functions/weather')

fetch(request)
  .then(response => response.json())
  .then(json => {
    console.debug(json)
    if(json.weather) {
      const weatherEl = document.querySelector('#weather')

      weatherEl.innerHTML = ` where it's ${json.weather.icon} (${json.weather.words}) and ${json.temp.value} (${json.temp.words}) at the moment`
    }
  })
  // swallow error intentionally, just don't display the weather if call errors
  .catch(() => {})
