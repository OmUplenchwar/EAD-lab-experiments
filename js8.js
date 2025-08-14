let numCount = 123456;
let count = 0;

while (numCount > 0) {
    count++;
    numCount = Math.floor(numCount / 10);
}
console.log("Number of digits:", count);
