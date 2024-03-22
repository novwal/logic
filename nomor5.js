let hasil = [];
for (let a = 1; a <= 25; a++) {
  if (a % 4 === 0 || a % 5 === 0) {
    hasil.push(a);
  }
}
console.log(hasil);
