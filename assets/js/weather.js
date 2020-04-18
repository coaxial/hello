'use strict'

const request = new Request('/.netlify/functions/weather')

fetch(request)
  .then(response => {
    const HTTP_OK = 200

    if(response === HTTP_OK) {
      const weatherEl = document.querySelector('#weather')

      weatherEl.innerHTML = ` (presently ${response.weatherIcon}) `
    }
  })
  // swallow error intentionally, just don't display the weather if call errors
  .catch(() => {})
