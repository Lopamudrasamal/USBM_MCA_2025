//Taking input by user for Week
//question-1
 const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number for the day (0-6): ', (input) => {
  const day = parseInt(input);

  if (isNaN(day) || day < 0 || day > 6) {
    console.log('Invalid input. Please enter a number between 0 and 6.');
  } else {
    switch (day) {
      case 0:
        console.log('Today is Sunday');
        break;
      case 1:
        console.log('Today is Monday');
        break;
      case 2:
        console.log('Today is Tuesday');
        break;
      case 3:
        console.log('Today is Wednesday');
        break;
      case 4:
        console.log('Today is Thursday');
        break;
      case 5:
        console.log('Today is Friday');
        break;
      case 6:
        console.log('Today is Saturday');
        break;
      default:
        console.log('Invalid : try again');
    }
  }

  rl.close();
});
