let mtk = 83;
let bing = 86;
let indo = 87;
let umur = 100 / 4;
let ratarata = 85;

let rata = (mtk + bing + indo) / 3; 

if(umur >= 16 && umur <= 25) {
    if (rata >= ratarata) {
        if (mtk >= 87) { 
            if (indo >= 85) {
                console.log("terpenuhi");
            } else {
                console.log('tidak terpenuhi');
            }
        } else {
            console.log('tidak terpenuhi');
        }
    } else {
        console.log('tidak terpenuhi');
    }
} else {
    console.log('tidak terpenuhi');
}
