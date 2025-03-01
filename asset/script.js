$('.tombol').click(function() {
    // animate content
    $('.halaman').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.halaman').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.halaman').removeClass('fadeIn');
    }, 1100);
});


$('.tombol2').click(function() {
    // animate content
    $('.halaman').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.halaman').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.halaman').removeClass('fadeIn');
    }, 1100);

});


$('.kehome').click(function() {
    setTimeout(function() {
        $('.home').addClass('fadeIn');
    }, 1100);

    PuterLagu();
});


$('.kehalaman2').click(function() {
    setTimeout(function() {
        $('.halaman2').addClass('fadeIn');
    }, 1100);

    // Delay 4 detik sebelum memulai fungsi JalaninTeks()
    setTimeout(JalaninTeks, 4000);
    PuterLagu();
});

var i = 0;
var txt = "Hari ini, genap 4 bulan kita bersama. Aku tahu kadang emosimu bisa berubah-ubah, tapi justru itulah yang membuat hubungan kita lebih kuat. Setiap emosi, tawa, dan tangis telah memperkuat cinta kita. Aku sangat bersyukur memiliki kamu di hidupku dengan segala keunikan dan keindahanmu. Terima kasih telah menjadi bagian penting dalam hidupku. Aku mencintaimu dengan sepenuh hati dan akan selalu ada untukmu. Happy 4th monthversary, sayangku!Dengan cinta,[Rakha Adyatama]  I Love You";
var speed = 100;

function JalaninTeks() {
    if (i < txt.length) {
        document.getElementById("tekss").innerHTML += txt.charAt(i);
        i++;
        setTimeout(JalaninTeks, speed);
    }
};


function PuterLagu() {
    var lagu = document.getElementById("lagu");
    return lagu.paused ? lagu.play() : lagu.pause();
};
