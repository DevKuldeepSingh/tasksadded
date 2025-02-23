
//    THIS //
     // const myobject={
    //        Firstname:'kuldeep',
    //        age:23,
    
    //       sum: function(){
    //         console.log(`sum function decelared in object`, this);    // this function refer to myobject 
    //        }, 
    
    //       sub :() =>{
    //           console.log("arrow function declared",this)      // this is arrow function  and it refers to global object (window object)   
    //        },
    
    //        div: function(){
    //            console.log('div function declaration',this)      //object
    //            function div1(){
    //                console.log('div inner function',this)       //refers always  window object 
    //            }
    //            const div2=() =>{
    //                console.log('div inner arrow function',this)    // object
    //            }
    //            div1();
    //            div2();
    //         },
    
    //         mul:() =>{
    //             console.log('mul outer arrow function declared',this)      // window
    //         function multi1(){ 
    //            console.log('mul inner1 function declaration',this)         //window
    //         }
    //         const multi2=() =>{
    //       console.log('mul inner 2 arrow function declaration',this);     // window
    //         }
    //      multi1();
    //      multi2();
    // }
    // }
    // console.log(myobject.sum());
    // console.log(myobject.sub());
    // console.log(myobject.div());
    // console.log(myobject.mul());

/* ************************************************************ */



// function alert2(){
//     console.log(this.age);
// }


// const obj ={

//     age : 22,
//     myalert : alert2,

//     nestedobj :{
//          age :26,
//          myalert : alert2
//      }
      
//   }

// obj.myalert();     // output -> 22
// obj.nestedobj.myalert();    // output -> 26

/* ************************************************************ */

// function fun1(age)
// {
//    this.age = age ;
// }    

// const newconst = new fun1(22);

//    console.log(newconst.age);  // output -> 22

/* ************************************************************ */


// const vedio={
//     tittle :  'a',
//     play()
//     { 
//         console.log(this);
//     }

// }

// vedio.start = function()
// {
//     console.log(this);
// }

// vedio.start();   //     output -> vedio object

/* ************************************************************ */

// const vedio={
//     tittle:'a',
    
//     tags:['1','2','3','4'],

//     showTags()
//     {
//         this.tags.forEach(function(tags){
//           console.log(tags);  // output:-> 1 2 3 4
//         });    
//     }

// };

// vedio.showTags();


/* ************************************************************ */

// const vedio={
//     tittle:'a',
    
//     tags:['1','2','3','4'],

//     showTags()  // it refer to vedio object 
//     {
//         this.tags.forEach(function(items){ 
//           console.log(this.tittle,items);  // output -> undefined '1' undefined '2' undefined '3' undefined '4'  ,  // because it points window object , this is callback function not a method of vedio object
//         });    
//     }

// };

// vedio.showTags();

/* ************************************************************ */

// const vedio={
//     tittle:'a',
    
//     tags:['1','2','3','4'],

//     showTags() 
//     {
//         this.tags.forEach(function(items){ 
//           console.log(this.tittle,items);} , this);  //output->  now here this refer to the current object (vedio object )  
//     }

// };

// vedio.showTags();

/* ************************************************************ */

// CALL

// function Add(a, b)
// {
//     let add=a+b;
//      this.add = add;
// }

// function Sub(num1, num2)
// {
//     let sub=num1-num2;
//     this.sub=sub;
// }


// function calculation()
// {
//     console.log(this.add);
//     console.log(this.sub);
// }

// calculation.call(new Add(3,4));
// calculation.call(new Sub(10,2));


//output -> 7 , 8

/* ************************************************************ */

// const obj=
// {
//     arr:[1,2,3,4,5,6],
//     show : function (){
//         console.log(arr);
//     }
// };

// function fun1()
// {

//     for(let i=0;i<this.arr[i].length;i++)
//    this.arr[i] = this.arr[i]*5
//  }

// fun1.call(obj);

// console.log(obj.show());


// output -> TypeError: Cannot read property '0' of undefined , dont undestand why i can't access array inside function

/* ************************************************************ */

//  APPLY

// const alpha=[1,2,3,4,5,6,7,8];

// const number=['a','b','c','d'];

// let newArray=alpha.concat.apply(alpha , number );

// console.log(newArray);   // OUTPUT -> [1,2,3,4,5,6,7,8,a,b,c,d]


/* ************************************************************ */
                // BIND 

   //  const Person{
    //     Name: 'kuldeep',
    //     lname:'singh',
    //      age: 22       
    // }
    // function details(){
    //     console.log(this.name+''+this.lname+''+this.age);
    // }
    // const newperson = Person.bind(details);
    // //newperson();                              // output :-> kuldeep , singh 22
    


