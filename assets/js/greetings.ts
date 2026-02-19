interface Greeting {
  language: string;
  phrase: string;
}

const greetings: Record<string, Greeting[]> = {
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
    },
    {
      language: 'Swiss German',
      phrase: 'Guete Morge!'
    },
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
      phrase: 'Bon après-midi!'
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
    },
    {
      language: 'Swiss German',
      phrase: 'Guete Nomitag!'
    },

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
    },
    {
      language: 'Swiss German',
      phrase: 'Guete Obig!'
    },
  ]
};

function getTimePeriod(): string {
  const hour: number = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 17) {
    return 'afternoon';
  } else {
    return 'evening';
  }
}

function randomGreeting(greetings: Greeting[]): Greeting {
  const randomIndex: number = Math.floor(Math.random() * greetings.length);

  return greetings[randomIndex];
};

const greetingPhraseEl: HTMLElement | null = document.querySelector('#greeting__phrase');
const greetingLangEl: HTMLElement | null = document.querySelector('#greeting__language');
const greeting: Greeting = randomGreeting(greetings[getTimePeriod()]);

if (greetingPhraseEl) greetingPhraseEl.innerHTML = greeting.phrase;
if (greetingLangEl) greetingLangEl.innerHTML = "(That's “good " + getTimePeriod() + "” in " + greeting.language +")";
