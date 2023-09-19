function tambah() {
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);
    let hasil = angka1 + angka2;
    document.getElementById('hasil').value = hasil;
}

// Mendefinisikan fungsi untuk operasi pengurangan
function kurang() {
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);
    let hasil = angka1 - angka2;
    document.getElementById('hasil').value = hasil;
}

// Mendefinisikan fungsi untuk operasi perkalian
function kali() {
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);
    let hasil = angka1 * angka2;
    document.getElementById('hasil').value = hasil;
}

// Mendefinisikan fungsi untuk operasi pembagian
function bagi() {
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);
    let hasil = angka1 / angka2;
    document.getElementById('hasil').value = hasil;
}

function modulo() {
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);
    let hasil = angka1 % angka2;
    document.getElementById('hasil').value = hasil;
}

function clearInput() {
    document.getElementById('angka1').value = '';
    document.getElementById('angka2').value = '';
    document.getElementById('hasil').value = '';
}



