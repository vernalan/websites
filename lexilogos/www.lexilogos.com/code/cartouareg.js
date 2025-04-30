//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ă");
car = car.replace(/ă=/g, "a");
car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "c");
car = car.replace(/d=/g, "ḍ");
car = car.replace(/ḍ=/g, "d");
car = car.replace(/g=/g, "ǧ");
car = car.replace(/ǧ=/g, "ɣ");
car = car.replace(/ɣ=/g, "g");
car = car.replace(/h=/g, "ḥ");
car = car.replace(/ḥ=/g, "h");
car = car.replace(/l=/g, "ḷ");
car = car.replace(/ḷ=/g, "l");
car = car.replace(/j=/g, "ǰ");
car = car.replace(/ǰ=/g, "j");
car = car.replace(/n=/g, "ŋ");
car = car.replace(/ŋ=/g, "n");
car = car.replace(/r=/g, "ṛ");
car = car.replace(/ṛ=/g, "r");
car = car.replace(/s=/g, "ṣ");
car = car.replace(/ṣ=/g, "š");
car = car.replace(/š=/g, "s");
car = car.replace(/t=/g, "ṭ");
car = car.replace(/ṭ=/g, "t");
car = car.replace(/z=/g, "ẓ");
car = car.replace(/ẓ=/g, "ž");
car = car.replace(/ž=/g, "z");
car = car.replace(/e=/g, "ǝ");
car = car.replace(/ǝ=/g, "e");

car = car.replace(/A=/g, "Ă");
car = car.replace(/Ă=/g, "A");
car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "C");
car = car.replace(/D=/g, "Ḍ");
car = car.replace(/Ḍ=/g, "D");
car = car.replace(/G=/g, "Ǧ");
car = car.replace(/Ǧ=/g, "Ɣ");
car = car.replace(/Ɣ=/g, "G");
car = car.replace(/H=/g, "Ḥ");
car = car.replace(/Ḥ=/g, "H");
car = car.replace(/L=/g, "Ḷ");
car = car.replace(/Ḷ=/g, "L");
car = car.replace(/J=/g, "J̌");
car = car.replace(/J̌=/g, "J");
car = car.replace(/N=/g, "Ŋ");
car = car.replace(/Ŋ=/g, "N");
car = car.replace(/R=/g, "Ṛ");
car = car.replace(/Ṛ=/g, "R");
car = car.replace(/S=/g, "Ṣ");
car = car.replace(/Ṣ=/g, "Š");
car = car.replace(/Š=/g, "S");
car = car.replace(/T=/g, "Ṭ");
car = car.replace(/Ṭ=/g, "T");
car = car.replace(/Z=/g, "Ẓ");
car = car.replace(/Ẓ=/g, "Ž");
car = car.replace(/Ž=/g, "Z");
car = car.replace(/E=/g, "Ǝ");
car = car.replace(/Ǝ=/g, "E");

car = car.replace(/y=/g, "ɣ");
car = car.replace(/Y=/g, "Ɣ");

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