let uang = 154000;
let hasil;
let total;

if (uang > 100000) {
    hasil = (uang / 100) * 7;
    total = uang - hasil;
} else {
    hasil = 154000;
}

console.log(total);