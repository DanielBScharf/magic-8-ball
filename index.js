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
  'Probably... maybe',
  "Oh...You'll find out",
  '...'
]

const newQuestion = document.querySelector('#askQuestion');
const question = document.getElementById('.asked');
const answer = document.querySelector('#answer');

function choose() {
 return answers[Math.floor(Math.random() * answers.length)];
};

answer.style.opacity = 0;

function go(event){
  answer.innerHTML = choose();
  event.preventDefault();
    answer.style.opacity = 0;
    setTimeout(() => {
      answer.style.opacity = 1;
      answer.classList.add('fade-in');
    }, 1000);
    answer.classList.remove('fade-in');
    document.querySelector('#question').reset();
};

newQuestion.addEventListener('click', go);
