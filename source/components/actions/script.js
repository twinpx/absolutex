( function($) {

  'use strict';
  
  $( function() {
    
    $( '.b-actions-item__img span' ).lazyload();
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));