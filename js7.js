let terms = 10;
let a = 0, b = 1;

for (let i = 1; i <= terms; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
