// The scope of `random` is onlu event2 with daniela// 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
const random = Math.floor(Math.random() * 3);  
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};
// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
          days = 50;
  } else if (event === 'Triathlon') {
          days = 100;
  } else if (event === 'Pentathlon') {
          days = 200;
  }

  return days;
};
  const name= 'Nala';
// The scope of `name` is too tight 
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};
const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
logEvent(name, event);
logTime(name, days);
// Try the functions for another competitor
const event2 = getRandEvent();
const day2 = getTrainingDays(event2);
const name2 = 'Daniela';
logEvent(name2, event2);
logTime(name2, day2);
