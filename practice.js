let out = document.querySelector('.out');
console.log(out);

// for (let i = 0; i < 19; i++){
//     out.innerHTML += `${i}_`; 
//     }

// for (let i = 0; i < 39; i += 2){
// out.innerHTML += `${i}_<br>`; 
// }

// for (let i = 60; i > 39; i--){
//     out.innerHTML += `${i}*`; 
//     }

// for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 5; i++) {
//         out.innerHTML += `*`;
//     }
//     out.innerHTML += `_`;
// }

// for (let i = 1; i < 4; i++) {
//     out.innerHTML += `${i}<br>`;
//     for (let i = 0; i < 3; i++) {
//         out.innerHTML += `*_`;
//     }
//     out.innerHTML += `<br>`;
// }

// for (let i = 1; i < 5; i++) {
//     for (let i = 0; i < 3; i++) {
//     out.innerHTML += `*_`;
//     }
//     out.innerHTML += `<br>`;
// }

// for (let i = 1; i < 6; i++) {
//     for (let j = 6; j > i; j--) {
//     out.innerHTML += `* `;
//     }
//     out.innerHTML += `<br>`;
// }

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//     out.innerHTML += `${i}*${j} = ${j * i}<br>`;
//     }
//     out.innerHTML += `<br>`;
// }

// let i = 0;
// while ( i < 50 ) {
//     i++;
//     out.innerHTML += `${i}_`;
// }

// let i = 0;
// while ( i < 50 ) {
//     i += 2;
//     out.innerHTML += `${i}_`;
// }

let i = 50;
while ( i > 1 ) {
    i--;
    out.innerHTML += `${i} `;
}


// filter
const filterThis = [2, 4, 3, 6, 8, 9];

const filter = (arr, fn) => {
    const filteredArr = [];
    for (let elem of arr) {
        if (fn(elem)) filteredArr.push(elem);
    }
    return filteredArr;
};

console.log(filter(filterThis, (elem) => elem % 3 == 0));

// some
const someOfThis = ['Java', 'JavaScript', 'Python'];

const some = (arr, fn) => {
    for (let elem of arr) {
        if (fn(elem)) return true;
    }
    return false;
};

console.log(some(someOfThis, (elem) => elem === "JavaS"));


// map
// const mapMe = [1000, 800, 2400, 500];

// const map = (arr, fn) => {
//     const mappedArr = [];
//     for (let elem of arr) {
//         mappedArr.push(fn(elem));
//     }  
//     return mappedArr;
// };

// console.log(map(mapMe, (elem) => elem + 200));


==========================================CODEWARS==========================================

8 kyu Grasshopper - Array Mean

var findAverage = function (nums) {
 return nums.reduce((a, b) => a + b)/nums.length
}

8 kyu Welcome to the City

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  
}

5 kyu Extract the domain name from a URL

function domainName(url){
  url = url.replace("http://", '')
   url =  url.replace("https://", '')
    url =  url.replace("www.", '')
 return url.split('.')[0]
}

8 kyu Add Length

function addLength(str) {
let res = []
let word = str.split(' ')
let length = str.split(' ').map(e =>e.length)
for (let i = 0; i < word.length; i++)
  res.push(`${word[i]} ${length[i]}`)
  return res
}

7 kyu Testing 1-2-3

var number=function(array){
  return array.map((e, i)=>{
    return `${i+1}: ${e}`
    })
}

7 kyu Count the Characters

function countChar(string, char) {  
let str = string.toLowerCase() 
let res =[];
for ( let i = 0; i < str.length; i++){
  if (str[i] == char.toLowerCase() )
 res.push(i)
}
  return res.length
}

7 kyu Password validator

function password(str) {
if (str.length < 8) return false;
  if (!str.match(/[a-z]/)) return false;
  if (!str.match(/[A-Z]/)) return false;
  if (!str.match(/[0-9]/)) return false;

  return true;
}

8 kyu Exclamation marks series #1: Remove an exclamation mark from the end of string

function remove (string) {
  
  return string.endsWith('!') ? string.slice(0, -1) : string;
}

8 kyu You only need one - Beginner

function check(a, x) {
 return a.includes(x)
}

8 kyu Lario and Muigi Pipe Problem

function pipeFix(numbers){
  let arr = [];
  for ( i = numbers[0]; i <= numbers[numbers.length -1]; i++){
    arr.push(i)
  }
return arr
}

8 kyu Enumerable Magic #1 - True for All?

function all( arr, fun ){
  return arr.every(fun)
}

8 kyu Grasshopper - Debug sayHello

