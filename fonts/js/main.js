$('.carousel').carousel({
    interval: 5000
});

function myMap() {
    var myCenter = new google.maps.LatLng(42.6738245, 23.3281539);
    var mapCanvas = document.getElementById("googleMap");
    var mapOptions = {
        center: myCenter,
        zoom: 16
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
};

function showMoreAboutMicrobleiding() {
    $('#cosmetics-content').load('../CosmeticsPages/microbleiding.html',
        function (res) {
            $('html, body').animate({
                scrollTop: $("#micro").offset().top
            }, 1000);
        });
};

function showMoreAboutLashes() {
    $('#cosmetics-content').load('../CosmeticsPages/lashes.html',
        function (res) {
            $('html, body').animate({
                scrollTop: $("#lashes").offset().top
            }, 1000);
        });
};

function showMicrobleidingImgs() {
    $('#cosmetics-content').load('../CosmeticsPages/microbleidingGallery.html',
        function (res) {
            $('html, body').animate({
                scrollTop: $("#microbleiding-gallery").offset().top
            }, 1000);
        });
};

$(function () {
    var btn = $(".slider__btn");

    btn.on("click", function () {
        $(".slider__item").first().clone().appendTo(".slider");
        $(".slider__image").first().css({
            transform: "rotateX(-180deg)",
            opacity: 0
        });
        setTimeout(function () {
            $(".slider__item").first().remove();
        }, 200);
    });
});

function showPrices() {
    $('#cosmetics-content').load('../CosmeticsPages/pricelist.html',
        function (res) {
            $('.modal').css('display', 'block');

        });
    
    $(window).onclick = function (event) {
        if (event.target == $('#price-list')) {
            $('#price-list').css('display', 'none');

        }
    }
}