( function($) {

  'use strict';
  
  $( function() {
    
    //gallery
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      preloadImages: false,
      lazy: true,
      watchSlidesVisibility: true
      /*on: {
        init: function () {
          $( '.b-shops' ).addClass( 'i-swiper-init' );
        },
      }*/
    });
    
    //map
    ymaps.ready( function () {
      var shopDetailMap = new ymaps.Map( 'shopDetailMapID', {
        center: window.shopDetailMapCoords,
        zoom: window.shopDetailMapZoom || 9,
        controls: ['typeSelector', 'zoomControl']
    }, {
        // Зададим опции для элементов управления.
        typeSelectorFloat: 'left',
        zoomControlSize: 'small'
    }),
      
      shopDetailPlacemark = new ymaps.Placemark( shopDetailMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: window.shopDetailMapBalloonHref,
          // Размеры метки.
          iconImageSize: [43, 64],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-22, -64]
      });

      shopDetailMap.geoObjects.add( shopDetailPlacemark );
      
      if ( window.matchMedia( '(max-width: 1024px)' ).matches ) {
        shopDetailMap.behaviors.disable('drag');
      }
      
      
    });
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));