function wczytajPredkoscBiezaca()
{
		var predkoscBiezaca = sessionStorage.getItem('predkosc');
		if(predkoscBiezaca<1) predkoscBiezaca = 0;
		var wartosc = predkoscBiezaca;
		document.getElementById('wysw').innerHTML = wartosc;
		document.getElementById('wskazowka').style.transform = "rotate("+wartosc+"deg)";
		if(wartosc!=0) document.getElementById( 'auto' ).style.transition = 130/wartosc+"s"+" ease";
		if(wartosc==0) document.getElementById( 'auto' ).style.transition = 999999+"s"+" ease";
}
