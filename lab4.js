//van Daniel 't Lam pizza calculator versie 1'

alert('hoi');

const smallPizza = 4;
const mediumPizza = 8;
const largePizza = 13;
const smallDrankje= 2.5;
const mediumDrankje = 3;
const largeDrankje = 4;


var smallpizza = prompt("hoeveel small pizza's wilt u bestellen");//de variable en de vragen die gesteld worden
var mediumpizza = prompt("hoeveel medium pizza's wilt u bestellen");
var largepizza = prompt("hoeveel large pizza's wilt u bestellen");
var smalldrankje = prompt("hoeveel small drankjes wilt u bestellen");
var mediumdrankje = prompt("hoeveel medium drankjes wilt u bestellen");
var largedrankje = prompt("hoeveel large drankjes wilt u bestellen");

document.writeln('<br>_______}menu{_______');//schrijft het menu
document.writeln("<br>prijs small pizza's: $3.99");
document.writeln("<br>prijs medium pizza's: $7.99");
document.writeln("<br>prijs large pizza's: $12.99");
document.writeln("<br>prijs small drankje: $2.50");
document.writeln("<br>prijs medium drankje: $2.99");
document.writeln("<br>prijs large drankje: $3.99");


document.writeln("<br><br> aantal small pizza's: ");//andwoord op vraag small pizza's
document.writeln(smallpizza);
document.write("<br> prijs voor small pizza's: $");
document.write(smallPizza);

document.writeln("<br><br> aantal medium pizza's: ");//andwoord op vraag medium pizza's
document.writeln(mediumpizza);
document.write("<br> prijs voor medium pizza's: $");
document.write(mediumPizza);

document.writeln("<br><br> aantal large pizza's: ");//andwoord op vraag large pizza's
document.writeln(largepizza);
document.write("<br> prijs voor large pizza's: $");
document.write(largePizza);

document.writeln("<br><br> aantal small drankjes: ");//andwoord op vraag small drankje
document.writeln(smalldrankje);
document.write("<br> prijs voor small drankjes: $");
document.write(smallDrankje);

document.writeln("<br><br> aantal medium drankjes: ");//andwoord op vraag medium drankje
document.writeln(mediumdrankje);
document.write("<br> prijs voor medium drankjes: $");
document.write(mediumDrankje);

document.writeln("<br><br> aantal large drankjes: ");//andwoord op vraag large drankje
document.writeln(largedrankje);
document.write("<br> prijs voor large drankjes: $");
document.write(largeDrankje);

document.write("<br><br> totale prijs: $");//totale prijs
document.write(smallPizza + mediumPizza + largePizza + smallDrankje + mediumDrankje + largeDrankje);// berekening totale prijs

