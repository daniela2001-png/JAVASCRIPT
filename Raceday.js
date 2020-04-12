let raceNumber = Math.floor(Math.random() * 1000);
let corredor = false;
let age_corredor = 18;

if (age_corredor > 18 && corredor)
    raceNumber += 1000;

if (age_corredor > 18 && corredor)
{
    console.log(`your race will start at 9:30 am, your raceNumber is :
		${raceNumber}`);
}
else if (age_corredor > 18 && !corredor)
{
    console.log(`your race will start at 11:00 am, your raceNumber is :
		${raceNumber}`);
}
else if (age_corredor < 18)
{
    console.log(`yor race will start at 12:30 pm, your raceNumber is :
		${raceNumber}`);
}
else
    console.log("Please, go to the registration desk thanks");
