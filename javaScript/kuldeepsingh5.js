
//  function fun1()
// {
//     let a=10;
//     function fun2()
//     {
        
//        return a*10;
//     }

//     //console.log(fun2())  // this is called lexical scoping describe how a parser resolves variables names when functions are nested 
// }

//  console.log(fun1());    // here output is 100


//fun2(); // here shows an error fun2 is not defined because we access the fun2 outside the scope 



// closure :-> nested functions have access to variables decleared in outer scope.



// function fun1()
// {
//     let a=10;
//     function fun2()
//     {
        
//        console.log(a*10)
//     }

//     // console.log(fun2()); 
//     return fun2;    //  returrn statement is must when we achieve a closure 
// }

//  var closure = fun1();

//  closure();    // here output is 100  , we use closure


// function fun()
// {
//     let a=10;
//     let fun2=()=>{   // arrow funtion inside a normal function 
//         console.log(a*10);
//     }
//     return fun2;
// }

// let newfun = fun();

// console.log(newfun)    // here output  it shows -> [Function: fun2] ​​​​​at ​​​​​​​​newfun​​​ || whole function body 



//  let fun1 = ()=>
//  {
//      let a=10;
//      function fun2()      // use normal function inside a arrow function
//      { 
//           console.log(a*10);  
//         //return a*10;
//      }

//      return fun2;
//      //console.log(fun2()); 
//  }

//  let newfun= fun1();

//  console.log(newfun);    // here output  it shows ->  fun2()      // use normal function inside a arrow function{  console.log(a*10);  return a*10;}   whole function body 



// let fun =()=>
// {
//     let a=10;
//     let fun2=()=>{   // arrow funtion inside a arrow function 
//         console.log(a*10);
//     }
//     return fun2;
// }

// let newfun = fun();

// console.log(newfun)    // here output  it shows -> ()=>{   // arrow funtion inside a arrow function console.log(a*10);}   whole function body 


                    //       THIS 

           
// console.log(this ===  window) ;  // output: 'true' -> because this points to the window object

// function f1()
// {
//     console.log(this);    // output -> window object 

//     function f2(){
//     console.log(this);    // output -> window object
//     }
//     return f2;
// }

// let newfun= f1();

// newfun();



// function f1()
// {
//     console.log(this);    // output -> window object 

//     const  f2 =()  => {
//     console.log(this);    // output -> window object
//     }
//     return f2;
// }

// let newfun= f1();

// newfun();


   



// let c=30;
// function f1()
// {

//     let a=10;
//     function f2()
//     {
//         let b=20;

//         console.log(this.b)   // output -> undefined 
//     }

//     f2();
// }

// f1()
    

/* *********************************************************** */
// function alert2(){
//     console.log(this.age);
// }


// const obj ={

//     age : 22,
//     alert : alert2,

//     nestedobj :{
//          age :26,
//          myalert : alert2
//      }
//     }
// obj.nestedobj.myalert();
