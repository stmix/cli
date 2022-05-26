var rand= "0";
var prev = "1";
$( function() {
    $( "#losuj" ).on( "click", function() {
		while(rand==prev)
		{
			rand = Math.floor(Math.random()*12);
		}
		$( "#los" ).html(t[rand]);
		prev=rand;
    });
  } );