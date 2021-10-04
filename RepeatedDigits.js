//Consider range from 0 – 100, find the digits that are repeated twice and store them in an array
function reverseDigits(number) 
{
    let rev = 0;
    let digit;
    while (number > 0) 
    {
      digit = (number % 10)
      rev = rev * 10 + digit;
      number = Math.floor(number / 10);
    }
    return rev;
}
arr = [];
for (let i = 0; i <= 100; i++) 
{
    if (i == reverseDigits(i) && i > 10) 
    {
      arr.push(i);
    }
}
console.log(arr);