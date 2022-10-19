function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max - min + 1));
}

const min = 1;
var max = 2;
var points = 0;
const real = generateRandomInteger(min, max);
const name = prompt("Enter username:")

const guess_game = () => {
  const guess = prompt(`Guess between 1 and ${max}`);
  const reserve = new Promise(function (resolve, reject) {
    if(guess == real){
      const score = {
        points: points+=1
      };
      resolve(score);
    }
    else {
      reject(new Error(guess_game()));
    }
  })

  const game = async() => {
    try {
          const clear = await reserve;
          const ask = prompt("Continue to play? y or n");
          if (ask == "y") {
              max++;
              generateRandomInteger(min, max);
              guess_game();
          }
          else {
              console.log(`Thank you for playing ${name}. Your score is ${clear.points}`);
          }
      } catch (err) {
          console.log(err.message);
      }
  }
    game()
}

guess_game();

