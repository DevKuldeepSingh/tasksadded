// CALLBACK

// function main()
// {n
//     Add((isValid) => {
//     console.log('sum is: ',isValid);
// });
// }

// function Add(isValid )
// {
//      let num1=10,num2=20;
     
//     if(typeof(num1)=='number' && typeof(num2)=='number')
//     {
//     let sum=num1+num2; 
//     isValid(sum);
//     }
//     else
//     {
//     isValid('invalid - NaN');
//     }
     
// }

// main();    // output : -   30

/* *************************************************** */

// function main() {
//     let id = "1234";
//     isIdValid(id, function(data) {
//       console.log("user data", data);
//     });
//   }
  
//   function isIdValid(getId, callback) {
//     let id = '5678';               // output -> "user data", { id: "not valid"}

//     if(id == getId){
//     setTimeout(() => {
//       callback({
//         id:'1234'
//       });
//     }, 5000);
//     }
  
//   else{
//     setTimeout(() => {
//       callback({
//         id: 'not valid'
//       });
//     }, 5000);
//     }
//   }
  
//   main();
  

/* ******************************************************************************** */

// function main()
// {
//        isCheckOdd( ( checkOdd ) => { console.log(checkOdd) }  );
// }

// function isCheckOdd( checkSum )
// {
//      let arr=[1,2,3,4,5,6,7];
//      let sum=0;
//      for(i in arr)
//      sum+=arr[i];
     
//      (sum % 2 != 0 ) ? checkSum('sum of array is elements  is odd') : checkSum('sum of array elements is not odd ')
// }


// main();



/* ****************************************************************************************** */
   // PROMISE 

// let myPromise = new  Promise(function (resolve , reject){
//     let a='k', b=20;
//      if(typeof(a)=='number' && typeof(b)=='number')
//      {
//        let sum=a+b;
//        resolve(sum);
//      }
     
//      else {
//      reject('not a number');
//      }
    
//     });
    
//     myPromise.then((res) => {
//         console.log(res);
//     }).catch((rej) => {
//         console.log(rej);
//     });

/* ****************************************************************************************** */


// let userId = '5678';

// let myPromise = new Promise(function(resolve, reject) {
//   let id = '5678';

// (id == userId) ? setTimeout(() => {  resolve('id is :' + id); }, 5000) : reject('invalid id ')

// });

// myPromise.then((res) => {
//   console.log(res);
// }).catch((rej) => {
//   console.log(rej);
// });


/* ****************************************************************************************** */

// let myPromise = new Promise(function(resolve, reject) {
//     let arr = [1,2,3,4,5,6,7];
//      let sum=0;
//      for(i in arr)
//      sum+=arr[i];
  
//     (sum % 2 != 0) ?   resolve('sum is odd ' +sum) : reject('sum is even');
// 
//   });
  
//   myPromise.then((res) => {
//     console.log(res);
//   }).catch((rej) => {
//     console.log(rej);
//   });
  
/* ****************************************************************************************** */

// running calls parallely 

// const arr = [1, 2, 3,4,3, 4, 5, 6,9];
// const MyPromiseFunction = (num) => new Promise((resolve, reject) => {
  
//   setTimeout(() => (num % 2 == 0)
//     ? resolve('num in array is even :'+num) 
//     : reject('num in array  is odd :' +num), 1000 * num);
// });

// function main(){
// arr.forEach(
//   (num) => MyPromiseFunction(num)
//     .then((res) => {
//     console.log(res);
//    }).catch((rej) => {
//      console.log(rej);
//    })
// );
// }
// main()