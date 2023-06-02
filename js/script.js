$(function () {
  // jumbotron
  $(".scroll-page").on("click", function () {
    //    menampilkan isi href (isinya id) yg mempunyai class .scroll-page ()
    var tampilkan = $(this).attr("href");

    // menampilkan elemen yang berisi dari href yaitu id
    var tampilkansection = $(tampilkan);

    // scrollTop= hasil jarak yang di scroll, offset hasil jarak yang pasti sesuai letak element
    // $("html").scrollTop(tampilkansection.offset().top); //jarak kerjanya sama dengan link href

    // console.log(tampilkansection.offset().top);
    // e.preventDefault();

    $("html").animate(
      {
        scrollTop: tampilkansection.offset().top - 50,
      },
      1000,
      "easeOutExpo"
    );
  });
 
  // about
  $(window).on("load", function () {
    $(".pKiri").addClass("pmuncul");
    $(".pKanan").addClass("pmuncul");
  });

  // portfolio
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $(".jumbotron img").css({
      transform: "translate(0px, " + wScroll / 2.5 + "%)",
    });
    $(".jumbotron h1").css({
      transform: "translate(0px, " + wScroll / 1.1 + "%)",
    });
    $(".jumbotron p").css({
      transform: "translate(0px, " + wScroll / 0.4 + "%)",
    });

    if (wScroll > $(".portfolio").offset().top - 240) {
      $(".portfolio .thumbnail").each(function (i) {
        setTimeout(function () {
          $(".portfolio .thumbnail").eq(i).addClass("muncul");
        }, 300 * i);
      });
    }
  });
}); 
