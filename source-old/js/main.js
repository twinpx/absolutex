if ( document.getElementById( 'viewCounter' )) {
  $.ajax({
    url: $( '#viewCounter' ).data( 'url' ),
    type: 'GET',
    dataType: "json",
    success: function(data) {},
    error: function (a, b, c) {
      if ( window.console ) {
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
  });
}