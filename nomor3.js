let nilai = 85;
let hasil;

switch (true) {
    case (nilai > 90):
        hasil = 'A';
        break;
    case (nilai > 75):
        hasil = 'B';
        break;
    default:
        hasil = 'C';
}

console.log(hasil);