$( function() {
    $( "#button" ).on( "click", function() {
      $( ".autoL" ).switchClass( "autoL", "autoP");
      $( ".autoP" ).switchClass( "autoP", "autoL");
    });
  } );