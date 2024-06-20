var input = document.getElementById("temp-input");
var output = document.getElementById("temp-result");
var method = document.getElementById("conversion-result"); 
let temp;

function convert() {
    if ( temp = Number(input.value)) {
        output.textContent = temp * 9 / 5 + 32;
        method.textContent = "("+temp + "°C x 9/5) + 32 = " + output.textContent + "°F";
    
    } else {
        alert("Tolong masukkan angka!");
    }
}

function reset() {
    document.getElementById("temp-input").value = "";
    document.getElementById("temp-result").value = "";
    document.getElementById("conversion-result").value = "";
}

function reverse() {
    
}
