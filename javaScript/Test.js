"use-strict";

/* 1: Write a JavaScript program to calculate the factorial of a number */

function factorial(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
}

function main(num) {
  console.log(factorial(num));
}

main(4);

/*2 Write a JavaScript function to check whether a string is blank or not.
 */

function isStringBlank(str) {
  if (str.length <= 0) return true;
  // we use isEmpty method also
  else return false;
}

function main(str) {
  if (isStringBlank(str)) console.log("string is empty");
  else console.log("string is not empty");
}

main(" ");

/* 3 Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers
 */

function findGCD(num1, num2) {
  if (num1 === 0) return num2;

  if (num2 === 0) return num1;

  if (num1 === num2) return num1;

  if (num1 > num2) return findGCD(num1 - num2, num2);

  return findGCD(num1, num2 - num1);
}

function main(num1, num2) {
  console.log(findGCD(num1, num2));
}
main(98, 56);

// 4 Given two strings, return true if they are anagrams of one another

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  sortedS = str1.split("").sort();
  sortedT = str2.split("").sort();

  for (let i = 0; i < str2.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }
  return true;
}

function main(str1, str2) {
  if (isAnagram(str1, str2)) console.log("string is Anagrm");
  else console.log("string is not is Anagrm");
}
main("anagram", "nagaram");

// 5 Write a JavaScript function to capitalize the first letter of a string.

function capitalWord(str) {
  if (str.length <= 0) return console.log("string is empty");
  let str1 = "";
  str1 = str[0].toUpperCase();

  console.log(str1[0]);

  for (let i = 1; i < str.length; i++) {
    str1 += str[i];
  }

  return str1;
}

console.log(capitalWord("this is kdsingh"));

/* 6 Write a JavaScript function to capitalize the first letter of a string. */

function capitalWord(str) {
  if (str.length <= 0) return console.log("string is empty");
  let str1 = "";
  str1 = str[0].toUpperCase();

  console.log(str1[0]);

  for (let i = 1; i < str.length; i++) {
    str1 += str[i];

    if (str[i] == " ") {
      str1 += str[i + 1].toUpperCase();
      i++;
    }
  }

  return str1;
}

console.log(capitalWord("this is kdsingh"));

/* 7 Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case */

function toUpperToLower(str) {
  let newstr = "";

  if (str.length <= 0) return console.log("string is empty");

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) newstr += str[i].toLowerCase();

    if (str[i] == str[i].toLowerCase()) newstr += str[i].toUpperCase();
  }

  return newstr;
}

console.log(toUpperToLower("this iS kDsiNgh"));

//8  Write a JavaScript function to convert a string into camel case.

function camelCase(str) {
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      str1 += str[i + 1].toUpperCase();
      i = i + 2;
    }
    str1 += str[i];
  }

  console.log(str1);
}

camelCase("this is kdsingh");

//Write a JavaScript function to convert a string into camel case.

// 1 :
// function subsetGenerator(str)
// {

// let arr=[];
// let n=str.length;
//         for(let i=0;i<(1<<n);i++)
//         {
//            let temp=' ';
//             for(let j=0;j<n;j++)
//             {
//                 if(i & (1<<j))
//                     temp+=str[i];
//             }

//             arr.push(temp);
//         }

//         return arr;
//     }

// console.log( subsetGenerator('dog'));     // this not working prefectly

//2

function subsetString(str) {
  if (str.length <= 2) {
    if (str.length === 2) return [str, str[1] + str[0]];
    else return [str];
  } else {
    let arr = []; // for storing string in array
    for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        arr.push(str.slice(i, j + 1));
      }
    }
    return arr;
  }
}

console.log(subsetString("dog"));

//Write a JavaScript program to convert an asynchronous function to return a promise.

const arr = [1, 2, 3, 4, 3, 4, 5, 6, 9, 9];
const MyPromiseFunction = (num, index) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        num % 2 == 0
          ? resolve("num in array is even :" + num)
          : reject("num in array  is odd :" + num),
      1000 * index
    );
  });

function main() {
  arr.forEach((num, index) =>
    MyPromiseFunction(num, index)
      .then((res) => {
        console.log(res);
      })
      .catch((rej) => {
        console.log(rej);
      })
  );
}
main();
