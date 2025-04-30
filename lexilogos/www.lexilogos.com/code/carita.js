//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "à");
car = car.replace(/e=/g, "è");
car = car.replace(/i=/g, "ì");
car = car.replace(/o=/g, "ò");
car = car.replace(/u=/g, "ù");
car = car.replace(/à=/g, "á");
car = car.replace(/è=/g, "é");
car = car.replace(/ì=/g, "í");
car = car.replace(/ò=/g, "ó");
car = car.replace(/ù=/g, "ú");
car = car.replace(/á=/g, "â");
car = car.replace(/é=/g, "ê");
car = car.replace(/í=/g, "î");
car = car.replace(/ó=/g, "ô");
car = car.replace(/ú=/g, "û");
car = car.replace(/â=/g, "ä");
car = car.replace(/ê=/g, "ë");
car = car.replace(/î=/g, "ï");
car = car.replace(/ô=/g, "ö");
car = car.replace(/û=/g, "ü");
car = car.replace(/ä=/g, "a");
car = car.replace(/ë=/g, "e");
car = car.replace(/ï=/g, "i");
car = car.replace(/ö=/g, "o");
car = car.replace(/ü=/g, "u");
car = car.replace(/c=/g, "ç");
car = car.replace(/ç=/g, "c");
car = car.replace(/n=/g, "ñ");
car = car.replace(/ñ=/g, "n");
car = car.replace(/y=/g, "ÿ");
car = car.replace(/ÿ=/g, "y");
car = car.replace(/A=/g, "À");
car = car.replace(/E=/g, "È");
car = car.replace(/I=/g, "Ì");
car = car.replace(/O=/g, "Ò");
car = car.replace(/U=/g, "Ù");
car = car.replace(/À=/g, "Á");
car = car.replace(/È=/g, "É");
car = car.replace(/Ì=/g, "Í");
car = car.replace(/Ò=/g, "Ó");
car = car.replace(/Ù=/g, "Ú");
car = car.replace(/Á=/g, "Â");
car = car.replace(/É=/g, "Ê");
car = car.replace(/Í=/g, "Î");
car = car.replace(/Ó=/g, "Ô");
car = car.replace(/Ú=/g, "Û");
car = car.replace(/Â=/g, "Ä");
car = car.replace(/Ê=/g, "Ë");
car = car.replace(/Î=/g, "Ï");
car = car.replace(/Ô=/g, "Ö");
car = car.replace(/Û=/g, "Ü");
car = car.replace(/Ä=/g, "A");
car = car.replace(/Ë=/g, "E");
car = car.replace(/Ï=/g, "I");
car = car.replace(/Ö=/g, "O");
car = car.replace(/Ü=/g, "U");
car = car.replace(/C=/g, "Ç");
car = car.replace(/Ç=/g, "C");
car = car.replace(/N=/g, "Ñ");
car = car.replace(/Ñ=/g, "N");
car = car.replace(/Y=/g, "Ÿ");
car = car.replace(/Ÿ=/g, "Y");

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