function sayHello(name) {
  return `Hello, ${name}`
}

8 kyu Enumerable Magic - Does My List Include This?

function include(arr, item){
 return arr.includes(item)
}

8 kyu Reverse List Order

function reverseList(list) {
return list.reverse()
}

8 kyu How many lightsabers do you own?

function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0
}

7 kyu Fix string case

function solve(s){
let up = 0;
let low = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase() ){
      up++
    } else {
      low++
    }
  }
  return up > low ? s.toUpperCase() : s.toLowerCase()
}

8 kyu Alan Partridge II - Apple Turnover

function apple(x){
return x * x > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

8 kyu Hex to Decimal

function hexToDec(hexString){
return parseInt(hexString, 16)
}

8 kyu A wolf in sheep's clothing

function warnTheSheep(queue) {
 let rev = queue.reverse()   
 if (rev[0] === "wolf"){
 return  "Pls go away and stop eating my sheep"
 } else {
   return `Oi! Sheep number ${rev.indexOf("wolf")}! You are about to be eaten by a wolf!`
 }    
}

8 kyu Total amount of points

function points(games) {
  let res = 0
  games.forEach((i) =>{
    if (i[0] > i[2]){
      res += 3
    }
    else if (i[0] < i[2]){
      res += 0
    } else {
      res += 1
    }
  })
  
  return res
}

8 kyu Find the position!

function position(letter){
return `Position of alphabet: ${letter.charCodeAt() -96}`
}

7 kyu Alternate capitalization

function capitalize(s){
  let resA = s.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase() : e ).join('');
  let resB = s.split('').map((e, i) => i % 2 !== 0 ? e.toUpperCase() : e).join('');
   
   return [resA, resB]                   
  };

8 kyu Grasshopper - Terminal game combat function

function combat(health, damage) {
  return  health - damage < 0 ? 0 : health - damage
}

6 kyu Count the smiley faces!


function countSmileys(arr) {
  let res = []
  for (let i =0; i < arr.length; i++){
    if (arr[i] == ':)' 
        || arr[i] == ':D' 
        || arr[i] == ';)' 
        || arr[i] == ':-)' 
        || arr[i] == ';D' 
        || arr[i] == ':-D' 
        || arr[i] == ';-D' 
        || arr[i] == ':~D' 
        || arr[i] == ':~)'
        || arr[i] == ';~D' 
        || arr[i] == ';~)' 
        || arr[i] == ';-)') {
      res.push(i)
    }
  }
return res.length
}

8 kyu N-th Power

function index(array, n){
 return  n >= array.length ? -1 : array[n] ** n
}

8 kyu No zeros for heros

function noBoringZeros(n) {
  n = String(n)
  while ( n.endsWith(0)){
   n = n.slice(0, -1)
  }
return +n
}

8 kyu Enumerable Magic #25 - Take the First N Elements

function take(arr, n) {
  return arr.slice(0, n)
}

8 kyu Hello, Name or World!

const hello = name => !name ? 'Hello, World!' : `Hello, ${name.toLowerCase()[0].toUpperCase() + name.toLowerCase().slice(1)}!`

8 kyu Bin to Decimal

function binToDec(bin){
return parseInt(bin, 2)
}

8 kyu Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
  return sperm === 'XY' ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}

7 kyu The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
}

7 kyu Count all the sheep on farm in the heights of New Zealand

function lostSheep(friday,saturday,total){
return total - friday.reduce((a,b)=>a+b, 0) - saturday.reduce((a,b)=>a+b, 0)
}

8 kyu Student's Final Grade

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {return 100;}
     else if (exam > 75 && projects > 4) {return 90;}
      else  if (exam > 50 && projects > 1) {return 75;}
          else {return 0;}
   }

   7 kyu Summing a number's digits

const sumDigits = (number) =>
  number >= 10 ?
  number.toString().split('').map(Number).reduce((a, b) => a + b, 0) :
  number.toString().slice(1).split('').map(Number).reduce((a, b) => a + b, 0)

8 kyu Drink about

function peopleWithAgeDrink(old) {
  return old >= 21 ? 'drink whisky' : old >= 18 ? "drink beer" : old >= 14 ? "drink coke" : "drink toddy" ;
};

8 kyu Vowel remover

function shortcut (string) {
  return string.replace(/[aeiou]/g, '');
}

7 kyu Sort Numbers

function solution(nums){
return nums == null ? [] : nums.sort((a, b) => a-b)
}

8 kyu Multiplication table for number

