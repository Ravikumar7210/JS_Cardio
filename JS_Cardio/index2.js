// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {

    // let total = 0;
    // for (let i=0; i<arguments.length; i++){
    //     total += arguments[i];
    // }
    // return total;

    // //using rest parameters 
    // const args = [...arguments];
    // return args.reduce ((acc, curr) => acc+curr, 0);

    //using for of

    const args = [...arguments];

    let total =0;
    for (let sum of args){
        total +=sum;
    }
    return total;

}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {

    let total = 0;

    //helper function to check for prime numbers\\
    function isPrime(n){
        if (n<2)
            return false;
        for (let i=2; i<=Math.sqrt(n); i++){
            if (n%i===0)
                return false;
    }
    return true;
}
// loop to add all prime numbers
for (let i=2;i<=num ; i++){
    if (isPrime(i)){
        total+=i;
    }
}
return total;
}
// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...args) {

    // return arr.filter(num => !args.includes(num));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {

    //first filter out the people from the array 
    // let people = arr.filter(val => val !== -1);

    // //sort the people in ascending order
    // people.sort((a,b) => a-b);

    // //placed sort height people back into the original array
    // let index = 0;
    // return arr.map(val => {
    //     if (val === -1){
    //         return -1;
    //     }
    //     else {
    //         return people[index++];
    //     }
    // })

    }


// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
 for (let i=0; i<str.length-1; i++){
     const currentCode = str.charCodeAt(i);
     const nextCode = str.charCodeAt(i+1);  

     if (nextCode - currentCode > 1){
        return String.fromCharCode(currentCode + 1);
      } 
    }
    return undefined;
     
}
  


// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    
    // let evenSum=0;
    // let oddsum=0;
    // for (let num of arr){
    //     if (num%2===0){
    //         evenSum+=num;
    //     }
    //     else {
    //         oddsum+=num;
    //     }
    // }
    // return [evenSum, oddsum];

    // using reduce method

    return arr.reduce(([even,odd],num)=> num %2 ===0? [even+num, odd] : [even, odd+num], [0,0]);
}

const output = evenOddSums([50, 60, 60, 45, 71]);

console.log(output);