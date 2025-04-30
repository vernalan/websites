//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/g=/g, "g̀");
car = car.replace(/g̀=/g, "g");
car = car.replace(/a=/g, "â");
car = car.replace(/â=/g, "a");
car = car.replace(/e=/g, "ê");
car = car.replace(/ê=/g, "ë");
car = car.replace(/ë=/g, "è");
car = car.replace(/è=/g, "e");
car = car.replace(/i=/g, "ì");
car = car.replace(/ì=/g, "ï");
car = car.replace(/ï=/g, "i");
car = car.replace(/u=/g, "û");
car = car.replace(/û=/g, "ŭ"); // bielo
car = car.replace(/ŭ=/g, "u");
car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "c");
car = car.replace(/s=/g, "š");
car = car.replace(/š=/g, "ŝ");
car = car.replace(/ŝ=/g, "s");
car = car.replace(/z=/g, "ž");
car = car.replace(/ž=/g, "z");

car = car.replace(/G=/g, "G̀");
car = car.replace(/G̀=/g, "G");
car = car.replace(/A=/g, "Â");
car = car.replace(/Â=/g, "A");
car = car.replace(/E=/g, "Ê");
car = car.replace(/Ê=/g, "Ë");
car = car.replace(/Ë=/g, "È");
car = car.replace(/È=/g, "E");
car = car.replace(/I=/g, "Ì");
car = car.replace(/Ì=/g, "Ï");
car = car.replace(/Ï=/g, "I");
car = car.replace(/U=/g, "Û");
car = car.replace(/Û=/g, "Ŭ");
car = car.replace(/Ŭ=/g, "U");
car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "C");
car = car.replace(/S=/g, "Š");
car = car.replace(/Š=/g, "Ŝ");
car = car.replace(/Ŝ=/g, "S");
car = car.replace(/Z=/g, "Ž");
car = car.replace(/Ž=/g, "Z");
car = car.replace(/\'/g, "ʹ");
car = car.replace(/ʹʹ/g, "ʺ");

car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "g");
car = car.replace(/ґ/g, "g̀");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "e");
car = car.replace(/є/g, "ê");
car = car.replace(/ж/g, "ž");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "i");
car = car.replace(/і/g, "ì");
car = car.replace(/ї/g, "ï");
car = car.replace(/й/g, "j");
car = car.replace(/к/g, "k");
car = car.replace(/л/g, "l");
car = car.replace(/м/g, "m");
car = car.replace(/н/g, "n");
car = car.replace(/о/g, "o");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "s");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "u");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "h");
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "č");
car = car.replace(/ш/g, "š");
car = car.replace(/щ/g, "ŝ");
car = car.replace(/ю/g, "û");
car = car.replace(/я/g, "â");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "G");
car = car.replace(/Ґ/g, "G̀");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "E");
car = car.replace(/Є/g, "Ê");
car = car.replace(/Ж/g, "Ž");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "I");
car = car.replace(/І/g, "Ì");
car = car.replace(/Ї/g, "Ï");
car = car.replace(/Й/g, "J");
car = car.replace(/К/g, "K");
car = car.replace(/Л/g, "L");
car = car.replace(/М/g, "M");
car = car.replace(/Н/g, "N");
car = car.replace(/О/g, "O");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "S");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "U");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "H");
car = car.replace(/Ц/g, "C");
car = car.replace(/Ч/g, "Č");
car = car.replace(/Ш/g, "Š");
car = car.replace(/Щ/g, "Ŝ");
car = car.replace(/Ю/g, "Û");
car = car.replace(/Я/g, "Â");
car = car.replace(/ь/g, "ʹ");//02b9
car = car.replace(/Ь/g, "ʹ"); 
car = car.replace(/’/g, "ʺ"); // 02ba

startPos = document.conversion.saisie.selectionStart;
endPos = document.conversion.saisie.selectionEnd;

beforeLen = document.conversion.saisie.value.length;
afterLen = car.length;
adjustment = afterLen - beforeLen;

document.conversion.saisie.value = car;

document.conversion.saisie.selectionStart = startPos + adjustment;
document.conversion.saisie.selectionEnd = endPos + adjustment;

var obj = document.conversion.saisie;
obj.focus();
obj.scrollTop = obj.scrollHeight;
}