function multiTable(number) {
  let res = ``;
  for( let i = 1; i <= 10; i++){
    res += `${i} * ${number} = ${i * number}${ i < 10 ? '\n' : ''}`
  }
  return res
}

8 kyu The Wide-Mouthed frog!

const mouthSize = (animal) => animal.toLowerCase() === 'alligator' ? 'small' : 'wide' 

6 kyu Counting Duplicates

const duplicateCount=(text) => [...new Set(text.toLowerCase().split('').filter((e, i, arr) => arr.indexOf(e) != i))].length 

8 kyu Plural

function plural(n) {
  return n != 1
}

8 kyu Abbreviate a Two Word Name

function abbrevName(name){

let arr = name.split(' ')
let first = arr[0].toUpperCase()
let second = arr[1].toUpperCase()

return first[0] + '.' + second[0]
}

8 kyu Reversing Words in a String

function reverse(string){
  return string.split(' ').reverse().join(' ')
}

7 kyu Ones and Zeros

const binaryArrayToNumber = arr => {
 return parseInt(arr.join(''), 2)
};

8 kyu Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).filter((e, i, arr) => arr.indexOf(e) == i).sort((a, b) => a - b)
}

8 kyu Exclusive "or" (xor) Logical Operator

function xor(a, b) {
 return a!=b
}

7 kyu Form The Minimum

function minValue(values){
 return +values.filter((e ,i)=>values.indexOf(e) === i).sort().join('')
}

7 kyu Sum of a sequence

const sequenceSum = (begin, end, step) => {
 if(begin > end) {
   return 0
 }
  let count = 0
  for (let i = begin; i <= end; i+=step){
   count += i 
 }
  return count
};

6 kyu Find the unique number

function findUniq(arr) {
  return +arr.filter((el) => arr.indexOf(el) == arr.lastIndexOf(el))
}

8 kyu Name Shuffler

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}

8 kyu 5 without numbers !!

function unusualFive() {
  let arr = [[],[],[],[],[]]
  return arr.length
}

7 kyu Sort array by string length

const sortByLength = array => array.sort((a,b) => a.length - b.length)

8 kyu get ascii value of character

function getASCII(c){
 return c.charCodeAt()
}

8 kyu Convert boolean values to strings 'Yes' or 'No'.

const boolToWord = bool => bool ? "Yes" : "No"

7 kyu Check the exam

function checkExam(array1, array2) {
let res = 0 ;
  for(let i = 0; i < array1.length; i++){
    
  if (array2[i]  === array1[i]){
    res += 4
  }
  if(array2[i] !== array1[i] && array2[i] !== ""){
    res -= 1 
  }
    
  }
   return res < 0 ? 0 : res
}

7 kyu Simple Fun #176: Reverse Letter

function reverseLetter(str) {
return str.match(/[A-Z]/gi).reverse().join('')
}

8 kyu Basic Mathematical Operations

function basicOp(operation, value1, value2)
{
  switch(operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }

}

8 kyu Rock Paper Scissors!

const rps = (p1, p2) => {
 if(p1 == p2)  return  "Draw!";
  const rules = {scissors: 'paper', paper: 'rock', rock: 'scissors'};
  if (p1 === rules[p2]){
    return "Player 2 won!";
  } else {
    return "Player 1 won!";
  }
 
}

8 kyu Welcome!

function greet(language) {
  switch(language){
case 'english': return 'Welcome'; break;
case 'czech': return  'Vitejte'; break;
case 'danish': return  'Velkomst'; break;
case 'dutch': return  'Welkom'; break;
case 'estonian': return  'Tere tulemast'; break;
case 'finnish': return  'Tervetuloa'; break;
case 'flemish': return  'Welgekomen'; break;
case 'french': return  'Bienvenue'; break;
case 'german': return  'Willkommen'; break;
case 'irish': return  'Failte'; break;
case 'italian': return  'Benvenuto'; break;
case 'latvian': return  'Gaidits'; break;
case 'lithuanian': return  'Laukiamas'; break;
case 'polish': return  'Witamy'; break;
case 'spanish': return  'Bienvenido'; break;
case 'swedish': return  'Valkommen'; break;
case 'welsh': return  'Croeso'; break;
default: return 'Welcome';
   
  }
 }

8 kyu get character from ASCII Value

const getChar = c => String.fromCharCode(c)

8 kyu Super Duper Easy

const problem = x => x === +x ? x * 50 + 6  : "Error"

8 kyu Parse nice int from char problem

function getAge(inputString){
return +inputString[0]
}

8 kyu I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
  
