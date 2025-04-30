//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "á");
car = car.replace(/e=/g, "é");
car = car.replace(/i=/g, "í");
car = car.replace(/o=/g, "ó");
car = car.replace(/u=/g, "ú");
car = car.replace(/á=/g, "a");
car = car.replace(/é=/g, "e");
car = car.replace(/í=/g, "i");
car = car.replace(/ó=/g, "o");
car = car.replace(/ú=/g, "u");
car = car.replace(/b=/g, "ḃ");
car = car.replace(/c=/g, "ċ");
car = car.replace(/d=/g, "ḋ");
car = car.replace(/g=/g, "ġ");
car = car.replace(/f=/g, "ḟ");
car = car.replace(/m=/g, "ṁ");
car = car.replace(/p=/g, "ṗ");
car = car.replace(/s=/g, "ṡ");
car = car.replace(/t=/g, "ṫ");
car = car.replace(/ḃ=/g, "b");
car = car.replace(/ċ=/g, "c");
car = car.replace(/ḋ=/g, "d");
car = car.replace(/ḟ=/g, "f");
car = car.replace(/ġ=/g, "g");
car = car.replace(/ṁ=/g, "m");
car = car.replace(/ṗ=/g, "p");
car = car.replace(/ṡ=/g, "s");
car = car.replace(/ṫ=/g, "t");
car = car.replace(/w=/g, "ŵ");
car = car.replace(/ŵ=/g, "w");
car = car.replace(/y=/g, "ŷ");
car = car.replace(/ŷ=/g, "y");

car = car.replace(/A=/g, "Á");
car = car.replace(/E=/g, "É");
car = car.replace(/I=/g, "Í");
car = car.replace(/O=/g, "Ó");
car = car.replace(/U=/g, "Ú");
car = car.replace(/Á=/g, "A");
car = car.replace(/É=/g, "E");
car = car.replace(/Í=/g, "I");
car = car.replace(/Ó=/g, "O");
car = car.replace(/Ú=/g, "U");
car = car.replace(/B=/g, "Ḃ");
car = car.replace(/C=/g, "Ċ");
car = car.replace(/D=/g, "Ḋ");
car = car.replace(/G=/g, "Ġ");
car = car.replace(/F=/g, "Ḟ");
car = car.replace(/M=/g, "Ṁ");
car = car.replace(/P=/g, "Ṗ");
car = car.replace(/S=/g, "Ṡ");
car = car.replace(/T=/g, "Ṫ");
car = car.replace(/Ḃ=/g, "B");
car = car.replace(/Ċ=/g, "C");
car = car.replace(/Ḋ=/g, "D");
car = car.replace(/Ḟ=/g, "F");
car = car.replace(/Ġ=/g, "G");
car = car.replace(/Ṁ=/g, "M");
car = car.replace(/Ṗ=/g, "P");
car = car.replace(/Ṡ=/g, "S");
car = car.replace(/Ṫ=/g, "T");
car = car.replace(/W=/g, "Ŵ");
car = car.replace(/Ŵ=/g, "W");
car = car.replace(/Y=/g, "Ŷ");
car = car.replace(/Ŷ=/g, "Y");

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