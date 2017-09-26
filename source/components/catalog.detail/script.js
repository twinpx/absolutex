( function($) {

  'use strict';
  
  $( function() {
  
    $( '.b-catalog-detail__info' ).each( function() {
      
      var $info = $( this );
      var $oldPrice = $info.find( '.b-catalog-detail__old-price' );
      var $discount = $info.find( '.b-catalog-detail__discount' );
      var $price = $info.find( '.b-catalog-detail__price' );
      var $order = $info.find( '.b-catalog-detail__order' );
      var $orderNum = $order.find( '.b-catalog-detail__order-num' );
      var $button = $info.find( '.bj-cart-button' );
    
      $info.delegate( '.b-catalog-detail__sizes-item:not( .i-disabled )', 'click', function() {
      
        var $item = $( this );
        
        //highlight the item
        $item.toggleClass( 'i-active' );
        
        //set price
        if ( $item.hasClass( 'i-active' )) {
          $oldPrice.find( 's' ).text( $item.data( 'oldprice' ));
          $discount.find( 'span' ).text( $item.data( 'discount' ));
          $price.text( $item.data( 'price' ));
        }
        
        var l = $info.find( '.i-active' ).length;
        
        //set default price
        if ( !l ) {
          $oldPrice.find( 's' ).text( $info.data( 'oldprice' ));
          $discount.find( 'span' ).text( $info.data( 'discount' ));
          $price.text( $info.data( 'price' ));
          //hide num
          $order.hide();
          //hide button
          $button.addClass( 'i-disabled' );
        } else {
          //show num
          $order.show();
          //show button
          $button.removeClass( 'i-disabled' );
          //set num
          $orderNum.text( l + ' ' + sizeWord( l ));
        }
        
      });
      
    });
    
    $( '.bj-cart-button' ).click( function(e) {
      e.preventDefault();
      
      var $button = $( this );
      var url = $button.data( 'ajax-url' );
      var data = {};
      data.id = [];
      
      if ( $button.hasClass( 'i-disabled' )) {
        return;
      }
      
      $button.closest( '.b-catalog-detail__info' ).find( '.i-active' ).each( function() {
        data.id.push( $( this ).data( 'id' ));
      });
      
      $.ajax({
        url: $button.data( 'ajax-url' ),
        type: $button.data( 'ajax-method' ),
        dataType: "json",
        data: data,
        success: function(data) {
          if ( data.STATUS && data.STATUS === 'OK' ) {
          
            if ( data.NUM ) {
              $( '#bx_cart_num' ).text( data.NUM );
            }
            
          }
        },
        error: function (a, b, c) {
          if ( window.console ) {
            console.log(a);
            console.log(b);
            console.log(c);
          }
        }
      });
    });

    //collapse detailed info blocks
    $('.item-details-accordeon .collapsing-block').not(':first').addClass('closed');
    $('.item-details-accordeon .collapsing-block').on('click', '.h3', function() {
      $(this).parent('.collapsing-block').toggleClass('closed');
    });
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });
  
  function sizeWord( num ) {
    if ( /(10|11|12|13|14|15|16|17|18|19)$/.test(num)) {return 'размеров';}
    else if (/.*1$/.test(num)) {return 'размер';}
    else if (/[2-4]$/.test(num)) {return 'размера';}
    else {return 'размеров';}
  }

}( jQuery ));