function wczytajKolor()
{
	kolor_tla = document.getElementById('kolor-tla-wybor');
	kolor_tla.addEventListener('change', zmianaKoloruTla);
}

function zmianaKoloruTla()
{
	var kolor = kolor_tla.value;
	localStorage.setItem('kolorZapis', kolor);
	var elementy = document.getElementsByClassName('colored');
	for(var i = 0; i < elementy.length; i++)
	{
		elementy[i].style.backgroundColor = kolor;
	}
}

function wczytajKolorBiezacy()
{
	var kolorBiezacy = localStorage.getItem('kolorZapis');
	var elementy = document.getElementsByClassName('colored');
	for(var i = 0; i < elementy.length; i++)
	{
		elementy[i].style.backgroundColor = kolorBiezacy;
	}
}

function defaultColor()
{
	localStorage.setItem('kolorZapis', "#d77f20");
}