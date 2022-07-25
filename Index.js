import readlineSync from 'readline-sync';
import chalk from 'chalk';
var uname=readlineSync.question(chalk.blue("Hi!, What's your name? "));
console.log(chalk.green('\nHi ')+chalk.blue(uname)+chalk.green(" let's see how well you know Vipul\n"));
var score=0;
console.log(chalk.magenta("Instructions\n"));
console.log(chalk.red('Quiz contains two types of questions.\n 1. Choose the correct Option \n 2. Entering the Answer \n For Choose the option type kindly answer the Option number. For entering the answer kindly make sure your 1st letter of answer should be capital.\n\n'));
var uname=readlineSync.question(chalk.blueBright("Press Enter to continue"));
console.log("\n");
function vipgame(question,answer){
  var user_answer=readlineSync.question(question);
  if(user_answer===answer){
    console.log(chalk.blueBright("\nYayyy! it's right\n"));
    score=score+1;
  }
  else{
    console.log(chalk.red("\nOh no!, it's wrong\n"));
  }
}

var questions=[
 {
    question_new: chalk.greenBright('1. what are the movies does Vipul like\n a. romcom \n b. horror \n c. thriller \n d. sci-fi \n'),
    answer: 'a',
  },
{
  question_new:chalk.yellowBright("2. what is Vipul's fav sport? "),
    answer:"Cricket",
},
  {
    question_new: chalk.greenBright("3. What is Vipul favorite dish? "),
      answer:"Biryani",
  },
{
  question_new:chalk.yellowBright( "4. Is Vipul currently working? "),
  answer:"Yes",
},
  {
    question_new: chalk.greenBright("5. Vipul's fav place? "),
    answer:"Home",
  }
]
var high_scores=[
  {
    name:"Vipul",
    score:5,
  },
  {
     name:"Akanksha",
    score:4,
  }
]
for(var i=0;i<questions.length;i++){
  vipgame(questions[i].question_new,questions[i].answer);
}
if(score>=3){
console.log(chalk.magentaBright("Yayyy! your score is : ")+chalk.greenBright(score)+chalk.magentaBright(" :)"));
}
else{
  console.log(chalk.magentaBright("your score is : ")+chalk.red(score)+chalk.magentaBright(" :("))
}
console.log("Check out the high scores");

  high_scores.map(score => console.log(score.name, " : ", score.score))