if (nbPetals % 6 == 1) return 'I love you'
if (nbPetals % 6 == 2) return 'a little'
if (nbPetals % 6 == 3) return 'a lot'
if (nbPetals % 6 == 4) return 'passionately'
if (nbPetals % 6 == 5) return 'madly'
else return 'not at all'
}

8 kyu Filling an array (part 1)

function arr(N) {
 let arr = []; 
  for (let i = 0; i < N; i++){
    arr.push(i)
  }  
  return arr
} 

6 kyu Sort the odd

function sortArray(array) {
 
 let odd =  array.filter((a) => a%2 != 0 ).sort((a,b)=> a-b)
 return array.map((e) => e%2  ? odd.shift() : e)
 
 
}

7 kyu Two fighters, one winner.

function declareWinner(fighter1, fighter2, firstAttacker) {
  
  const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
  const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)

  return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker

}

function declareWinner(fighter1, fighter2, firstAttacker) {
  
  const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
  const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
  console.log(f1, f2)
  return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker

}

8 kyu All Star Code Challenge #18

function strCount(str, letter){  
    let count = 0
  for ( let i = 0; i <= str.length; i++){
  if ( str[i] === letter )
    count++    
 }
   return count
}

7 kyu Remove anchor from URL

const removeUrlAnchor = url => url.includes('#') ? url.slice(0, url.indexOf('#')) : url

7 kyu Find the next perfect square!

function findNextSquare(sq) {
 
  return Math.sqrt(sq) % 1 != 0 ? -1 : (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1) 
}

8 kyu What's the real floor?

const getRealFloor = n => n <= 0 ? n : n <= 13 ? n - 1 : n - 2

8 kyu Keep up the hoop

const hoopCount = (n) => n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"

8 kyu The Feast of Many Beasts

function feast(b, d) {


  return b[0] === d[0] && b[b.length-1] === d[d.length-1]
}

7 kyu Number of People in the Bus

var number = function(busStops){
return busStops.map(e => e.reduce((a, b) => a - b)).reduce((a, b) => a + b)
}

7 kyu You're a square!

var isSquare = function(n){
  return Math.sqrt(n) % 1 == 0 
}

7 kyu Anagram Detection

// write the function isAnagram
var isAnagram = function(test, original) {
  return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
  
};

7 kyu Find the capitals

var capitals = function (word) {
 let res = [];
  for (let i = 0; i < word.length; i++){
    if(word[i] == word[i].toUpperCase())
      res.push(i)
    }
     return res
  }
 

8 kyu Area or Perimeter

const areaOrPerimeter = function(l , w) {
 return l == w ? l * w : (l + w) * 2
};

8 kyu Training JS #8: Conditional statement--switch

function howManydays(month){
  var days;
  switch (month){
    case 2:
     days = 28
      break;
    case 4:
     days = 30
      break;
    case 6:
      days =30
      break;
      case 9:
      days = 30
      break;
      case 11:
      days = 30
      break;
   default: days= 31;
  }
return days;
}

8 kyu Powers of 2

function powersOfTwo(n){
 let arr =[];
  for (let i = 0; i <= n; i++){
   arr.push(2**i)
 }
  
  return arr
}

8 kyu Training JS #10: loop statement --for

function pickIt(arr){
  var odd=[],even=[];
 
  for (e of arr){
    if (e%2 ==1) {
  odd.push(e);}
    
     if (e%2 ===0) {
  even.push(e);}
  
  }
  return [odd,even];
}

8 kyu Grasshopper - Messi Goals

var laLigaGoals = 43 ;
var championsLeagueGoals = 10 ;
var copaDelReyGoals = 5;

var totalGoals =  laLigaGoals + championsLeagueGoals + copaDelReyGoals


8 kyu Grasshopper - Check for factor

function checkForFactor (base, factor) {
return base % factor == 0
}

8 kyu Grasshopper - Terminal game move function

function move (position, roll) {
return position + roll * 2
}

8 kyu Training JS #6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse(val){
  if (val)    return "true";             
  else     return "false";
}

8 kyu Is he gonna survive?

const hero = (bullets, dragons) => bullets >= dragons * 2

8 kyu Training JS #5: Basic data types--Object

