// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

   //   const words = sen.split(' ');

   //   let longest = '';

   //   for (let word of words){
   //      if (word.length > longest.length){
   //          longest = word;
   //      }
   //   }
   //   return longest;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {

   // const chunked = [];

   // for (let i=0; i<arr.length; i = i + len){
   //   chunked.push(arr.slice(i, i+len));
   // }
   // return chunked;

   // using reduce method

//    return arr.reduce ((acc,_, i)=>{
//       if (i% len ===0){
//          acc.push(arr.slice(i, i+len));
//       }
//       return acc;
//    }, []);
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {

   // return arrays.reduce ((acc,curr)=> acc.concat(curr),[]);

   // using built in flat method
   // return arrays.flat();
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {

   // const cleanFormat = str => 
   //    str.replace(/[^a-zA-Z0-9]/g, '')
   // .toLowerCase()
   // .split('')
   // .sort()
   // .join('');

   // return cleanFormat(str1) === cleanFormat(str2);
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {

   return str
   .toLowerCase()
   .replace(/[a-z]/g, char => {
let nextChar = char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
if ('aeiou'.includes(nextChar)){
   nextChar = nextChar.toUpperCase();
}
return nextChar;
   });

}

// Call Function
const output = letterChanges('hello there');

console.log(output);