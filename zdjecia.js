t = ['img/zdj0.jpg','img/zdj1.jpg','img/zdj2.jpg','img/zdj3.jpg','img/zdj4.jpg','img/zdj5.jpg','img/zdj6.jpg','img/zdj7.jpg', 'img/zdj8.jpg'];
previous = -1;

function zdjecie(nr)
{
	if(previous!=nr && previous>=0) usunObrazek(previous);
	rekord = document.getElementById("rek"+nr);
	var div = document.createElement("div");
	var img = document.createElement("img");
	img.src = t[nr];
	img.alt = "zdjecie zwiazane z rekordem";
	img.style.width = '300px';
	div.appendChild(img);
	rekord = document.getElementById("rek"+nr);
	rekord.appendChild(div);
	rekord.setAttribute('onclick','usunObrazek('+nr+')');
	previous=nr;
}

function usunObrazek(nr)
{
	rekord = document.getElementById('rek'+nr);
	rekord.removeChild(rekord.childNodes[1]);
	rekord.setAttribute('onclick','zdjecie('+nr+')');
	previous=-1;
}