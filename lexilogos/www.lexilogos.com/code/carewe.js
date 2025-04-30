//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/b=/g, "ɓ");
car = car.replace(/ɓ=/g, "b");
car = car.replace(/c=/g, "ç");
car = car.replace(/ç=/g, "c");
car = car.replace(/d=/g, "ɖ");
car = car.replace(/ɖ=/g, "d");
car = car.replace(/f=/g, "ƒ");
car = car.replace(/ƒ=/g, "f");
car = car.replace(/e=/g, "ɛ");
car = car.replace(/ɛ=/g, "e");
car = car.replace(/g=/g, "ɣ");
car = car.replace(/ɣ=/g, "g");
car = car.replace(/n=/g, "ŋ");
car = car.replace(/ŋ=/g, "ñ");
car = car.replace(/ñ=/g, "n");
car = car.replace(/o=/g, "ɔ");
car = car.replace(/ɔ=/g, "o");
car = car.replace(/i=/g, "ɩ");
car = car.replace(/ɩ=/g, "i");
car = car.replace(/u=/g, "ʋ");
car = car.replace(/ʋ=/g, "u");

car = car.replace(/B=/g, "Ɓ");
car = car.replace(/Ɓ=/g, "B");
car = car.replace(/C=/g, "Ç");
car = car.replace(/Ç=/g, "C");
car = car.replace(/D=/g, "Ɖ");
car = car.replace(/Ɖ=/g, "D");
car = car.replace(/F=/g, "Ƒ");
car = car.replace(/Ƒ=/g, "F");
car = car.replace(/E=/g, "Ɛ");
car = car.replace(/Ɛ=/g, "E");
car = car.replace(/G=/g, "Ɣ");
car = car.replace(/Ɣ=/g, "G");
car = car.replace(/N=/g, "Ŋ");
car = car.replace(/Ŋ=/g, "Ñ");
car = car.replace(/Ñ=/g, "N");
car = car.replace(/O=/g, "Ɔ");
car = car.replace(/Ɔ=/g, "O");
car = car.replace(/I=/g, "Ɩ");
car = car.replace(/Ɩ=/g, "I");
car = car.replace(/U=/g, "Ʋ");
car = car.replace(/Ʋ=/g, "U");
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