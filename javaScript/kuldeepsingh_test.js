// 1. Create a user login method via taking email and password as input params and create a promise for either login successfully or not.
// 2. Create a function to implementation async await, where each promise will resolve one by one after getting response of each functions
//   1. getUserDetails
//   2. getUserAccountDetails
//   3. getUserAccountStatments
// 3. Impliment problem 2 with callback hell.
// 4. Create a function to upload 10 images one by one, if any of images failed to upload reupload them untill all images uploaded successfully.


  "use strict";
/* **************************************************************************************************** */
// function main() {
//     let email = 'kdsinghak47@gmail.com';
//     let pass = 'kdsingh!!!!';
//     login(email, pass).then((res) => {
//       console.log(res)
//     }).catch((rej) => {
//       console.log(rej)
//     });
//   }
  
//   function login(email, pass) {
//     let stored_email = 'kdsinghak47@gmail.com';
//     let stored_password = 'kdsingh!!!!';
//     return new Promise((resolve, reject) => {
//       if (email === stored_email && pass === stored_password)
//         resolve('login sucessfully');
//       else
//         reject('invlaid pass or email kindly please check');
//     });
//   }
  
//   main();
  

/* **************************************************************************************************** */
// var  userdetail={
//     Name :'kuldeep singh',
//     phone:'9548287302',
//     userId:'123'
//     }; 
    
//    var  accountDetail={
//     Accno : '12345678654',
//     IFSC : 'ABC123',
//     Branch : 'noida sector -62'
//     };
    
   
    
//    var accountStatements={
//     Accno : '12345678654',
//      Balance :'200000' ,
//      lastCredit:3000,
//      lastDebit:1000,
//     };
    
//   function getUserDetails(userdetail)
//   {
//       let id='123';
//       return new Promise((resolve , reject) =>{
//       setTimeout( () => {
//           if(userdetail.userId===id)resolve({userdetail})
//           else reject('id not matched ');
//          }, 1000);  
//       });
//   }
  
//   function getUserAccountDetails(accountDetail)
//   {
//       let AccNo='12345678654'
//      return new Promise((resolve , reject)=> {
//      setTimeout( () => {
//          if(AccNo === accountDetail.Accno){
//       resolve({accountDetail})
//     }else { reject ('Account no is not matched ')}
//          }, 4000);  
     
//      });
//   }
  
//   function getUserAccountStatements(accountStatements)
//   {
//     let AccNo='12345678654'
//     return new Promise((resolve , reject)=> {
//     setTimeout( () => {
//         if(AccNo === accountStatements.Accno){
//      resolve({accountStatements})
//    }else { reject ('Account no is not matched ')}
//         }, 4000);  
    
//     });
//   }
  
//  async function main()
//  {
//      try{
//      let ans =await getUserDetails(userdetail );
//        console.log(ans);
     
     
//         let ans1 = await getUserAccountDetails(accountDetail);
//         console.log(ans1);
 
     
//        let ans2= await getUserAccountStatements(accountStatements);
//        console.log(ans2);
//      }catch(err){
//          console.log('error',err);
//      }
//  }
  
//  main();

/* **************************************************************************************************** */


// function images(){
//     Promise.all(uplImage())
//     .then((resp)=>{
//         console.log('resp',resp)
//     })
//     .catch((err)=>{
//         console.log('error',err);
//     })
//     }
    
//     function uplImage(){
//         let array=[];
//         for(let i=0;i<10;i++){
//             array.push(new Promise((resolve,reject)=>{
//                 if(i<4){
//                 setTimeout(()=>{
//                     resolve('uploading image ');
//                 },i*1000)
//             }
//             else{
//                 setTimeout(()=>{
//                     reject(resolve('reupload'));
//                 },i*1000)
//             }
//             })
//             )}
//             return array;
//     }
 
//     images();

/* **************************************************************************************************** */
  
// callback

// var userobj = {
//     Name: 'kuldeep singh',
//     phone: '9548287302',
//     userId: '123',
//     Accno: '12345678654',
//     IFSC: 'ABC123',
//     Branch: 'noida sector -62',
//     Balance: '200000',
//     lastCredit: 3000,
//     lastDebit: 1000,
//   };
  
//   function getUserDetails(detail) {
//     let id = '123'
//     if (id === detail.userId) {
//       getUserAccountDetails(detail.Accno, getUserAccountStatments);
//     }
//   }
  
//   function getUserAccountDetails(details, getUserAccountStatments) {
//     let Accno = '12345678654';
//     if (Accno === details.Accno)
//       getUserAccountStatments(details);
//   }
  
//   function getUserAccountStatments(details) {
//     let Accno = '12345678654';
//     if (Accno === details.Accno) {
//       console.log(userobj);
//     }
//   }
  
  
//   function main(fx, obj) {
//     return fx(obj);
//   }
//   main(getUserDetails, userobj.userId);
  