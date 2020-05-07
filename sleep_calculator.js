//The program will determine the actual and ideal hours of sleep for each night of the last week.Finally, it will calculate, in hours, how far you are from your weekly sleep goal.//
const getSleepHours = day => {
switch(day){
  case 'Monday':
    return 8;
    break;
  case 'Thursday':
    return 7;
    break;
  case 'Wednesday':
    return 5;
    break;
  case 'Tuesday':
    return 8;
    break;
  case 'Friday':
    return 7;
    break;
  case 'Saturday':
    return 8;
    break;
  case 'Sunday':
    return 8;
    break;
    
    default:
    return "ERROR!"
}
};
// Test my function
console.log(getSleepHours('Monday'))
//Now I created a function that add the hours previous(getSleepHours)//
const getActualSleepHours = () => 8 + 8 + 8 + 8 +
7 + 7 + 5; 
//getSleepHours('Monday') +
//getSleepHours('Thursday') +
//getSleepHours('Wednesday') +
//getSleepHours('Sunday') +
//getSleepHours('Friday') +
//getSleepHours('Saturday') +
//getSleepHours('Tuesday');
// print the resul of add each (getSleepHours)
console.log(getActualSleepHours());
const getIdealSleepHours = (idealHours) => {
return (idealHours * 7);
};
console.log(getIdealSleepHours(8));
const calculateSleepDebt = () =>{
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours(8);
// conditions that show the hours that left or is over //
if (actualSleepHours === idealSleepHours)
    console.log("Perfect amount");
else if(actualSleepHours > idealSleepHours){
  console.log("you had " + (actualSleepHours - idealSleepHours) + " hours more that de sleep normal");
}
else if (actualSleepHours < idealSleepHours)
  console.log("you had " + (idealSleepHours - actualSleepHours) + " hours You need rest!");
};
calculateSleepDebt();
