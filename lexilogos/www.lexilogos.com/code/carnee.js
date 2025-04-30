//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "á");
car = car.replace(/á=/g, "à");
car = car.replace(/à=/g, "ä");
car = car.replace(/ä=/g, "a");
car = car.replace(/e=/g, "é");
car = car.replace(/é=/g, "è");
car = car.replace(/è=/g, "ê");
car = car.replace(/ê=/g, "ë");
car = car.replace(/ë=/g, "e");
car = car.replace(/i=/g, "í");
car = car.replace(/í=/g, "ï");
car = car.replace(/ï=/g, "i");
car = car.replace(/ij/g, "ĳ");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "ö");
car = car.replace(/ö=/g, "o");
car = car.replace(/u=/g, "ú");
car = car.replace(/ú=/g, "ü");
car = car.replace(/ü=/g, "u");

car = car.replace(/A=/g, "Á");
car = car.replace(/Á=/g, "À");
car = car.replace(/À=/g, "Ä");
car = car.replace(/Ä=/g, "A");
car = car.replace(/E=/g, "É");
car = car.replace(/É=/g, "È");
car = car.replace(/È=/g, "Ê");
car = car.replace(/Ê=/g, "Ë");
car = car.replace(/Ë=/g, "E");
car = car.replace(/I=/g, "Í");
car = car.replace(/Í=/g, "Ï");
car = car.replace(/Ï=/g, "I");
car = car.replace(/IJ/g, "Ĳ");
car = car.replace(/O=/g, "Ó");
car = car.replace(/Ó=/g, "Ö");
car = car.replace(/Ö=/g, "O");
car = car.replace(/U=/g, "Ú");
car = car.replace(/Ú=/g, "Ü");
car = car.replace(/Ü=/g, "U");

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