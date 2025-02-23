// array , map ,filter , reduce , slice , split , shift , unshift .
 
//1: map


//  const arr=[1,2,3,4,5,6];
//  const newArray=arr.map( (items)=>{ return items*2 } );
//  console.log('original array is :->    '+arr);
//  console.log('modified  array is :->    '+newArray);

/* *************************************************************************** */

// const arr =[
//     { id:'1', name:'reeturaj' }
//     {id:'2', name:'shubhankr'},
//     {id:'3', name:'vashu'}
// ]

// const newArray1=arr.map( items  => { return items.name });

// console.log(newArray1);   


// const newArray2=arr.map(({ id , name } ) => ( { [id] : name }) );

// console.log(newArray2);

/* *************************************************************************** */

// const arr=['this','is ','kd','singh'];

// const newArray = arr.map( (str , index ) => { if(index > 1 ) return str}  );

// console.log(newArray);
// console.log( newArray.slice(2,4));

/* *************************************************************************** */


//  const obj = [1,2,3,4,5,6];

//  const newArray= obj.map(items => items%2==0 );

//  console.log(newArray);


// const cityname=[
//     'noida ',
//     'greater-noida',
//     'delhi',
//     'bulandshahr',
//     'merrrut'
// ];


// let newArray=cityname.map( items => items.length);

/* *************************************************************************** */

// const arr=[
//     {id : 1 , name :'reeturaj'},
//     {id:  2 , name: 'subhankar'},
//     {id : 3 , name : 'vashu'} , 
//     {id : 4 , name : 'chetanya'}
//     ];
    
//     const newArray=arr.map( id =>{ id['isWork']='completed';
    

//     return id;
        
//     }); 
    
//     console.log(newArray);



/* *************************************************************************** */

// splice 

// console.log(color.splice(0,0,'blue'));
// console.log(color.splice(1,0,'blue'));
// console.log(color.shift());
// console.log(color.splice(3,0,'pink'));
// console.log(color);
// console.log(color.splice(5,0,'pink'));
// console.log(color);


// split

// const color =['red','yelow','greeen','black'];
// console.log(color.slice());
// console.log(color.slice(1,3));
// console.log(color.slice(3,5));
// console.log(color.slice(2));
// console.log(color.slice(-2))
// console.log(color.slice(-1))
// console.log(color.slice(-2,-1))



// 2 : filter 

// let arr=[1,2,3,4,5,6];

// const newArray = arr.filter( item =>  item < 4);

// console.log(newArray);

/* *************************************************************************** */

// let arr=[1,2,3,4,5,6];

// const temp = arr.filter((item)=>item%2==0)
// console.log(temp);

/* *************************************************************************** */


// let arr=[
//     {id:1},
//     {id:NaN},
//     {id:3},
//     {id:undefined}
// ];


// function filterid(item)
// {
//     if(item.id == undefined || item.id == NaN)
//     return false ;
//     return true;
// }

// let newArr = arr.filter(filterid)

// console.log(newArr);


/* *************************************************************************** */

// let arr=['this ','is','kd','singh'];

// function searchfilter(item)
// {
//     for(let i=0;i<arr.length;i++){
//     if(arr[i]=='kd')
//     return true;
//     }
    
//     return false;
// }

// let newArray= arr.filter(searchfilter);

// console.log(newArray);

// 

/* *************************************************************************** */

//   reduce

// const array1 = [1, 2, 3, 4];


// const iValue = 0;
// const sum = array1.reduce(
//   (pValue, cValue) => pValue * cValue,
//   iValue
// );

// console.log(sum);

/* *************************************************************************** */

// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue.x
// }, initialValue)

// console.log(sum);

/* *************************************************************************** */

// const arr=[1,2,3,4,5,6];

// function checkReduce(currValue , prevValue , index , arr  )
// {
//     const ans =  prevValue + currValue ;
    
//     console.log(` currValue: ${currValue} , prevValue: ${prevValue} , arr: ${arr} index: ${index} `);
    
//     return  ans;
// }

// arr.reduce( checkReduce );