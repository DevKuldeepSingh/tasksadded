'use strict'
 
              // Promise.all()//

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
  
      resolve(console.log('first promise resolved'))
    }, 1 * 1000);
  });
  
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(console.log('second promise reject'))
    }, 2 * 1000);
  });
  
  
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('third promise resolve'))
    }, 3 * 1000);
  });
  
  
  Promise.all([promise1, promise2, promise3]).then((res) => {
    res
  }).catch((rej) => {
    rej
  });
  