//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ا");
car = car.replace(/ä/g, "ٵ‎");
car = car.replace(/ا'/g, "ٵ‎");
car = car.replace(/ٵ‎'/g, "ا");
car = car.replace(/b/g, "ب");
car = car.replace(/p/g, "پ");
car = car.replace(/t/g, "ت");
car = car.replace(/j/g, "ج");
car = car.replace(/x/g, "ح‎");
car = car.replace(/d/g, "د");
car = car.replace(/r/g, "ر");
car = car.replace(/z/g, "ز");
car = car.replace(/s/g, "س");
car = car.replace(/[şS]/g, "ش");
car = car.replace(/[Gğ]/g, "ع");
car = car.replace(/f/g, "ف");
car = car.replace(/q/g, "ق");
car = car.replace(/k/g, "ك");
car = car.replace(/g/g, "گ");
car = car.replace(/[ñN]/g, "ڭ");
car = car.replace(/l/g, "ل");
car = car.replace(/m/g, "م");
car = car.replace(/n/g, "ن");
car = car.replace(/e/g, "ە");
car = car.replace(/h/g, "ھ");
car = car.replace(/o/g, "و");
car = car.replace(/ö/g, "ٶ‎");
car = car.replace(/ū/g, "ۇ");
car = car.replace(/ü/g, "ٷ");
car = car.replace(/u/g, "ۋ");
car = car.replace(/v/g, "ۆ");
car = car.replace(/و'/g, "ٶ‎");
car = car.replace(/ٶ‎'/g, "ۇ");
car = car.replace(/ۇ'/g, "ٷ");
car = car.replace(/ٷ'/g, "ۆ");
car = car.replace(/ۆ'/g, "ۋ");
car = car.replace(/ۋ'/g, "و");
car = car.replace(/y/g, "ى");
car = car.replace(/ı/g, "ٸ‎");
car = car.replace(/i/g, "ي");
car = car.replace(/ى'/g, "ٸ");
car = car.replace(/ٸ'/g, "ي");
car = car.replace(/ي'/g, "ى");
car = car.replace(/c/g, "چ");
car = car.replace(/تش/g, "چ");

car = car.replace(/ب'/g, "پ");
car = car.replace(/پ'/g, "ت");
car = car.replace(/ت'/g, "ب");
car = car.replace(/ج'/g, "چ");
car = car.replace(/چ'/g, "ح");
car = car.replace(/ح'/g, "ج");
car = car.replace(/ر'/g, "ز");
car = car.replace(/ز'/g, "ر");
car = car.replace(/س'/g, "ش");
car = car.replace(/ش'/g, "س");
car = car.replace(/ك'/g, "ڭ");
car = car.replace(/ڭ'/g, "ك");

car = car.replace(/а/g, "ا");
car = car.replace(/ә/g, "ٵ‎");
car = car.replace(/б/g, "ب");
car = car.replace(/п/g, "پ");
car = car.replace(/т/g, "ت"); 
car = car.replace(/ж/g, "ج");
car = car.replace(/ч/g, "چ");
car = car.replace(/х/g, "ح‎");
car = car.replace(/д/g, "د");
car = car.replace(/р/g, "ر");
car = car.replace(/з/g, "ز");
car = car.replace(/с/g, "س");
car = car.replace(/ш/g, "ش");
car = car.replace(/ғ/g, "ع");
car = car.replace(/ф/g, "ف");
car = car.replace(/қ/g, "ق");
car = car.replace(/к/g, "ك");
car = car.replace(/г/g, "گ");
car = car.replace(/ң/g, "ڭ");
car = car.replace(/л/g, "ل");
car = car.replace(/м/g, "م");
car = car.replace(/н/g, "ن");
car = car.replace(/е/g, "ە");
car = car.replace(/һ/g, "ھ");
car = car.replace(/о/g, "و");
car = car.replace(/ө/g, "ٶ‎");
car = car.replace(/ұ/g, "ۇ");
car = car.replace(/ү/g, "ٷ");
car = car.replace(/у/g, "ۋ");
car = car.replace(/в/g, "ۆ");
car = car.replace(/ы/g, "ى");
car = car.replace(/і/g, "ٸ‎");
car = car.replace(/[ий]/g, "ي");

car = car.replace(/щ/g, "شش");
car = car.replace(/ю/g, "يۋ");
car = car.replace(/я/g, "يا");
car = car.replace(/[ъь]/g, "ء");

car = car.replace(/\?/g, "؟");
car = car.replace(/\;/g, "؛");
car = car.replace(/\,/g, "،");

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