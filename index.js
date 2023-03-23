
function hitungBMI() {
    // input values
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const gender = document.querySelector('input[type="radio"]:checked').value;
    

    
    let bmi;
    if (gender === "laki") {
      bmi = 1.0 * berat / Math.pow(tinggi / 100, 2);
    } else {
      bmi = 0.9 * berat / Math.pow(tinggi / 100, 2);
    }
    
    const resultElement = document.getElementById("hasil");
    resultElement.textContent = bmi.toFixed(2);

    const diagnosa = document.getElementById("diagnosa");
    if (bmi < 18.5) {
        diagnosa.innerText = 'kekurangan berat badan';
    } else if (bmi < 25.0 ){
        diagnosa.innerText = 'berat badan normal';
    } else if (bmi < 30.0 ){
        diagnosa.innerText = 'kelebihan berat badan';
    } else {
        diagnosa.innerText = 'obesitas';
    }


}