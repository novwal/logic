let tahun = new Date().getFullYear();
let peserta = 122;
let pendidikan = "SMA/SMK/MA";
let lomba = "01W";

function generateNomor(urutan, kategori, karakter, tahun) {
    let tahunPelajaran = tahun.toString().substr(-2);
    let nomor;
    let tingkatPendidikan;

    if (tingkatPendidikan === "SMP") {
        karakter = "P";
    } else if (tingkatPendidikan === "SMA/SMK/MA") {
        karakter = "A";
    } else {
        tingkatPendidikan = "Tingkat pendidikan tidak valid";
    }

    if (kategori === "01W") {
        nomor = `${urutan}-${kategori}-${karakter}-${tahunPelajaran}`;
    } else if (kategori === "02A") {
        nomor = `${urutan}-${kategori}-${karakter}-${tahunPelajaran}`;
    } else if (kategori === "03G") {
        nomor = `${urutan}-${kategori}-${karakter}-${tahunPelajaran}`;
    } else {
        nomor = "Kategori lomba tidak valid";
    }

    return `Nomor Eko: ${nomor}, Tingkat Pendidikan: ${tingkatPendidikan}`;
}

let nomorEko = generateNomor(peserta, lomba, pendidikan, tahun);

console.log(nomorEko);
