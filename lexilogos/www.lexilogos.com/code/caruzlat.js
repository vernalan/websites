//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/\+/g, "ʼ");
car = car.replace(/o'/g, "oʻ");
car = car.replace(/g'/g, "gʻ");
car = car.replace(/o=/g, "oʻ");
car = car.replace(/g=/g, "gʻ");

car = car.replace(/gʻ=/g, "ğ");
car = car.replace(/ğ=/g, "ǵ");
car = car.replace(/ǵ=/g, "ḡ");
car = car.replace(/ḡ=/g, "ƣ");
car = car.replace(/ƣ=/g, "g");
car = car.replace(/oʻ=/g, "ŏ");
car = car.replace(/ŏ=/g, "ó");
car = car.replace(/ó=/g, "ō");
car = car.replace(/ō=/g, "õ");
car = car.replace(/õ=/g, "ө");
car = car.replace(/ө=/g, "o");

car = car.replace(/c=/g, "ç");
car = car.replace(/ç=/g, "c");
car = car.replace(/n=/g, "ñ");
car = car.replace(/ñ=/g, "ꞑ");
car = car.replace(/ꞑ=/g, "n");
car = car.replace(/s=/g, "ş");
car = car.replace(/ş=/g, "s");
car = car.replace(/j=/g, "ƶ");
car = car.replace(/ƶ=/g, "z");
car = car.replace(/z=/g, "ƶ");
car = car.replace(/ƶ=/g, "j");
car = car.replace(/a=/g, "ə");
car = car.replace(/ə=/g, "а");
car = car.replace(/e=/g, "ə");
car = car.replace(/ə=/g, "e");

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