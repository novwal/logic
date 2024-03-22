function konversiWaktu(detik) {
    let jam = Math.floor(detik / 3600);
    let sisaDetik = detik % 3600;
    let menit = Math.floor(sisaDetik / 60);
    let detikAkhir = sisaDetik % 60;
  
    return `${jam} jam ${menit} menit ${detikAkhir} detik`;
}
  
const detik = 12345;
const waktu = konversiWaktu(detik);
  
console.log(`Waktu ${detik} detik sama dengan ${waktu}`);
  