function animal(obj){
  return  `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

8 kyu Training JS #4: Basic data types--Array

function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(4)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}

8 kyu Training JS #3: Basic data types--String

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

8 kyu Training JS #2: Basic data types--Number

var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v3   //set number value to a
  var b=v1   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1   //set number value to a
  var b=v5   //set number value to b
  return a*b;
}
function equal4(){
  var a=v4  //set number value to a
  var b=v5  //set number value to b
  return a/b;
}
function equal5(){
  var a=v2   //set number value to a
  var b=v6  //set number value to b
  return a%b;
}

8 kyu Switch it Up!

function switchItUp(n){

switch (n) {
  case 0:
   return 'Zero';
    break;
  case 1:
   return 'One';
    break;
  case 2:
   return 'Two';
    break;
  case 3:
   return 'Three';
    break;
  case 4:
   return 'Four';
    break;
  case 5:
   return 'Five';
    break;
  case 6:
   return 'Six';
    break;
  case 7:
   return 'Seven';
    break;
  case 8:
   return 'Eight';
    break;
  case 9:
   return 'Nine';
    break;
  }
}

8 kyu Training JS #7: if..else and ternary operator

function saleHotdogs(n){
  return n >= 10 ? n * 90 : n >= 5 ? n * 95 : n * 100
}

8 kyu Is the string uppercase?

String.prototype.isUpperCase = function() {
return this == this.toUpperCase()
}

7 kyu Beginner Series #3 Sum of Numbers

const GetSum = (a, b) => {
 let c = 0;
  if (a <= b) {
    for (i = a; i <= b; i++) {
      c += i;
    }
    return c;
  } else if (a > b) {
    for (i = b; i <= a; i++) {
      c += i;
    }
    return c;
  }
}

8 kyu What is between?

function between(a, b) {
  let count = [];
for (let i = a; i <= b; i++)
  {count.push(i)}
  return count
}

7 kyu Round up to the next multiple of 5

const roundToNext5 = n => Math.ceil(n/ 5) * 5;

7 kyu Find the middle element

function gimme (triplet) {
if (triplet[0] > triplet[1] && triplet[0] < triplet[2]  ||
    triplet[0] < triplet[1] && triplet[0] > triplet[2] ) 
  {return 0}
if (triplet[1] > triplet[0] && triplet[1] < triplet[2]  ||
    triplet[1] < triplet[0] && triplet[1] > triplet[2] ) 
  {return 1}
else
  {return 2}  
}

8 kyu Function 2 - squaring an argument

const square = a => Math.pow(a, 2)

8 kyu Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
return mpg * fuelLeft >= distanceToPump
};

8 kyu Will there be enough space?

function enough(cap, on, wait) {
return cap-on >= wait ? 0 : Math.abs(cap-on-wait)
}

8 kyu altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
return this.split('').map((e) => e == e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('')
}

8 kyu Count by X

function countBy(x, n) {

  let z = [ ];
for (let i = 1; i <= n; i++)
  z.push(i * x)
  return z;
}

8 kyu Sum of positive

const positiveSum = (arr) => arr.reduce((a, b ) => (b > 0 ? a + b : a ), 0)

7 kyu Exes and Ohs

const XO = (str) => str.toLowerCase().split``.reduce((a, c) => ('x' === c ? ++a : 'o' === c ? --a : a), 0) === 0

7 kyu Binary Addition

const addBinary = (a,b) => (a+b).toString(2);

8 kyu Difference of Volumes of Cuboids

function findDifference(a, b) {
return Math.abs(a.reduce((a,b)=>a*b) - b.reduce((a,b)=>a*b))
}

8 kyu Sort and Star

function twoSort(s) {
return s.sort()[0].split('').join('***')

}

8 kyu Quarter of the year

const quarterOf = (month) => month > 9 ? 4 : month > 6 ? 3 : month > 3 ? 2 : 1

7 kyu Make a function that does arithmetic!
JavaScript:
function arithmetic(a, b, operator){
 
return  +operator.replace(/add/g, a + b).replace(/subtract/g, a - b).replace(/multiply/g, a * b).replace(/divide/g, a/b)
 
}

8 kyu Is it a palindrome?

const isPalindrome = x => x.split('').reverse().join('').toLowerCase() === x.toLowerCase() 

8 kyu Is it even?

const testEven = n => n % 2 == 0 

7 kyu Count the divisors of a number

function getDivisorsCnt(n){
  let count = 0
  for ( let i = n; i > 0; i--){
  if (n % i == 0) {
   count++ }
  }
  
return count
}

8 kyu Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {

return Math.abs(sonYearsOld * 2 - dadYearsOld)
}

8 kyu Cat years, Dog years

var humanYearsCatYearsDogYears = humanYears => [humanYears, humanYears > 2 ? 24 + (humanYears - 2) * 4 : humanYears == 2 ? 24 : 15, humanYears > 2 ? 24 + (humanYears - 2) * 5 : humanYears == 2 ? 24 : 15];

8 kyu Sum The Strings

function sumStr(a,b) {
  return [+a + +b].join();
}

8 kyu L1: Set Alarm

const setAlarm = (e, v) => e == true && v == false ? true : false

7 kyu Disemvowel Trolls

function disemvowel(str) {
  return str.replace(/[euioaEUIOA]/g, "");
}

8 kyu Sum Mixed Array

function sumMix(x){
return Number(x.reduce((a, b) => +a + +b))
}

8 kyu Beginner Series #1 School Paperwork

const paperwork = (n, m) => n <= 0 || m <= 0 ? 0 : n * m


8 kyu DNA to RNA Conversion

const DNAtoRNA = dna => dna.replace(/T/g, 'U');

8 kyu Expressions Matter

function expressionMatter(a, b, c) {
  return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c )
}

8 kyu Correct the mistakes of the character recognition software

function correct(string)
{
return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');
  
// var chars = {0:'O', 1:'I', 5:'S'};
// return string.replace(/[015]/g, m => chars[m]);
}

8 kyu Sum without highest and lowest number

function sumArray(array) {
  
  return (array === null || array === undefined || array.length < 3) ? 0 : array.sort((a, b) => a - b,).slice(1, -1).reduce((a, b) => a + b)
}

8 kyu Grasshopper - Messi goals function

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

8 kyu Remove String Spaces

function noSpace(x){
return x.split(' ').join('')
}

8 kyu String repeat

function repeatStr (n, s) {
  return s.repeat(n);
}

8 kyu Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
if (input == null || input == ''  ) {return []                                   
  } else {
  return [input.filter((e) => e > 0).length, input.filter((e)=> e < 0).reduce((a, b)=> a + b, 0)]}
} 

7 kyu The highest profit wins!

function minMax(arr){

  return [Math.min(...arr), Math.max(...arr)]
  }

8 kyu Third Angle of a Triangle

function otherAngle(a, b) {
  return 180 - ( a + b );
}

8 kyu Convert a string to an array

const stringToArray = string => string.split(' ')

8 kyu Grasshopper - Grade book

function getGrade (s1, s2, s3) {
  
     if ((s1 + s2 + s3) / 3 < 60) {return 'F'}
else if ((s1 + s2 + s3) / 3 < 70) {return 'D'} 
else if ((s1 + s2 + s3) / 3 < 80) {return 'C'} 
else if ((s1 + s2 + s3) / 3 < 90) {return 'B'}
else if ((90 <= s1 + s2 + s3) /3) {return 'A'}

}

7 kyu Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b)
}

8 kyu Convert number to reversed array of digits

function digitize(n) {
 return [...'' +n].map(Number).reverse()
}

7 kyu Find the stray number

function stray(numbers) {
   
return Number(numbers.filter((el) => numbers.indexOf(el) === numbers.lastIndexOf(el)));
}

7 kyu Shortest Word

function findShort(s){
   return Math.min(...s.split(' ').map((e) =>e.length))
}

8 kyu Square(n) Sum

function squareSum(numbers){
return numbers.map( (e) => e * e ).reduce(( (a , b) => a + b ), 0)
}

8 kyu Return Negative

function makeNegative(num) {
  return num < 0 ? num : -(num)
}

8 kyu Function 3 - multiplying two numbers

const multiply = (a, b) => a * b ;

8 kyu Grasshopper - Personalized Message

const greet = (name, owner) => name == owner ? 'Hello boss' : 'Hello guest';

7 kyu Isograms

const isIsogram = str => new Set(str.toLowerCase()).size == str.length;
  
7 kyu Descending Order

const descendingOrder = n => parseInt([...''+n].sort((a, b) => b -a ).join(''));

const descendingOrder = n => parseInt([...''+n].map(Number).sort((a, b) => b -a ).join(''));

6 kyu Who likes it?

function likes(names) {
if (names.length === 0) {return "no one likes this";}
 else if (names.length === 1) {return `${names[0]} likes this`;}
   else if (names.length === 2) {return `${names[0]} and ${names[1]} like this`;}
    else if (names.length === 3) {return `${names[0]}, ${names[1]} and ${names[2]} like this`;}
else {
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}  
  
}

8 kyu Double Char

function doubleChar(str) {
return str.split('').map((e) => `${e}${e}`).join('')
}

7 kyu Printer Errors

function printerError(s) {

    return `${(s.match(/[n-z]/ig) || '').length}/${s.length}`;
  }

7 kyu Vowel Count

const getCount = str => str.replace(/\s+/g, '').match(/[a, e, i, o, u]/gi) == null ? 0 : str.replace(/\s+/g, '').match(/[a, e, i, o, u]/gi).length;

8 kyu Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  
    if ( current ==="green"){
      return "yellow"
        } else if ( current === "yellow"){
          return "red"
            } else if ( current === "red"){
              return "green" }

}

8 kyu Remove First and Last Character

function removeChar(str){
return str.substring(1, str.length - 1)

};

8 kyu Keep Hydrated!

const litres = time => Math.floor(time * 0.5);

8 kyu Volume of a Cuboid

class Kata {
  static getVolumeOfCuboid(l, w, h) {
   return l * w * h ;
  }
}

8 kyu Remove exclamation marks

function removeExclamationMarks(s) {
  return s.split('').filter((e) => e == '!' ? '' : e  ).join('');
}

6 kyu Break camelCase

function solution(string) {

  let newStr = '';
for( i of string ){
  if ( i == i.toUpperCase()){
    newStr += ' ';
    newStr += i;
    } else {
    newStr += i;
      }
    }
  return newStr;
  }

RetiredCan we divide it?

function isDivideBy(number, a, b) {
  return Number.isInteger( number / a) && Number.isInteger( number / b) ? true : false;
} 

8 kyu Fake Binary

const fakeBin = x => String(x.split('').map(i => i < 5 ? 0 : 1).join(''));

8 kyu Convert a Boolean to a String

function booleanToString(b){
  return String(b);
}

7 kyu Remove the minimum

function removeSmallest(numbers) {

return numbers.filter((_, i) => i != numbers.indexOf(Math.min(...numbers)));
}

7 kyu Categorize New Member

const openOrSenior = data => data.map(([age, handicap]) => age > 54 && handicap > 7 ? 'Senior' : 'Open');

8 kyu Sum Arrays

// Sum Numbers
function sum (numbers) {
    "use strict";
   return numbers.length == 0 ? 0 : numbers.reduce((acc, cur) => acc + cur);
    
};

7 kyu Square Every Digit

function squareDigits(num){

 return Number((String(num)).split('').map((e) => e*e).join(''));
 
}

function squareDigits(num){
 let str = String(num);
 let nmbr = str.split('').map((e) => e*e).join('');
 return Number(nmbr);
}

7 kyu Highest and Lowest

function highAndLow(numbers){

return `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;  

}

