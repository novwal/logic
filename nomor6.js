function count() {
  let nomor = [];
  for (let i = 3; i <= 30; i += 3) {
    if (90 % i === 0) {
      nomor.push(i);
    }
  }
  console.log('Angka yang bisa dibagi dengan 90:', nomor);
  return nomor.length / 10;
}

const kemungkinan = count();
console.log('Kemungkinan 90 dibagi habis dengan bilangan kelipatan 3 sampai 30:', kemungkinan);
