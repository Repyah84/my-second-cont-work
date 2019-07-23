  /**
     * slider
     */
    $('.slider').slick({
        infinite: true,
        prevArrow:".slider_button_prev",
        nextArrow:".slider_button_next",
        dots: true,
        speed: 300,
        autoplay:true,
        autoplaySpeed: '5000',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
          }
        }
      ]
      });
      $('.header_slider').slick({
        infinite: true,
        vertical:true,
        verticalSwiping:true,
        arrows: false,
        dotsClass:('header_slider_dots'),
        dots: true,
        autoplay:true,
        autoplaySpeed: '10000',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
/**
 * map
 */
    window.onload = function(){
        var map;
        var mapContainer = document.querySelector('.map');
        var mapCenter = {lat: -34.397, lng: 150.644};
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
            disableDefaultUI: true
        });
        var marker = new google.maps.Marker({
            position: mapCenter,
            map: map,
            icon: "img/marcer.svg"
        });

        var infowindow = new google.maps.InfoWindow({
            content: "Hello World"
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);   
        });
    };
/**
 * Scrol
 */
    $('.js-scroll').on('click','a', function () {
        var offset = $($(this).attr('href')).offset().top;
        $('html').stop().animate({scrollTop:offset}, 500, 'swing', function() {});
    });
/**
 * hover_nav
 */
    let linc = document.getElementsByClassName('logo_box_a');
        for(let x=0; x<linc.length; x++){
            if(linc[x].nodeType == 1){
                linc[x].addEventListener('mouseover', getBack)
                linc[x].addEventListener('mouseout', remuveback)  
            };
        };

        function getBack(){
            this.previousElementSibling.style.backgroundColor = '#ffffff';
            this.previousElementSibling.style.transition ='background ease 0.5s';
        }

        function remuveback(){
            this.previousElementSibling.style.backgroundColor = 'transparent';
        }