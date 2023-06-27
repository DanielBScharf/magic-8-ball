const answers = [
  'It is certain',
  'It is uncertain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it, maybe',
  'Kinda likely',
  'Outlook ok',
  '20!',
  'Signs point to yes',
  'Signs point to maybe',
  'Reply hazy, try again',
  'Ask again later',
  "I could tell you, but I won't",
  'Better not tell you now',
  'Cannot predict now',
  'AI tired ask again later',
  "Don't count on it",
  'You want what? HAHAHAHA',
  'My circuits say no',
  'Outlook not so good of a platform',
  'Very doubtful',
  'Interesting question',
  'How should I know?',
  'What do you think?',
  'Sure ... whatever',
  'YES! Erm actually... no',
  'Why are you asking me?',
  'How should I know?',
  " "
]

const newQuestion = document.querySelector('#question');
const question = document.getElementById('asked');
const answer = document.querySelector('.answer');

newQuestion.addEventListener('submit', function(e){
  e.preventDefault();
  const answ = Math.floor(Math.random() * answers.length);
  console.log(answ);
  console.log(answers[answ]);
  answer.innerText = answers[answ];
  question.value = "";
})
