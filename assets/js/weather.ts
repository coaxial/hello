interface WeatherData {
  weather?: {
    words: string;
    icon: string;
  };
  temp?: {
    fahrenheit: number;
    celsius: number;
    words: string;
  };
}

const request: Request = new Request('/.netlify/functions/weather')

fetch(request)
  .then((response: Response): Promise<WeatherData> => response.json())
  .then((json: WeatherData): void => {
    if(json.weather) {
      const weatherEl: HTMLElement | null = document.querySelector('#weather')
      const icon: string = `<abbr title="${json.weather.words}">${json.weather.icon}</abbr>`
      const temp: string = `<abbr title="${json.temp?.fahrenheit}℉, ${json.temp?.words}">${json.temp?.celsius}℃</abbr>`

      if (weatherEl) weatherEl.innerHTML = ` (${icon}, ${temp})`
    }
  })
  // swallow error intentionally, just don't display the weather if call errors
  .catch((): void => {})
