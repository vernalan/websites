//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/e=/g, "è");
car = car.replace(/è=/g, "e");
car = car.replace(/E=/g, "È");
car = car.replace(/È=/g, "E");
car = car.replace(/o=/g, "ò");
car = car.replace(/ò=/g, "o");
car = car.replace(/O=/g, "Ò");
car = car.replace(/Ò=/g, "O");
car = car.replace(/c=/g, "ç");
car = car.replace(/ç=/g, "c");
car = car.replace(/C=/g, "Ç");
car = car.replace(/Ç=/g, "C");

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