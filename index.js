//string methods

let text = "Apple, Banana, Kiwi";
console.log(text.length)

let slice = text.slice(7, 13);
console.log(slice)

let mainas = text.slice(-12, -6);
console.log(mainas)

let substring = text.substring(7);
console.log(substring)

let substr = text.substr(15, 4);
console.log(substr)

let substr2 = text.substr(-12);
console.log(substr2);

let replace = text.replace('Kiwi', 'guava');
console.log(replace)

let text2 = 'i love you Noor , i love you noor, I love you Noor';

text2 = text2.replaceAll('i', 'Rohan');
text2 = text2.replaceAll('you', '');
text2 = text2.replaceAll('I', 'Rohan');
text2 = text2.replaceAll('Noor', 'Raziya');
text2 = text2.replaceAll('noor', 'Raziya');
console.log(text2)

let upper = text2.toUpperCase();
console.log(upper)

let lower = text2.toLowerCase();
console.log(lower);

let text3 = '     rohan how are you    ';
text3 = text3.trim();
console.log(text3);
text3 = text3.trimStart();
console.log(text3);
text3 = text3.trimEnd();
console.log(text3)

let numb = 5;
let text4 = numb.toString();
let padded = text4.padStart(4, "0");
console.log(padded)


let mummer = 9;
let text5 = mummer.toString();
let padded2 = text5.padEnd(4, 0);
console.log(padded2)

let char = text3.charAt(2);
console.log(char)

let chart = text3.charCodeAt(3);
console.log(chart)

let split = text3.split(' ');
console.log(split);


//javascript search methods

let text6 = 'The rain in SPAIN stays mainly in the plain'

let indexOF = text6.indexOf('ain');
console.log(indexOF);

let lastIndex = text6.lastIndexOf('ain');
console.log(lastIndex);

let search = text6.search('ain');
console.log(search);

let match = text6.match(/ain/g);

console.log(match);

let matchAll = text6.matchAll('ain');
console.log(matchAll);

let include = text6.includes('rain');
console.log(include);

let start = text6.startsWith('The');
console.log(start);

text6.startsWith('rain', 4);
console.log(start);

let end = text6.endsWith('plain');
console.log(end)


//js string template

let country = `Bangladesh`;
let a = 19;
let b = 1;
let stringliterel = `My country name is ${country} , and here we live in ${a - b} corer people`;
console.log(stringliterel);


let literel = `i love him
                her name is Noor
                i know he don't like me 
                but still i love him and i will be love him`;
console.log(literel);

let header = "Templates literals";
let html = `<h1>${header}</h1>`;
document.write(html);

// numbers

let x = '20';
let y = '10';
console.log(x * y);

console.log(isNaN(x))

let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}

console.log(myNumber)

console.log(typeof Infinity)

console.log(0xff);

let convert = 32;
console.log(convert.toString(2));//binary base 2
console.log(convert.toString(10));// decimal base 10
console.log(convert.toString(16));// hexadecimal base 16
console.log(convert.toString(8));// octal base 8

//js bigint
x = 9999999999999999;
y = 9999999999999999n;

console.log(x);
console.log(y);
y = BigInt(1234567890123456789012345);
console.log(y);
console.log(typeof y);
x = Number.MAX_SAFE_INTEGER;
y = Number.MIN_SAFE_INTEGER;
console.log(x);
console.log(y);

let isinteger = 500000000000000000000000;
console.log(Number.isInteger(isinteger));
console.log(Number.isSafeInteger(isinteger));

// js number methods

let numberMethods = 50;
console.log(typeof numberMethods);
let numberToString = numberMethods.toString();
console.log(typeof numberToString);

//toExponential()

let exponential = 9.656;
console.log(exponential.toExponential(2));
console.log(exponential.toExponential(5));
console.log(exponential.toExponential(7));

// toFixed

let toFixed = 9.656;
let toCheck = toFixed.toFixed(7)
console.log(toCheck);


// toPrecision
let precision = 9.656;
let checkPrecision = precision.toPrecision(2);
console.log(checkPrecision);

let converNumber = Number("john");
console.log(converNumber);



// js Array

const car = ['BMW', 'Rols royce', 'Volka', 'Lamborginni'];
console.log(car);
car[0] = 'Nissan';
console.log(car)

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];


fruits.push('pineapple');
fruits.unshift('Guava');
fruits.splice(2,2,'Amra','lemon','jam','lichi','kathal');
fruits.pop();
fruits.shift();

console.log(Array.isArray(fruits));

let arrayToString = fruits.toString();
console.log(arrayToString);
let joinArrayValue = fruits.join(' - ');
console.log(joinArrayValue)



let textloop = "<ul>";
for (let i = 0; i < fruits.length; i++) {
    textloop += '<li>' + fruits[i] + "</li>";
}

textloop += "</ul>"

document.getElementById('demoTwo').innerHTML = textloop;

function checkArray() {
    let textArrayForeach = '<ul>';
    fruits.forEach(myFunction);

    function myFunction(value) {
        textArrayForeach += "<li>" + value + "</li>";
    }
    textArrayForeach += '</ul>';

    document.getElementById('demoThere').innerHTML = textArrayForeach;
}

//js array concat

const myBoys =['Emon','Abdullah','Manik','Harun','Riyad'];
const myGirs =['Raziya','Noor','Asia','Mariyam','Abha'];

const concatarray =myGirs.concat(myBoys);
console.log(concatarray);

console.log(concatarray.sort());
console.log(concatarray.reverse());