//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/e=/g, "ɛ");
car = car.replace(/ɛ=/g, "e");
car = car.replace(/o=/g, "ɔ");
car = car.replace(/ɔ=/g, "o");
car = car.replace(/n=/g, "ŋ");
car = car.replace(/ŋ=/g, "ɲ");
car = car.replace(/ɲ=/g, "n");
car = car.replace(/E=/g, "Ɛ");
car = car.replace(/Ɛ=/g, "E");
car = car.replace(/O=/g, "Ɔ");
car = car.replace(/Ɔ=/g, "O");
car = car.replace(/N=/g, "Ŋ");
car = car.replace(/Ŋ=/g, "Ɲ");
car = car.replace(/Ɲ=/g, "N");

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