//  1 : scope chaining 

// let a='hello';

// function fun()
// {
//     console.log(a);  // 'a' variable have a global scope it can be accessed anywhere
// }

// fun();  

/* ***************************************************************************************** */

// let a='hello';

// function fun()
// {
//      a=10;
// }

// console.log(a);

// fun();

// console.log(a);

/* ***************************************************************************************** */

// let a = "hello";

// function greet() {
//   var b = "World"
//     console.log(a + b);
// }

// greet();
// console.log(a + b); // error  because var b has a local scope

/* ***************************************************************************************** */


// let a = 'Hello';
// function fun() {
//     // local variable
//     let b = 'World';
//     console.log(a + ' ' + b);

//     if (b == 'World') {

//         // block-scoped variable
//         let c = 'hello';
//         console.log(a+' '+b+' '+c);
//     }

//     // variable c cannot be accessed here because it has a blocked scope it only be accessed inside a block
//     console.log(a+' '+b+' '+c);  
// }

// fun();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2 : Hoisting 

//  // function hoisting


// console.log(fun(10));
// function fun(num)
// {
//     let i=0;
//     while(i<10){
//     num+=num;
//     i++;
//     }
    
//     return num;
// }

//      //console.log(fun(10));

/* ***************************************************************************************** */

// let arr=[1,2,3,4,5,6];
// console.log(reverse());

// function reverse( )
// {
//     let i=0;j=arr.length-1;
    
//     while(i<=j)
//     {   
//         let temp = arr[i];
//         arr[i++]=arr[j];
//         arr[j--]=temp;
//     }
    
//     return arr;
// }

//   //console.log(reverse());

/* ***************************************************************************************** */

// console.log(reverse([1,3,2,4]));

// function reverse(arr)
// {
//     //let i,j;
    
//     while(i<=j)
//     {
//         let temp = arr[i];
//         arr[i++]=arr[j];
//         arr[j--]=temp;
//     }
//     let  i=0,j=arr.length-1;   // it not show any error and works fine  -> but i have a question that why array is not reversed. 
//     return arr;
// }


/* ***************************************************************************************** */

// console.log(reverse([1,3,2,4]));

// function reverse(arr)
// {
//     //let i,j;
    
//     while(i<=j)
//     {
//         let temp = arr[i];
//         arr[i++]=arr[j];
//         arr[j--]=temp;
//     }
//     const  i=0,j=arr.length-1;    // show an error  -> 'i is not defined because const not support hoisting  '
//     return arr;
// }
/* ***************************************************************************************** */

// console.log(reverse([1,3,2,4]));

// function reverse(arr)
// {
//     //let i,j;
    
//     while(i<=j)
//     {
//         let temp = arr[i];
//         arr[i++]=arr[j];
//         arr[j--]=temp;
//     }
//     let i=0,j=arr.length-1;   // show an error  -> 'j' is not defined because let not support hoisting
//     return arr;
// }