function hitungBahanBakar() {
    let bahanBakar = 10; 
    let totalBahanBakar = bahanBakar; 
    for(let i = 2; i <= 100; i++) {
        bahanBakar *= 0.8; 
        totalBahanBakar += bahanBakar;
    }

    console.log(`Total bahan bakar yang dihabiskan setelah mencapai 100km adalah ${totalBahanBakar.toFixed(2)} kg.`);
}

hitungBahanBakar();
