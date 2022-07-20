const color = 'blue';
switch(color) {
    case 'red': 
        console.log('Color is red.');
        break;
    case 'green':
        console.log('Color is green.');
        break;
    case 'blue':
        console.log('Color is blue.');
        break;
    default:
        console.log('Color is not red, blue or green.');
}

const score = 80;
switch (true) {
    case score >= 90 && score <= 100:
        console.log('excellent');
        break;
    case score >= 70 && score < 90:
        console.log('Very good');
        break;
    case score >= 50 && score < 70:
        console.log(`Average`);
        break;
    case score > 30 && score <= 50:
        console.log('Fair');
        break;
   case score <= 30:
        console.log('Poor');
        break;
    default:
        console.log('You did not take the test.')
}