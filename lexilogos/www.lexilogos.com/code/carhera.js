//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "א");
car = car.replace(/b/g, "ב");
car = car.replace(/g/g, "ג");
car = car.replace(/d/g, "ד");
car = car.replace(/h/g, "ה");
car = car.replace(/[uov]/g, "ו");
car = car.replace(/z/g, "ז");
car = car.replace(/H/g, "ח");
car = car.replace(/T/g, "ט");
car = car.replace(/[iye]/g, "י");
car = car.replace(/k/g, "כ");
car = car.replace(/כ /g, "ך ");
car = car.replace(/K/g, "ך");
car = car.replace(/l/g, "ל");
car = car.replace(/m/g, "מ");
car = car.replace(/M/g, "ם");
car = car.replace(/מ /g, "ם ");
car = car.replace(/n/g, "נ");
car = car.replace(/נ /g, "ן ");
car = car.replace(/N/g, "ן");
car = car.replace(/s/g, "ס");
car = car.replace(/j/g, "ע");
car = car.replace(/ʿ/g, "ע");
car = car.replace(/p/g, "פ");
car = car.replace(/פ /g, "ף");
car = car.replace(/P/g, "ף");
car = car.replace(/q/g, "ק");
car = car.replace(/r/g, "ר");
car = car.replace(/t/g, "ת");
car = car.replace(/S/g, "צ");
car = car.replace(/צ /g, "ץ ");
car = car.replace(/[wcç]/g, "ש");

car = car.replace(/=/g, "׳"); // geresh
car = car.replace(/׳׳/g, "ֿ"); // rafe
car = car.replace(/ֿ׳/g, "ﬞ"); // varika
car = car.replace(/ﬞ׳/g, "׳"); // varika
car = car.replace(/f/g, "פ׳");
car = car.replace(/v/g, "ב׳");

car = car.replace(/A/g, "ﭏ"); // lig a+l


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