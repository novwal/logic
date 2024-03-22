function countGaji(golongan, jamKerja) {
  const upah = [3000, 3500, 4000, 5000];
  let gajiBiasa = 0;
  let gajiLembur = 0;
  let total = 0;

  if (jamKerja <= 40) {
    gajiBiasa = jamKerja * upah[golongan - 1];
  } else {
    gajiBiasa = 40 * upah[golongan - 1];
    gajiLembur = (jamKerja - 40) * upah[golongan - 1] * 1.5;
  }

  total = gajiBiasa + gajiLembur;
  return total;
}

const golongan = [1, 2, 3, 4];
const jamKerja = 45;
const gaji = [];

for (let i = 0; i < golongan.length; i++) {
  gaji.push(countGaji(golongan[i], jamKerja));
}

console.log(`Gaji mingguan karyawan dengan golongan ${golongan} dan jam kerja ${jamKerja} adalah ${gaji}`);
