// Modifikasi JavaScript untuk kalkulator fullbutton
        // Buat variabel global untuk menyimpan ekspresi matematika yang akan dihitung
        let mathExpression = "";

        // Fungsi untuk menambahkan nilai ke tampilan
        function appendToDisplay(value) {
          mathExpression += value;
          document.getElementById("display").value = mathExpression;
        }

        // Fungsi untuk menghapus tampilan
        function clearDisplay() {
          mathExpression = "";
          document.getElementById("display").value = "";
        }

        // Fungsi untuk menghitung hasil ekspresi matematika
        function calculateResult() {
          try {
            const result = eval(mathExpression);
            document.getElementById("display").value = result;
            mathExpression = result.toString(); // Simpan hasil sebagai ekspresi baru jika ingin melanjutkan perhitungan
          } catch (error) {
            document.getElementById("display").value = "Error";
            mathExpression = ""; // Hapus ekspresi jika terjadi kesalahan
          }
        }