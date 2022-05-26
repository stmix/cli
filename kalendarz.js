function rokPrzestepny(rok)
{
  return ((rok % 4 == 0) && ((rok % 100 != 0) || (rok % 400 == 0)));
}
function printCalendar()
{
  data = new Date();

  var rok = data.getYear();
  if (rok < 1000) rok = 2000 + rok - 100;

  var miesiac = data.getMonth() + 1;
  var dzienTygodnia = data.getDay();
  var dzienMiesiaca = data.getDate();

  var tempDate = new Date(rok, miesiac - 1, 1);
  var pierwszyDzienMiesiaca = tempDate.getDay();

  if(dzienTygodnia == 0) dzienTygodnia = 7;
  if(pierwszyDzienMiesiaca == 0) pierwszyDzienMiesiaca = 7;

  switch(miesiac){
    case 1 : nazwaMiesiaca = "Styczen";
             dniWMiesiacu = 31;
             break;
    case 2 : nazwaMiesiaca = "Luty";
             dniWMiesiacu = rokPrzestepny(rok)?29:28;
             break;
    case 3 : nazwaMiesiaca = "Marzec";
             dniWMiesiacu = 31;
             break;
    case 4 : nazwaMiesiaca = "Kwiecien";
             dniWMiesiacu = 30;
             break;
    case 5 : nazwaMiesiaca = "Maj";
             dniWMiesiacu = 31;
             break;
    case 6 : nazwaMiesiaca = "Czerwiec";
             dniWMiesiacu = 30;
             break;
    case 7 : nazwaMiesiaca = "Lipiec";
             dniWMiesiacu = 31;
             break;
    case 8 : nazwaMiesiaca = "Sierpien";
             dniWMiesiacu = 31;
             break;
    case 9 : nazwaMiesiaca = "Wrzesien";
             dniWMiesiacu = 30;
             break;
    case 10 : nazwaMiesiaca = "Pazdziernik";
             dniWMiesiacu = 31;
             break;
    case 11 : nazwaMiesiaca = "Listopad";
             dniWMiesiacu = 30;
             break;
    case 12 : nazwaMiesiaca = "Grudzien";
             dniWMiesiacu = 31;
             break;
  }

  document.write("<TABLE border = 1 bgcolor='#cccccc' width='160px;'><TR>");
  document.write("<TD bgcolor='#444444' align='center' colspan='7'><font color='#ffffff'>");
  document.write(nazwaMiesiaca + " " + rok);
  document.write("</font></TD></TR><TR>");

  document.write("<TR>");
  document.write("<TD align='center' bgcolor='#303030'><font color='#ffffff'>Pn</font></TD>");
  document.write("<TD align='center' bgcolor='#303030'><font color='#ffffff'>Wt</font></TD>");
  document.write("<TD align='center' bgcolor='#303030'><font color='#ffffff'>Sr</font></TD>");
  document.write("<TD align='center' bgcolor='#303030'><font color='#ffffff'>Cz</font></TD>");
  document.write("<TD align='center' bgcolor='#303030'><font color='#ffffff'>Pi</font></TD>");
  document.write("<TD align='center' bgcolor='#303030'><font color='#ffffff'>So</font></TD>");
  document.write("<TD align='center' bgcolor='#303030'><font color='#ffffff'>Nd</font></TD>");
  document.write("</TR>");

  var j = dniWMiesiacu + pierwszyDzienMiesiaca - 1;

  for(var i = 0; i < j; i++){
    if(i < pierwszyDzienMiesiaca - 1){
      document.write("<TD bgcolor='#777777'></TD>");
      continue;
    }
    if((i % 7) == 0){
      document.write("</TR><TR>");
    }
    if((i - pierwszyDzienMiesiaca + 2) == dzienMiesiaca){
      color = "#222";
    }
    else{
      color = "#555555";
    }
    document.write("<TD bgcolor='" + color + "' align='center'><font color='#ffffff'>");
    document.write(i - pierwszyDzienMiesiaca + 2);
    document.write("</font></TD>");
  }
  document.write("</TR></TABLE>");
}


printCalendar();