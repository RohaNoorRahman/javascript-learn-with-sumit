//string methods

let text = "Apple, Banana, Kiwi";
console.log(text.length)

let slice = text.slice(7,13);
console.log(slice)

let mainas = text.slice(-12,-6);
console.log(mainas)

let substring = text.substring(7);
console.log(substring)

let substr = text.substr(15,4);
console.log(substr)

let substr2 = text.substr(-12);
console.log(substr2);

let replace = text.replace('Kiwi', 'guava');
console.log(replace)

let text2 = 'i love you Noor , i love you noor, I love you Noor';

text2 = text2.replaceAll('i','Rohan');
text2 = text2.replaceAll('you','');
text2 = text2.replaceAll('I','Rohan');
text2 = text2.replaceAll('Noor','Raziya');
text2 = text2.replaceAll('noor','Raziya');
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
let padded = text4.padStart(4,"0");
console.log(padded)


let mummer = 9;
let text5 = mummer.toString();
let padded2 = text5.padEnd(4,0);
console.log(padded2)

let char = text3.charAt(2);
console.log(char)

let chart =text3.charCodeAt(3);
console.log(chart)

let split = text3.split(' ');
console.log(split);


//javascript search methods

let text6 = 'The rain in SPAIN stays mainly in the plain'

let indexOF =text6.indexOf('ain');
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

text6.startsWith('rain',4);
console.log(start);

let end =text6.endsWith('plain');
console.log(end)