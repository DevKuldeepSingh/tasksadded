/*
       Date :- 16 / 02 / 2022
       Name :- kuldeep singh

1. Find second largest number from an array. solve this problem within O(n) time
2. Find an array contains dublicate number or not. solve this problem within O(n) time
3. Remove dublicated number from an array. solve this problem within O(n) time

*/


/*
function secondLargest(arr)
{
    let max=0 , smax=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
        smax=max;
        max=arr[i];
        }
        if(max>arr[i] && arr[i] > smax)
        smax=arr[i];
    }
    return smax;

}

let arr=[1,4,2,3,6,5];
console.log(secondLargest(arr));
*/

/*
function checkDuplicate1(arr)
{
    let ans ;
    for(var i=0;i<arr.length;i++)
    ans=ans^arr[i];
    if(ans==0)  return "array have an duplicate number";
    else  return "array have an not duplicate number";
}

let arr=[1,1,2,2,3,3,4,4,5,5];
console.log(checkDuplicate1(arr));

*/

/*
function checkDuplicate2(arr)
{
    let flag=0;
    let ans = new Array();
    for(let i=0;i<arr.length;i++)
        ans[i]=-1;

    for(let i=0;i<arr.length;i++)
    ans[arr[i]]++;
    
    for(let i=0 ; i<ans.length ; i++){
    if(ans[i]>0)
    flag=1;
    }
    if(flag==1) return "array have an duplicate number";
    else return "array have not an duplicate number "; 
}
let arr=[1,1,2,2,4,3,6,5,5]
console.log(checkDuplicate2(arr));
*/

/*
function removeduplicate1( arr )
{
    arr.sort();
    var ans = new Array();
    
    let k=0;
    for(let i=0; i<arr.length;i++)
    {
       if(arr[i]==arr[i+1]){
           ans[k]=arr[i+1];
           i++;
       }
       else ans[k]=arr[i];
           k++;
    }
    return ans
}

let arr=[1,2,3,4,2,5,3];
console.log(removeduplicate1(arr));
*/

/*
function removeduplicate2(arr)
{
   
    res = new Set(arr);
    return res;
}

var arr=[6,5,3,1,4,3,2];
console.log(removeduplicate2(arr));
*/