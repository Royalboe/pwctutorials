// for (let i = 12; i < 20; i++) {
//     console.log(`Number is ${i}.`);
// }

// let i = 12;
// while (i < 20) {
//     console.log(`Number is ${i}.`);
//     i++;
// }

// const x = 20;
// if (x == 20) {
//     console.log(`x is 20`);
// } else if(x == 10) {
//     console.log(`x is 10.`);
// } else {
//     console.log(`x is not 10.`);
// }

let score = 40

if (score >= 90) {
    console.log('excellent')
} else if (score >= 70 && score < 90){
    console.log('Very good');
} else if(score >= 50 && score < 70) {
    console.log(`Average`);
} else if (score > 30 && score <= 50){
    console.log('Fair');
}else if (score <= 30) {
    console.log('Poor');
} else {
    console.log('You did not take the test.')
}