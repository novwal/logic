let jamMenitMulai = "10:35";
let jamMenitSelesai = "11:40";
let selisihWaktu = hitungSelisihWaktu(jamMenitMulai, jamMenitSelesai);

function hitungSelisihWaktu(jamMenitMulai, jamMenitSelesai) {
    let [jamMulai, menitMulai] = jamMenitMulai.split(':');
    let [jamSelesai, menitSelesai] = jamMenitSelesai.split(':');
    let selisihJam = jamSelesai - jamMulai;
    let selisihMenit = menitSelesai - menitMulai;
    if (selisihMenit < 0) {
        selisihJam--;
        selisihMenit += 60;
    }
    let hasil = {jam: selisihJam, menit: selisihMenit};
    return hasil;
}

console.log(`Selisih waktu: ${selisihWaktu.jam} jam ${selisihWaktu.menit} menit`);