8 kyu You Can't Code Under Pressure #1

function doubleInteger(i) {
  return i * 2;
}

7 kyu Two to One

function longest(s1, s2) {
return Array.from(s1.concat( s2)).filter((e,i,a)=>a.indexOf(e)==i).sort().join('');
}

7 kyu Friend or Foe?

function friend(friends){
return friends.filter(word => word.length == 4 )
}

7 kyu String ends with?

function solution(str, ending){
return str.endsWith(ending)
}

7 kyu Jaden Casing Strings

String.prototype.toJadenCase = function () {
let words = this.split(" ");
 return words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");
 
}

8 kyu Calculate average

function find_average(array) {
  if (array.length === 0) { return 0}
  else {return array.reduce( (a, b) => a + b) / array.length};
  
 
}

8 kyu Transportation on vacation

function rentalCarCost(d) {
 if (d < 3) { return 40 * d}
 else if (3 <= d && d< 7) {return 40 * d - 20}
 else {return 40* d - 50}
}

7 kyu Regex validate PIN code

function validatePIN (pin) {
  if (pin.length != 4 && pin.length != 6)  {
    return false
  } 
  for (i = 0; i < pin.length; i++) {
    if (pin[i] > '9' || pin[i] < '0') {
      return false
    }
  }
    return true
  }

