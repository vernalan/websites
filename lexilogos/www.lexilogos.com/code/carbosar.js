//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ا");
car = car.replace(/ā/g, "آ");
car = car.replace(/اا/g, "آ");
car = car.replace(/b/g, "ب");
car = car.replace(/c/g, "ڄ");
car = car.replace(/č/g, "چ");
car = car.replace(/ć/g, "ڃ");
car = car.replace(/d/g, "د");
car = car.replace(/đ/g, "ݗ");
car = car.replace(/e/g, "ە");
car = car.replace(/f/g, "ف");
car = car.replace(/g/g, "غ");
car = car.replace(/h/g, "ح");
car = car.replace(/i/g, "اٖى");
car = car.replace(/j/g, "ي");
car = car.replace(/k/g, "ق");
car = car.replace(/l/g, "ل");
car = car.replace(/m/g, "م");
car = car.replace(/n/g, "ن");
car = car.replace(/o/g, "ۉ");
car = car.replace(/p/g, "پ");
car = car.replace(/r/g, "ر");
car = car.replace(/s/g, "س");
car = car.replace(/š/g, "ش");
car = car.replace(/t/g, "ت");
car = car.replace(/u/g, "ۆ");
car = car.replace(/v/g, "و");
car = car.replace(/z/g, "ز");
car = car.replace(/ž/g, "ژ");
car = car.replace(/دژ/g, "ج");
car = car.replace(/لي/g, "ڵ");
car = car.replace(/ني/g, "ݩ");

car = car.replace(/ڄ=/g, "چ");
car = car.replace(/ç/g, "چ");
car = car.replace(/چ=/g, "ڃ");
car = car.replace(/ڃ=/g, "ڄ");
car = car.replace(/د=/g, "ݗ");
car = car.replace(/ݗ=/g, "د");
car = car.replace(/س=/g, "ش");
car = car.replace(/ش=/g, "س");
car = car.replace(/ز=/g, "ژ");
car = car.replace(/ژ=/g, "ز");

car = car.replace(/а/g, "ا");
car = car.replace(/а̄/g, "آ");
car = car.replace(/б/g, "ب");
car = car.replace(/ц/g, "ڄ");
car = car.replace(/ч/g, "چ");
car = car.replace(/ћ/g, "ڃ");
car = car.replace(/д/g, "د");
car = car.replace(/џ/g, "ج");
car = car.replace(/ђ/g, "ݗ");
car = car.replace(/е/g, "ە");
car = car.replace(/ф/g, "ف");
car = car.replace(/г/g, "غ");
car = car.replace(/х/g, "ح");
car = car.replace(/и/g, "اٖى");
car = car.replace(/ј/g, "ي");
car = car.replace(/к/g, "ق");
car = car.replace(/л/g, "ل");
car = car.replace(/љ/g, "ڵ");
car = car.replace(/м/g, "م");
car = car.replace(/н/g, "ن");
car = car.replace(/њ/g, "ݩ");
car = car.replace(/о/g, "ۉ");
car = car.replace(/п/g, "پ");
car = car.replace(/р/g, "ر");
car = car.replace(/с/g, "س");
car = car.replace(/ш/g, "ش");
car = car.replace(/т/g, "ت");
car = car.replace(/у/g, "ۆ");
car = car.replace(/в/g, "و");
car = car.replace(/з/g, "ز");
car = car.replace(/ж/g, "ژ");

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