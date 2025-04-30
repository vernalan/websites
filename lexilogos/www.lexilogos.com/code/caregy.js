//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/i=/g, "ꞽ");
car = car.replace(/ꞽ=/g, "i̯");
car = car.replace(/i̯=/g, "ï");
car = car.replace(/ï=/g, "i");
car = car.replace(/u=/g, "u̯");
car = car.replace(/u̯=/g, "u");

car = car.replace(/\^s/g, "š");
car = car.replace(/s=/g, "š");
car = car.replace(/š=/g, "ś");
car = car.replace(/ś=/g, "s");
car = car.replace(/d=/g, "ḏ");
car = car.replace(/ḏ=/g, "d");
car = car.replace(/h=/g, "ẖ");
car = car.replace(/ẖ=/g, "ḫ");
car = car.replace(/ḫ=/g, "ḥ");
car = car.replace(/ḥ=/g, "h̭");
car = car.replace(/h̭=/g, "h");
car = car.replace(/x/g, "ḫ");
car = car.replace(/k=/g, "ḳ");
car = car.replace(/ḳ=/g, "k");
car = car.replace(/t=/g, "ṯ");
car = car.replace(/ṯ=/g, "ṭ");
car = car.replace(/ṭ=/g, "ṱ");
car = car.replace(/ṱ=/g, "t");
car = car.replace(/\^c/g, "č");
car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "č̣");
car = car.replace(/č̣=/g, "c");


// car = car.replace(/\</g, "ˁ");
// car = car.replace(/\>/g, "ȝ");

car = car.replace(/a/g, "ꜣ");
car = car.replace(/ꜣ=/g, "ꜥ");
car = car.replace(/ꜥ=/g, "ʾ");
car = car.replace(/ʾ=/g, "ꜣ");
car = car.replace(/A/g, "Ꜣ");
car = car.replace(/Ꜣ=/g, "Ꜥ");
car = car.replace(/Ꜥ=/g, "Ꜣ");

car = car.replace(/I=/g, "Ꞽ");
car = car.replace(/Ꞽ=/g, "I̯");
car = car.replace(/I̯=/g, "Ï");
car = car.replace(/Ï=/g, "I");
car = car.replace(/U=/g, "U̯");
car = car.replace(/U̯=/g, "U");

car = car.replace(/\^S/g, "Š");
car = car.replace(/S=/g, "Š");
car = car.replace(/Š=/g, "Ś");
car = car.replace(/Ś=/g, "S");
car = car.replace(/D=/g, "Ḏ");
car = car.replace(/Ḏ=/g, "D");
car = car.replace(/H=/g, "H̱");
car = car.replace(/H̱=/g, "Ḫ");
car = car.replace(/Ḫ=/g, "Ḥ");
car = car.replace(/Ḥ=/g, "H̭");
car = car.replace(/H̭=/g, "H");
car = car.replace(/X/g, "Ḫ");
car = car.replace(/K=/g, "Ḳ");
car = car.replace(/Ḳ=/g, "K");
car = car.replace(/T=/g, "Ṯ");
car = car.replace(/Ṯ=/g, "Ṭ");
car = car.replace(/Ṭ=/g, "Ṱ");
car = car.replace(/Ṱ=/g, "T");
car = car.replace(/\^C/g, "Č");
car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "Č̣");
car = car.replace(/Č̣=/g, "C");

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