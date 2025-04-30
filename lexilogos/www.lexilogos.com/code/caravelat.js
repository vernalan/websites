//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ā");
car = car.replace(/ā=/g, "å");
car = car.replace(/å=/g, "ā̊");
car = car.replace(/ā̊=/g, "ą");
car = car.replace(/ą=/g, "ą̇");
car = car.replace(/ą̇=/g, "a");
car = car.replace(/i=/g, "ī");
car = car.replace(/u=/g, "ū");
car = car.replace(/o=/g, "ō");
car = car.replace(/e=/g, "ē");
car = car.replace(/ē=/g, "ə");
car = car.replace(/ə=/g, "ə̄");
car = car.replace(/ə̄=/g, "e");
car = car.replace(/â/g, "ā");
car = car.replace(/î/g, "ī");
car = car.replace(/û/g, "ū");
car = car.replace(/ô/g, "ō");
car = car.replace(/ê/g, "ē");
car = car.replace(/ī=/g, "i");
car = car.replace(/ū=/g, "u");
car = car.replace(/ō=/g, "o");
car = car.replace(/â/g, "ā");
car = car.replace(/î/g, "ī");
car = car.replace(/û/g, "ū");
car = car.replace(/ô/g, "ō");
car = car.replace(/ê/g, "ē");

car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "c");
car = car.replace(/j=/g, "ǰ");
car = car.replace(/ǰ=/g, "j");
car = car.replace(/x=/g, "x́");
car = car.replace(/x́=/g, "xᵛ");
car = car.replace(/xᵛ=/g, "x");
car = car.replace(/g=/g, "ġ");
car = car.replace(/ġ=/g, "ɣ");
car = car.replace(/ɣ=/g, "g");
car = car.replace(/d=/g, "δ");
car = car.replace(/δ=/g, "d");
car = car.replace(/t=/g, "ϑ");
car = car.replace(/ϑ=/g, "t̰");
car = car.replace(/t̰=/g, "t");
car = car.replace(/b=/g, "β");
car = car.replace(/β=/g, "b");
car = car.replace(/s=/g, "š");
car = car.replace(/š=/g, "š́");
car = car.replace(/š́=/g, "ṣ̌");
car = car.replace(/ṣ̌=/g, "s");
car = car.replace(/z=/g, "ž");
car = car.replace(/ž=/g, "z");

car = car.replace(/n=/g, "ṇ");
car = car.replace(/ṇ=/g, "ń");
car = car.replace(/ń=/g, "ŋ");
car = car.replace(/ŋ=/g, "ŋ́");
car = car.replace(/ŋ́=/g, "ŋᵛ");
car = car.replace(/ŋᵛ=/g, "n");

car = car.replace(/m=/g, "m̨");
car = car.replace(/m̨=/g, "m");
car = car.replace(/y=/g, "ẏ");
car = car.replace(/ẏ=/g, "y");

car = car.replace(/A=/g, "Ā");
car = car.replace(/Ā=/g, "Å");
car = car.replace(/Å=/g, "Ā̊");
car = car.replace(/Ā̊=/g, "Ą");
car = car.replace(/Ą=/g, "Ą̇");
car = car.replace(/Ą̇=/g, "A");
car = car.replace(/I=/g, "Ī");
car = car.replace(/U=/g, "Ū");
car = car.replace(/O=/g, "Ō");
car = car.replace(/E=/g, "Ē");
car = car.replace(/Ē=/g, "Ə");
car = car.replace(/Ə=/g, "Ə̄");
car = car.replace(/Ə̄=/g, "E");
car = car.replace(/Â/g, "Ā");
car = car.replace(/Î/g, "Ī");
car = car.replace(/Û/g, "Ū");
car = car.replace(/Ô/g, "Ō");
car = car.replace(/Ê/g, "Ē");
car = car.replace(/Ī=/g, "I");
car = car.replace(/Ū=/g, "U");
car = car.replace(/Ō=/g, "O");
car = car.replace(/D=/g, "Δ");

car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "C");
car = car.replace(/J=/g, "J̌");
car = car.replace(/J̌=/g, "J");
car = car.replace(/X=/g, "X́");
car = car.replace(/X́=/g, "Xᵛ");
car = car.replace(/Xᵛ=/g, "X");
car = car.replace(/G=/g, "Ġ");
car = car.replace(/Ġ=/g, "Ɣ");
car = car.replace(/Ɣ=/g, "G");
car = car.replace(/D=/g, "Δ");
car = car.replace(/Δ=/g, "D");
car = car.replace(/T=/g, "Θ");
car = car.replace(/Θ=/g, "T̰");
car = car.replace(/T̰=/g, "T");
car = car.replace(/B=/g, "Β");
car = car.replace(/Β=/g, "B");
car = car.replace(/S=/g, "Š");
car = car.replace(/Š=/g, "Š́");
car = car.replace(/Š́=/g, "Ṣ̌");
car = car.replace(/Ṣ̌=/g, "S");
car = car.replace(/Z=/g, "Ž");
car = car.replace(/Ž=/g, "Z");

car = car.replace(/N=/g, "Ṇ");
car = car.replace(/Ṇ=/g, "Ń");
car = car.replace(/Ń=/g, "Ŋ");
car = car.replace(/Ŋ=/g, "Ŋ́");
car = car.replace(/Ŋ́=/g, "Ŋᵛ");
car = car.replace(/Ŋᵛ=/g, "N");

car = car.replace(/M=/g, "M̨");
car = car.replace(/M̨=/g, "M");
car = car.replace(/Y=/g, "Ẏ");
car = car.replace(/Ẏ=/g, "Y");

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