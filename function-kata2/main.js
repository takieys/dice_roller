function add(a, b) {
  return a + b;
}

let sum = add(2, 4);
console.log(sum);

function mulitply(a, b) {
  let answer = 0;
  let count = 0;
  while (count < b) {
    answer = add(a, answer);
    count = count + 1;
  }
  return answer;
}

let product = mulitply(6, 4);
console.log(product);

function power(a, b) {
  let answer = 1;
  let count = 0;
  while (count < b) {
    answer = mulitply(a, answer);
    count = count + 1;
  }
  return answer;
}

let root = power(2, 8);
console.log(root);

function factorial(a) {
  let answer = 1;
  let count = 0;
  while (count < a) {
    answer = mulitply(a - count, answer);
    count = count + 1;
  }
  return answer;
}

let factor = factorial(5);
console.log(factor);

// function fibaonacci(a) {
//   let answer = 0;
//   let count = 0;
//   while (count < a) {
//     answer = add(a + count);
//     count = count + 1;
//   }
//   return answer;
// }

// let fib = fibaonacci(8);
// console.log(fib);
