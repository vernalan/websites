//  copyright lexilogos.com
var car;
function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ā");
car = car.replace(/ā=/g, "a");
car = car.replace(/i=/g, "ī");
car = car.replace(/ī=/g, "i");
car = car.replace(/u=/g, "ū");
car = car.replace(/ū=/g, "u");
car = car.replace(/e=/g, "ē");
car = car.replace(/ē=/g, "e");
car = car.replace(/o=/g, "ō");
car = car.replace(/ō=/g, "o");

car = car.replace(/h=/g, "ḥ");
car = car.replace(/ḥ=/g, "ḫ");
car = car.replace(/ḫ=/g, "h");

car = car.replace(/g=/g, "ǧ");
car = car.replace(/ǧ=/g, "g"); 	
car = car.replace(/d=/g, "ḍ");
car = car.replace(/ḍ=/g, "d");
car = car.replace(/k=/g, "ḳ");
car = car.replace(/ḳ=/g, "k");
car = car.replace(/p=/g, "p̣");
car = car.replace(/p̣=/g, "p");
car = car.replace(/t=/g, "ṭ");
car = car.replace(/ṭ=/g, "t");
car = car.replace(/z=/g, "ž");
car = car.replace(/ž=/g, "z"); 

car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "č̣");
car = car.replace(/č̣=/g, "c");
car = car.replace(/s=/g, "š");
car = car.replace(/š=/g, "ṣ");
car = car.replace(/ṣ=/g, "ṣ́");
car = car.replace(/ṣ́=/g, "s");

car = car.replace(/hh/g, "ʰ");
car = car.replace(/ww/g, "ʷ");
car = car.replace(/xx/g, "ˣ");
car = car.replace(/ee/g, "ə");
car = car.replace(/\</g, "ʿ");
car = car.replace(/\>/g, "ʾ");
// quotation left right
car = car.replace(/‘/g, "ʿ");
car = car.replace(/’/g, "ʾ");  


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