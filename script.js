// Assigns an array of values between 1 and 10
const number = [ ...Array(10).keys() ].map(i => i+1);

const color = ['blue','red','green','yellow','orange','purple','pink'];
const animal = ['bat', 'bear','beetle','bull','deer','elephant','frog','goldfish','horse','lizard','pig','rabbit'];

// Returns random value from entered array
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];


const messageGenerator = () => {
  console.log(
    `Greetings!\nYour lucky number is ${number}.\nYour lucky color is ${getRandom(
      color
    )}.\nYour lucky animal is a ${getRandom(animal)}.` +
      `\nHope you have some good luck!`
  );
};

messageGenerator();