// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

//There is mltiple methods to reverse a string in JavaScript 

function reverseString(str) {

  // 1st mothod is using built in functions like split, reverse and join
  // return str.split('').reverse().join('');

  // 2nd method is using loops
//   let reversed = "";
//   for (let i = str.length-1; i>=0;i--){
//     reversed += str[i];
//   }
//   return reversed;
// }
// 3rd method is using es6 spread operator and array reduce method
// return [...str].reduce((rev,char)=> char+rev, '')

//4th method is using for of loop
// let reversed = "";
// for (let char of str){
//   reversed = char + reversed;
// }
// return reversed;

//5th method is using split method and forEach loop
// let reversed = '';
// str.split('').forEach(char => reversed = char +reversed);
// return reversed;
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

  // let palindrome = str.split('').reverse().join('');
  // return palindrome === str;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {

//   let reversed = int.toString().split('').reverse().join('');
// return parseInt(reversed)*Math.sign(int);
}


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

  return str
  .split(' ')
  .map((word) => word.length === 0 ? "": word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(0))
  .join(' ');
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

  // const charMap= {};
  // let maxNum =0;
  // let maxChar = '';

  // for (let char of str){
  //   charMap[char] = (charMap[char] || 0) + 1;  
  // }

  // for (let char in charMap){
  //   if (charMap[char] > maxNum)
  //   {maxNum = charMap[char];
  //     maxChar = char;
  //   }  }
  //   return {character:maxChar, count:maxNum};
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz(n) {

for (let i=1; i<=n; i++){
  if (i% 3===0 ){
    console.log('Fizz');
  }
  else if (i % 5 ===0){
    console.log('Buzz');
  }
  else if (i % 3 ===0 && i % 5 ===0){
    console.log('FizzBuzz');
  }
  else {
    console.log(i);
  }
}
}



// Call Function
const output =   fizzBuzz(100);

console.log(output); 