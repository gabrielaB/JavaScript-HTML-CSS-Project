$('.carousel').carousel({
    interval: 5000 
});

function myMap() {
  var myCenter = new google.maps.LatLng(42.6738245,23.3281539);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom: 16};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
};

function showMoreAboutMicrobleiding() {
    $('#cosmetics-content').load('../CosmeticsPages/microbleiding.html', 
        function(res){
            $('html, body').animate({
                scrollTop: $("#micro").offset().top
            }, 1000);
        });
};

function showMoreAboutLashes(){
    $('#cosmetics-content').load('../CosmeticsPages/lashes.html', 
        function(res){
            $('html, body').animate({
                scrollTop: $("#lashes").offset().top
            }, 1000);
        });
};
