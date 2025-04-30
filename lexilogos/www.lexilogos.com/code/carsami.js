//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "á");
car = car.replace(/á=/g, "å");
car = car.replace(/å=/g, "æ");
car = car.replace(/æ=/g, "ä");
car = car.replace(/ä=/g, "â");
car = car.replace(/â=/g, "a");
car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "c");
car = car.replace(/d=/g, "ð");
car = car.replace(/ð=/g, "d");
car = car.replace(/i=/g, "ï");
car = car.replace(/ï=/g, "i");
car = car.replace(/n=/g, "ŋ");
car = car.replace(/ŋ=/g, "n");
car = car.replace(/o=/g, "ø");
car = car.replace(/ø=/g, "ö");
car = car.replace(/ö=/g, "o");
car = car.replace(/s=/g, "š");
car = car.replace(/š=/g, "s");
car = car.replace(/t=/g, "ŧ");
car = car.replace(/ŧ=/g, "t");
car = car.replace(/u=/g, "ü");
car = car.replace(/ü=/g, "u");
car = car.replace(/z=/g, "ž");
car = car.replace(/ž=/g, "z");

car = car.replace(/A=/g, "Á");
car = car.replace(/Á=/g, "Å");
car = car.replace(/Å=/g, "Æ");
car = car.replace(/Æ=/g, "Ä");
car = car.replace(/Ä=/g, "Â");
car = car.replace(/Â=/g, "A");
car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "C");
car = car.replace(/D=/g, "Ð");
car = car.replace(/Ð=/g, "D");
car = car.replace(/I=/g, "Ï");
car = car.replace(/Ï=/g, "I");
car = car.replace(/N=/g, "Ŋ");
car = car.replace(/Ŋ=/g, "N");
car = car.replace(/O=/g, "Ø");
car = car.replace(/Ø=/g, "Ö");
car = car.replace(/Ö=/g, "O");
car = car.replace(/S=/g, "Š");
car = car.replace(/Š=/g, "S");
car = car.replace(/T=/g, "Ŧ");
car = car.replace(/Ŧ=/g, "T");
car = car.replace(/U=/g, "Ü");
car = car.replace(/Ü=/g, "U");
car = car.replace(/Z=/g, "Ž");
car = car.replace(/Ž=/g, "Z");

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