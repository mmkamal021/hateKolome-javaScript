var a = 10;
var b = 30;
var c = 15;

result = a + ((b * c) % a);
console.log(result);

var x = 10;
var y = 10;
x++;
++y;
console.log(x);
console.log(y);

var myAge = 20;
if (myAge >= 10) {
  console.log("Checked!");
}

// Max with if else
var a = 20;
var b = 15;
var c = 25;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}
// Max and Min with arr
const arr = [-7, -10, 8, 6, 5, 4];

let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log("Max element is: " + max);
console.log("Min element is: " + min);
