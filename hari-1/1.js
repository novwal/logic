let tahun = 2024;
let andi = 16;
let Undi = tahun - andi;
let beni = andi + 3;
let Uben = tahun - beni;
let eko = beni - 5;
let Uko = tahun - eko;
let dani = beni - 3;
let Udan = tahun - dani;
let hasil;

function cekKabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
        return "tahun kabisat";
    } else {
        return "bukan tahun kabisat";
    }
}

console.log(`Umur Andi pada tahun ${tahun} adalah ${Undi} tahun, lahir pada tahun ${Undi}, ${cekKabisat(Undi)}`);
console.log(`Umur Beni pada tahun ${tahun} adalah ${Uben} tahun, lahir pada tahun ${Uben}, ${cekKabisat(Uben)}`);
console.log(`Umur Eko pada tahun ${tahun} adalah ${Uko} tahun, lahir pada tahun ${Uko}, ${cekKabisat(Uko)}`);
console.log(`Umur Dani pada tahun ${tahun} adalah ${Udan} tahun, lahir pada tahun ${Udan}, ${cekKabisat(Udan)}`);
