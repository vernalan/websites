//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/’/g, "\'");

car = car.replace (/b/g, "ب");
car = car.replace (/[Bpɓ]/g, "ٻ");
car = car.replace(/ب'/g, "ٻ");
car = car.replace(/ٻ'/g, "ب");
car = car.replace (/t/g, "ت");
car = car.replace (/c/g, "ث");
car = car.replace (/ت'/g, "ث");
car = car.replace (/ث'/g, "ت");
car = car.replace(/[jǧ]/g, "ج");
car = car.replace(/ج'/g, "ح");
car = car.replace(/[HḥḤ]/g, "ح");
car = car.replace(/ح'/g, "خ");
car = car.replace(/[xẖ]/g, "خ");
car = car.replace(/خ'/g, "ج");
car = car.replace(/d/g, "د");
car = car.replace(/د'/g, "ذ");
car = car.replace(/ذ'/g, "د");
car = car.replace(/ḏ/g, "ذ");
car = car.replace(/r/g, "ر");
car = car.replace(/ر'/g, "ز");
car = car.replace(/ز'/g, "ر");
car = car.replace(/z/g, "ز");
car = car.replace(/[Tṭɗ]/g, "ط");
car = car.replace(/[Zẓ]/g, "ظ");

car = car.replace(/ط'/g, "ظ");
car = car.replace(/ظ'/g, "ڟ");
car = car.replace(/ڟ'/g, "ط");
car = car.replace (/k/g, "ق");
car = car.replace (/ق'/g, "ࣄ");
car = car.replace (/ࣄ'/g, "ق");
car = car.replace (/[Kƙ]/g, "ک");
car = car.replace (/l/g, "ل");
car = car.replace (/m/g, "م");
car = car.replace (/n/g, "ن");
car = car.replace(/[Sṣ]/g, "ص");
car = car.replace(/ص'/g, "ض");
car = car.replace(/ض'/g, "ص");
car = car.replace(/[Dḍ]/g, "ض");
car = car.replace(/[gʿ]/g, "ع");
car = car.replace(/ع'/g, "غ");
car = car.replace(/غ'/g, "ࣃ");
car = car.replace(/ࣃ'/g, "ع");
car = car.replace(/ġ/g, "غ");
car = car.replace (/f/g, "ف‎");
car = car.replace(/ف'/g, "ڡ");
car = car.replace(/ڡ'/g, "ف");

car = car.replace(/s/g, "س");
car = car.replace(/س'/g, "ش");
car = car.replace(/ش'/g, "س");
car = car.replace(/š/g, "ش");
car = car.replace (/h/g, "ه");
car = car.replace (/w/g, "و");
car = car.replace (/y/g, "ى");
car = car.replace (/[Yƴ]/g, "ۑ");
car = car.replace (/ى'/g, "ۑ");
car = car.replace (/ۑ'/g, "ى");

car = car.replace (/a/g, "ـَ");
car = car.replace (/[Aāâ]/g, "ـَا");
car = car.replace (/e/g, "ـٜ");
car = car.replace (/[Eēê]/g, "ـٰٜی");
car = car.replace (/i/g, "ـِ");
car = car.replace (/[Iīî]/g, "ـِى");
car = car.replace (/[ou]/g, "ـُ");
car = car.replace (/[OōUū]/g, "ـُو");

car = car.replace(/\?/g, "؟");
car = car.replace(/;/g, "؛");
car = car.replace(/,/g, "،");

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