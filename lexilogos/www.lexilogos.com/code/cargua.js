//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ã");
car = car.replace(/ã=/g, "á");
car = car.replace(/á=/g, "a");
car = car.replace(/e=/g, "ẽ");
car = car.replace(/ẽ=/g, "é");
car = car.replace(/é=/g, "e");
car = car.replace(/i=/g, "ĩ");
car = car.replace(/ĩ=/g, "í");
car = car.replace(/í=/g, "i");
car = car.replace(/o=/g, "õ");
car = car.replace(/õ=/g, "ó");
car = car.replace(/ó=/g, "o");
car = car.replace(/u=/g, "ũ");
car = car.replace(/ũ=/g, "ú");
car = car.replace(/ú=/g, "u");
car = car.replace(/y=/g, "ỹ");
car = car.replace(/ỹ=/g, "ý");
car = car.replace(/ý=/g, "y");
car = car.replace(/n=/g, "ñ");
car = car.replace(/ñ=/g, "n");
car = car.replace(/g=/g, "g̃");
car = car.replace(/g̃=/g, "g");

car = car.replace(/A=/g, "Ã");
car = car.replace(/Ã=/g, "Á");
car = car.replace(/Á=/g, "A");
car = car.replace(/E=/g, "Ẽ");
car = car.replace(/Ẽ=/g, "É");
car = car.replace(/É=/g, "E");
car = car.replace(/I=/g, "Ĩ");
car = car.replace(/Ĩ=/g, "Í");
car = car.replace(/Í=/g, "I");
car = car.replace(/O=/g, "Õ");
car = car.replace(/Õ=/g, "Ó");
car = car.replace(/Ó=/g, "O");
car = car.replace(/U=/g, "Ũ");
car = car.replace(/Ũ=/g, "Ú");
car = car.replace(/Ú=/g, "U");
car = car.replace(/Y=/g, "Ỹ");
car = car.replace(/Ỹ=/g, "Ý");
car = car.replace(/Ý=/g, "Y");
car = car.replace(/N=/g, "Ñ");
car = car.replace(/Ñ=/g, "N");
car = car.replace(/G=/g, "G̃");
car = car.replace(/G̃=/g, "G");

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