$(document).ready(function() {

    let chance = 3;
    let saveNumber = 0; //ini bedanya kalo 0 sama 7 apa? besok cari chatgpt oke NOTED!
    let numbers = [];
    let index = 0;

    let kesempatan = 3;
    let teksKesempatan = $('#kesempatan');

    //Membuat nomor acak
    function generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * 200) + 2;
        numbers[index] = randomNumber;
        index += 1; //increment
        return randomNumber;
    }

    // Menjalankan atau menampilkan fungdi generateRandomNumber diatas
    $('button').show(function() {
        var randomNumber = generateRandomNumber();
        $(this).text(randomNumber);
    });

    // Membuat tombol berubah warna ketika kursor diatas objek
    $('button').mouseenter(function() {
        $(this).css('background-color', 'blue');
        $(this).css('color', 'white');
    });

    // Warna asli object jika tidak tersentuh kursor
    $('button').mouseleave(function() {
        $(this).css('background-color', 'aqua');
        $(this).css('color', 'black');
    });

    //Memeriksa apakah teks pada tombol yang diklik sama dengan saveNumber
    $('button').click(function(e) {
        if($(this).text() == saveNumber) {
            var konfirmasi = confirm("Anda Berhasil! Mau Coba Lagi?");
                if (konfirmasi) {
                    location.reload();
                } else {
                    window.close();
                }
        } else {
            $(this).hide();
            chance -= 1;
            if(chance == 0)
            {
                var konfirmasi = confirm("Anda Gagal! Mau Coba Lagi?");
                if (konfirmasi) {
                    location.reload();
                } else {
                    window.close();
                }
            }
        }
    });

    // Menyimpan nilai acak pada variabel saveNumber
    saveNumber = numbers[Math.floor(Math.random() * 15)];
        console.log(saveNumber);

    // Keterangan kesempatan masih ada atau tidak? hehe
    $('button').click(function() {
        if (kesempatan > 0) {
            kesempatan--;
            teksKesempatan.text('Kesempatan anda : ' + kesempatan + ' kali');
        } else {
            teksKesempatan.text('Kesempatan anda telah habis');
        }
    });

});

// Ulya Ghani - 8 Maret 2024