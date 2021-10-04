/* Program to find second largest and smallest element by:
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
*/

var array = [];
var minValue=100;
var maxValue=999;		
for(let i=0;i<10;i++)
{
    array.push(Math.floor(Math.random()*(maxValue-minValue+1)+minValue));
}
console.log("The array generated is: "+ array);
let arr = array;
let max = Math.max.apply(null, arr); // get the max of the array
arr.splice(arr.indexOf(max), 1); 
console.log("Second Largest element: "+Math.max.apply(null, arr));//To get second largest element
let min = Math.min.apply(null,arr)//get the min of the array
arr.splice(arr.indexOf(min))
console.log("Second Smallest element: "+Math.min.apply(null,arr));//To get second smallest element