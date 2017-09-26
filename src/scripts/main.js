//**jquery**//
$(document).ready(function(){
    $('.product__slides').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        centerPadding: '30px',
        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
        // centerMode:true
        // speed: 300,
        // autoplay:true
    });

    $('.article-slides').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
        // centerMode:true
        // speed: 300,
        // autoplay:true
    });

    //**back to top**//
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 300 ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });
    //
    $('a.back-to-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    //**accordions**//
    $('.more__detailsProduct').click(function(){
        $('.category-show').slideToggle(300);
        $(this).find('.rotate').toggleClass('rotate180');
    });
    $('.read__more').click(function(){
        // $('.hidden_readmore').slideToggle(300);
        $(this).siblings(".hidden_readmore").slideToggle(250);
        $(this).find('.rotate').toggleClass('rotate180');
    });
    $('.more__productReviews').click(function(){
        $('.category-showReview').slideToggle(300);
        $(this).find('.rotate').toggleClass('rotate180');
    });

//**bootstrap tabs**//
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });

//**save select car in localStorage**//
    (function(){
        var select = document.getElementById('Product__car');
        if (localStorage.city) {
            select.value = localStorage.Product__car;
        }
        select.onchange = function() {
            localStorage.Product__car = this.value;
        }
    })()

    //** 3D View slider **//
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager',
        minSlides: 1,
        maxSlides: 1,
        // slideMargin: 15,
        controls: false,
        video: true,
        easing: 'linear',
        mode: 'fade'
    });

});






//**javascript**//
//tabs menu //
function openTabs(event, tabsName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabsName).style.display = "block";
    event.currentTarget.className += " active";
}
document.getElementById("defaultCharacteristics").click();

//accordion//
var BtnClickHandler = document.getElementsByClassName('table-productContent__more_characteristics');
for(var i = 0; i < BtnClickHandler.length; i++) {
    BtnClickHandler[i].onclick = function() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
        event.target.getElementsByClassName('rotate')[0].classList.toggle('down');
    }
}


var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'dN909P5RlCQ',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.btn-video').fadeIn('normal');
    }
}

$(document).on('click', '.btn-video', function () {
    $(this).fadeOut('normal');
    player.playVideo();
});


// ** global variable for the secondplayer ** //
var secondplayer;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    secondplayer = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}
 onPlayerReady = function (event) {
     if (event.data == YT.PlayerState.ENDED) {
         $('#playYoutube').fadeIn('normal');
     }
 }

 $(document).on('click', '#playYoutube', function () {
     $(this).fadeOut('normal');
     secondplayer.playVideo();
 });





