//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "á");
car = car.replace(/á=/g, "a");
car = car.replace(/c=/g, "ç");
car = car.replace(/ç=/g, "c");
car = car.replace(/e=/g, "é");
car = car.replace(/é=/g, "e");
car = car.replace(/g=/g, "ğ");
car = car.replace(/ğ=/g, "g");
car = car.replace(/n=/g, "ñ");
car = car.replace(/ñ=/g, "n");
car = car.replace(/s=/g, "ş");
car = car.replace(/ş=/g, "s");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "o");
car = car.replace(/u=/g, "ú");
car = car.replace(/ú=/g, "u");
car = car.replace(/i=/g, "í");
car = car.replace(/í=/g, "î");
car = car.replace(/î=/g, "i");

car = car.replace(/A=/g, "Á");
car = car.replace(/Á=/g, "A");
car = car.replace(/C=/g, "Ç");
car = car.replace(/Ç=/g, "C");
car = car.replace(/E=/g, "É");
car = car.replace(/É=/g, "E");
car = car.replace(/G=/g, "Ğ");
car = car.replace(/Ğ=/g, "G");
car = car.replace(/N=/g, "Ñ");
car = car.replace(/Ñ=/g, "N");
car = car.replace(/S=/g, "Ş");
car = car.replace(/Ş=/g, "S");
car = car.replace(/O=/g, "Ó");
car = car.replace(/Ó=/g, "O");
car = car.replace(/U=/g, "Ú");
car = car.replace(/Ú=/g, "U");
car = car.replace(/I=/g, "Í");
car = car.replace(/Í=/g, "Î");
car = car.replace(/Î=/g, "I");

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