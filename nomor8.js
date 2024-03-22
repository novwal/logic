let bb = 44; 
let tb = 148;
let imt = bb / (tb / 100) ** 2;
let kategori;

if (imt < 18.5) {
  kategori= 'berat badan kurang';
} else if (imt >= 18.5 && imt < 22.9) {
  kategori = 'normal';
} else if (imt >= 22.9 && imt < 24.9) {
  kategori = 'berat badan lebih';
} else {
  kategori = 'obesitas';
}

console.log('IMT Beni:', imt);
console.log('Beni termasuk dalam kategori:', kategori);