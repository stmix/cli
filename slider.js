$( function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical-align",
      range: "min",
      min: 0,
      max: 260,
      value: 0,
      slide: function( event, ui ) {
	$( "#amount" ).val( ui.value);
	var wartosc = $( "#amount" ).val();
	$( "#wysw" ).html(wartosc);
	sessionStorage.setItem('predkosc', wartosc);
	$( "#wskazowka" ).css("transform", "rotate("+wartosc+"deg)");
	$( "#auto" ).css("transition", 130/wartosc+"s"+" ease" );
	if(wartosc==0) $( "#auto" ).css("transition", 999999+"s"+" ease" );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
  } );