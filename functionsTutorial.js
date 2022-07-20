// function addNum(a,b) {
//     return a + b;
// }

// let addNumArr = (a, b) => {
//     return a + b;
// }

// let square = (n) => { 
//     return n * n;
// }

// console.log(square(7));

// function sqr(n) {
//     return n * n;
// }

// function jumpByN(n) {
//     for (let i = 2; i <= 20; i += n) {
//         console.log(i);
//     }
// }

// jumpByN(2);
// jumpByN(3);

// let someWord = "Adamu";
// console.log(someWord.split(""));

// let someArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// console.log(someArray.reverse());

// function convertStringToArray(a) {
//     return a.split("").reverse().join();
// }

// console.log(convertStringToArray(someWord));

// function isPalindrome(a) {
//     return a.split("").reverse().join("") === a;
// }
// console.log(isPalindrome("Hannah"));

// function intToString(a) {
//     return a + ""
// }

// console.log(typeof intToString(10));

// let numString = "15";
// console.log(typeof parseInt(numString));
// console.log(parseInt("the"));


function isNumPalidrome(a) {
    return a.toString() === a.toString().split("").reverse().join("");
}

function isNumPalidromeTwo(a) {
    return isPalidrome(a.toString());
}
console.log(isNumPalidrome(11));
console.log(isNumPalidrome(12));