7 kyu List Filtering

function filter_list(l) {
  return l.filter(x => x === +x)
  }

8 kyu Convert a Number to a String!

function numberToString(num) {
  return num.toString()
}

7 kyu Reverse words

const reverseWords = str =>
    str.split(' ')
    .map( w => w.split('').reverse().join('') )
    .join(' ');

8 kyu Find Multiples of a Number

function findMultiples(int,limit){
  return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}


function findMultiples(integer, limit) {
 
  let multiples = [];
  
  for(let i = integer; i<= limit; i= i+integer){
    multiples.push(i);
  }
  return multiples;
}

  8 kyu Reversed sequence

function reverseSeq(n) {
  let arr = [];
  for (let i = 1; i < n +1; i++) {
    arr.push(i);
  }
return arr.reverse();

}

8 kyu Simple multiplication

let simpleMultiplication = number =>
    (number % 2 == 0) ? number * 8 : number * 9;

8 kyu MakeUpperCase

function makeUpperCase(str) {
  return str.toUpperCase();
}

8 kyu Find Maximum and Minimum Values of a List

var min = function(list){
    
    return Math.min.apply(null, list);
}

var max = function(list){
    
    return Math.max.apply(null, list);
}

7 kyu Is this a triangle?

function isTriangle(a,b,c) {
 if ((a >= (b + c)) || (b >= (a + c)) || (c >= (a + b))) {return false} else {return true} ;
   
}

