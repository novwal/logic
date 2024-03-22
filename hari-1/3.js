let p = 13; 
let l = 9;

let luas = p * l;

let tipeRumah;
if (luas < 90) {
    tipeRumah = "36";
} else if (luas >= 90 && luas < 96) {
    tipeRumah = "45";
} else if (luas >= 96 && luas < 120) {
    tipeRumah = "54";
} else if (luas >= 120 && luas < 150) {
    tipeRumah = "60";
} else {
    tipeRumah = "70";
}

console.log(`Dengan luas tanah ${luas} m2, rumah Dani masuk ke dalam kategori tipe ${tipeRumah}.`);
