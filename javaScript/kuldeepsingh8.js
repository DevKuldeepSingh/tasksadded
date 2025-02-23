//1. write a function to add 2 numbers using a promise function, resolve the promise and give output if numbers are valid. if numbers are not valid then reject the promise.
// 2. write a function to resolve the promise that will resolve in 5 seconds and will return user data after resolved. also some code must be running before and afte. 
   //that promise function. this function will take id parameter and if id matches user data (we have) then it will resolve otherwise reject. resolve and reject after 5 seconds.
// 3. write a promise function that will take an input of array of numbers. if the sum of all numbers in array is odd then resolve promise otherwise reject promise.


// async and await 

/* ******************************************************* */

// async function main()
// {
//     try{
//        let ans = await addValid();
//        console.log(ans);
//     }
//     catch(err){
//        console.log(err);
//     }
// }

/* ******************************************************* */
// function addValid()
// {
//     return new Promise((reject , resolve) => {
//         let a ='a', b=20;
        
//         if(typeof(a)==='number' && typeof(b)==='number'){
//         let c= a+b;
//         resolve({
//             Success : 'the sum is' ,
//             sum : c
//         });
//         }
//         else {
//            reject({
//              filure: 'error -> NaN' 
//            });  
//         }

//    })
// }

// main();

/* ******************************************************* */

// async function main()
// {
//     try{
//        let id = await idValid();
//        console.log(id);
//     }
//     catch(err){
//        console.log(err);
//     }
// }

//  let userId ='123456';
// function idValid()
// {
//     
//     return new Promise((reject , resolve) => {
//         let storedId = '12345';
        
//         (userId === storedId) ?
//         resolve({
//             Success : 'your id is matched' ,
//             Id: userId
//         })
//         :
        
//            reject({
//              filure: 'error -> you entered wrong id' 
//            })  

//    })
// }

// main();


/* ******************************************************* */

// async function main()
// {
//     try{
//        let sum = await validArray();
//        console.log(sum);
//     }
//     catch(err){
//        console.log(err);
//     }
// }

/* ******************************************************* */

// function validArray()
// {
//      let arr=[1,2,3,4,5,6];
//     return new Promise((reject , resolve) => {
//          let sum=0;
//          for(i in arr){ sum+=arr[i] }
         
//          (sum % 2 != 0) ?
//         resolve({
//             Success : 'sum is odd ' ,
//             sum
//         })
//         :
        
//            reject({
//              filure: 'sum is even',
//              sum
//            })  

//    })
// }

// main();

/* ******************************************************* */

//running calls parallely 

const arr = [1, 2, 3, 4, 3, 4, 5, 6, 9, 9];
const MyPromiseFunction = (num , index ) => new Promise((resolve, reject) => {
  
  setTimeout(() => (num % 2 == 0)
    ? resolve('num in array is even :'+num) 
    : reject('num in array  is odd :' +num), 1000 * index);
});

function main(){
arr.forEach(
  (num , index) => MyPromiseFunction(num , index)
    .then((res) => {
    console.log(res);
   }).catch((rej) => {
     console.log(rej);
   })
);
}
main()



