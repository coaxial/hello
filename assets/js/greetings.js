'use strict';

const greetings = {
  morning: [
    {
      language: 'Arabic',
      phrase: 'صباح الخير'
    },
    {
      language: 'Chinese',
      phrase: '早上好'
    },
    {
      language: 'French',
      phrase: 'Bonjour!'
    },
    {
      language: 'German',
      phrase: 'Guten Morgen!'
    },
    {
      language: 'Hindi',
      phrase: 'शुभ प्रभात',
    },
    {
      language: 'Japanese',
      phrase: 'おはよう'
    },
    {
      language: 'Malay',
      phrase: 'Selamat Pagi!'
    },
    {
      language: 'Portugese',
      phrase: 'Bom Dia!'
    },
    {
      language: 'Russian',
      phrase: 'Доброе утро!'
    },
    {
      language: 'Spanish',
      phrase: 'Buenos días!'
    }
  ],
  afternoon: [
    { language: 'Arabic',
      phrase: 'طاب مسائك'
    },
    {
      language: 'Chinese',
      phrase: '下午好'
    },
    {
      language: 'French',
      phrase: 'Bonne après-midi!'
    },
    {
      language: 'German',
      phrase: 'Guten Nachmittag!'
    },
    {
      language: 'Hindi',
      phrase: 'नमस्कार',
    },
    {
      language: 'Japanese',
      phrase: 'こんにちは'
    },
    {
      language: 'Malay',
      phrase: 'Selamat tengah hari!'
    },
    {
      language: 'Portugese',
      phrase: 'Boa tarde!'
    },
    {
      language: 'Russian',
      phrase: 'Добрый день!'
    },
    {
      language: 'Spanish',
      phrase: 'Buenas tardes!'
    }
  ],
  evening: [
    { language: 'Arabic',
      phrase: 'مساء الخير'
    },
    {
      language: 'Chinese',
      phrase: '晚上好'
    },
    {
      language: 'French',
      phrase: 'Bonsoir!'
    },
    {
      language: 'German',
      phrase: 'Guten Abend!'
    },
    {
      language: 'Hindi',
      phrase: 'शुभ संध्या',
    },
    {
      language: 'Japanese',
      phrase: 'こんばんは'
    },
    {
      language: 'Malay',
      phrase: 'Selamat petang!'
    },
    {
      language: 'Portugese',
      phrase: 'Boa noite!'
    },
    {
      language: 'Russian',
      phrase: 'Добрый вечер!'
    },
    {
      language: 'Spanish',
      phrase: 'Buenas noches!'
    }
  ]
};

function getTimePeriod() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 17) {
    return 'afternoon';
  } else {
    return 'evening';
  }
}

function randomGreeting(greetings) {
  const min = 0;
  const max = greetings.length - 1;
  const randomIndex = Math.floor(Math.random() * (max - min));

  return greetings[randomIndex];
};

const greetingPhraseEl = document.querySelector('#greeting__phrase');
const greetingLangEl = document.querySelector('#greeting__language');
const greeting = randomGreeting(greetings[getTimePeriod()]);

greetingPhraseEl.innerHTML = `${greeting.phrase}`;
greetingLangEl.innerHTML = `(That's “good ${getTimePeriod()}” in ${greeting.language})`;
