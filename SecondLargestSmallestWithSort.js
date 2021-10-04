var array = [];
var minValue=100;
var maxValue=999;		
for(let i=0;i<10;i++)
{
    array.push(Math.floor(Math.random()*(maxValue-minValue+1)+minValue));
}
array.sort((x,y)=>x-y);
console.log("The sorted array generated is: "+ array);
let arr = array;
let max = Math.max.apply(null, arr); // get the max of the array
arr.splice(arr.indexOf(max), 1); 
console.log("Second Largest element: "+Math.max.apply(null, arr));//To get second largest element
let min = Math.min.apply(null,arr)//get the min of the array
arr.splice(arr.indexOf(min),1)
console.log("Second Smallest element: "+Math.min.apply(null,arr));//To get second smallest element