8 kyu Century From Year

function century(year) {
 
  return Math.ceil(year/100 );
}
7 kyu Odd or Even?

function oddOrEven(array) {
  const initialValue = 0;
  let res = array.reduce((a, b) => a + b, initialValue);
  if (res % 2 ==0) return "even";
  if (res %2 != 0) return "odd";
  
}

8 kyu A Needle in the Haystack

function findNeedle(haystack) {
 let pos = haystack.indexOf('needle')
  return `found the needle at position ${pos}`
}

8 kyu How good are you really?

function betterThanAverage(classPoints, yourPoints) {
 let sum =  classPoints.reduce(function(sum, elem) {
  return sum + elem})
  let points = ((sum + yourPoints )/(classPoints.length +1 ));
  if (points < yourPoints) {return true} else {return false}
}


7 kyu Complementary DNA

function DNAStrand(dna){
 return   dna.replace(/A/g,'t').replace(/T/g,'a').replace(/G/g,'c').replace(/C/g,'g').toUpperCase();
   }

8 kyu Convert a String to a Number!

const stringToNumber = function(str){

  return +str;
}

8 kyu Function 1 - hello world

function greet() {return "hello world!"}

8 kyu Invert values

function invert(array) {
    return array.map(array => -array);
}

8 kyu Beginner - Lost Without a Map

function maps(x){
var dbl = x.map(x => x * 2)
return dbl
  }

8 kyu Beginner Series #2 Clock

function past(h, m, s){
  let msh = h * 3600000;
  let msm = m * 60000;
  let mss = s * 1000;
  return msh + msm + mss;
}

8 kyu Opposites Attract

function lovefunc(flower1, flower2){
  if ((flower1 %2==0) && (flower2 %2==0) || (flower1 %2!==0) && (flower2 %2!==0) )return false
  else return true
}

8 kyu Beginner - Reduce but Grow

grow = x =>

x.reduce((prev, curr) => prev * curr)

8 kyu Find the first non-consecutive number

function firstNonConsecutive (arr) {

 
  for (let i = 0; i < arr.length - 1; i++)
  { if (arr[i + 1] - arr[i] != 1)  return arr[i + 1]
  }
  return null
}

function firstNonConsecutive (arr) {

  let res = null;
  for (let i = 0; i < arr.length - 1; i++)
  { if (arr[i + 1] - arr[i] != 1)  return arr[i + 1]
  }
  return res
}

8 kyu Calculate BMI

function bmi(weight, height) {
let bmi = (weight / (height * height));

if (bmi <= 18.5) return "Underweight"

if (bmi <= 25.0) return "Normal"

if (bmi <= 30.0) return "Overweight"

if (bmi > 30) return "Obese"
}

8 kyu Opposite number

function opposite(number) {
 return (-number)

 
}

8 kyu Beginner Series #4 Cockroach

function cockroachSpeed(s) {
 return cm = Math.floor( s / 3.6 * 100 )
 
}

8 kyu Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  if  (name[0] == "r" )  return `${name} plays banjo`
    if  (name[0] == "R" )  return `${name} plays banjo`
  else 
    return `${name} does not play banjo`
  
}

8 kyu Removing Elements

function removeEveryOther(arr){
return arr.filter((a, b) => b % 2 == 0)
  }

8 kyu Returning Strings

function greet(name){
return (`Hello, ${name} how are you doing today?`)
}

8 kyu Even or Odd

function even_or_odd(number) {
  
if (number%2 == 0)
        return "Even";
    else
        return "Odd";
}

8 kyu Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(Math, args);
  }
}

// 8 kyu Reversed Strings

function solution(str){
  
 
return str.split("").reverse().join("");
  
}

// 8 kyu Grasshopper - Summation

var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++){
     sum += i;
  }
  return sum;

  }
  

// 8 kyu Sentence Smash

function smash (words) { 
 const s = words.join(' ')
   return s};

// 8 kyu Multiply

function multiply(a, b){
  return a * b
}