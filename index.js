$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav').addClass("scroll");
        }
        else{
            $('.nav').removeClass("scroll");
        }
    });

    $('.nav .btn').click(function(){
        $('.nav .menu').toggleClass("active");
    });

    $('.nav .menu li a').click(function(){
        $('.nav .menu').removeClass("active");
    });
    
    var typed = new Typed(".typing", {
        strings: ["Backend development","Frontend development","Embedded systems"],
        typeSpeed: 80,
        backSpeed: 20,
        loop: true
    });

});