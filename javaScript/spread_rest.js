let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr1 = arr.map((item) => {
  if (item % 2 == 0) return item;
});

console.log(newArr1);

let newArr2 = arr.map((item) => {
  if (item < 8 && item > 3) return item;
});

console.log(newArr2);

newArr2 = arr.filter((item) => {
  if (item < 8 && item > 3) return item;
});

console.log(newArr2);

let arr2 = ["A", "B", "C", "D", "E", "F", "G"];

let newArr3 = arr2.map((item, index) => {
  if (item + index === item + index) return item + index;
});

console.log(newArr3);

const arr3 = ["A", "2", "3", "4", "5", "6"];

let newArr4 = arr3.map((item) => parseInt(item));
console.log(newArr4);

const objArr = [
  {
    key: 1,
    value: "A",
  },
  {
    key: 2,
    value: "B",
  },
  {
    key: 3,
    value: "C",
  },
  {
    key: 4,
    value: "D",
  },
];

let newobjArr = objArr.map(({ key, value }) => ({ [key]: value }));

console.log(objArr);

console.log(newobjArr);

let str = "kdsingh";
console.log({ ...str });

let numbers = [0, 1, 2];
let addnumber = 12;
numbers = [...numbers, addnumber];

console.log(numbers);

function myFunction(v, w, x, y, z) {
  console.log(v, w, x, y, z);
}
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);

let a = [[1], [2], [3]];
let b = [...a];

console.log(a);

b.shift().shift();

console.log(b);

console.log(a);

let obj1 = {
  key: 1,
  value: "A",
};
let obj2 = {
  key: 2,
  value: "A",
};

let newobj = (...object) => ({
  ...object,
});

console.log(newobj);

let merge = newobj(obj1, obj2);
console.log(merge);

function sortArguments(...numbers) {
  /* let args = Array.prototype.slice.call(arguments); */

  let newnumbers = numbers.slice();
  console.log(newnumbers);
  let sortedArgs = newnumbers.sort();
  return sortedArgs;
}

console.log(sortArguments(5, 3, 7, 1));

function findMax(a, ...rest) {
  let max = 0;
  let newrest = [a, ...rest];
  for (let i = 0; i < newrest.length; i++)
    if (max < newrest[i]) {
      max = newrest[i];
    }

  return max;
}

console.log(findMax(9, 1, 7, 8, 3, 2, 7, 0));

function search(...numbers) {
  let i = 0;
  let j = numbers.length - 1;
  let target = 6;

  while (i <= j) {
    let mid = Math.floor(i + (j - i) / 2);

    if (numbers[mid] == target) return target;
    else if (numbers[mid] < target) i = mid + 1;
    else j = mid - 1;
  }
  return -1;
}

console.log(search(1, 2, 3, 4, 1, 5, 6, 7));
