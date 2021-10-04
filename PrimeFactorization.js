//Prime Factorization Program to store all prime factors of a number into array
let num = process.argv[2];
let arr = [];
for (let i = 2; i*i < num; i++) {
  while (num % i == 0) {
    arr.push(i);
    num = num / i;
  }
}
if (num > 2) {
  arr.push(num);
}
arr.forEach((result) => {
    console.log(result);
});