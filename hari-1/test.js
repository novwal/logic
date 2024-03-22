let nilai = 85;
let hasil;

switch (true) {
    case (nilai > 90):
        hasil = 'lulusan terbaik';
        break;
    case (nilai >= 60 && nilai <= 90):
        hasil = 'lulus';
        break;
    case (nilai < 60):
        hasil = 'tidak lulus';
        break;
    default:
        hasil = 'Nilai tidak valid';
}

console.log(hasil);
