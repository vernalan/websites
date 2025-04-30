//  copyright lexilogos.com
var car;
function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/’/g, "\'");
car = car.replace(/A/g, "ا");
car = car.replace(/اا/g, "آ");
car = car.replace(/ā/g, "آ");
car = car.replace(/b/g, "ب");
car = car.replace(/ب'/g, "پ");
car = car.replace(/p/g, "پ");
car = car.replace(/پ'/g, "ب");
car = car.replace(/t/g, "ت");
car = car.replace(/ت'/g, "ٹ");
car = car.replace(/ٹ'/g, "ث");
car = car.replace(/ث'/g, "ت");
car = car.replace(/[jǧ]/g, "ج");
car = car.replace(/ج'/g, "چ");
car = car.replace(/[cč]/g, "چ");
car = car.replace(/چ'/g, "ح");
car = car.replace(/[HḥḤ]/g, "ح");
car = car.replace(/ح'/g, "خ");
car = car.replace(/[xẖK]/g, "خ");
car = car.replace(/خ'/g, "ج");
car = car.replace(/d/g, "د");
car = car.replace(/د'/g, "ڈ");
car = car.replace(/ڈ'/g, "ذ");
car = car.replace(/ذ'/g, "د");
car = car.replace(/r/g, "ر");
car = car.replace(/ر'/g, "ڑ"); 
car = car.replace(/ç/g, "ڑ"); 
car = car.replace(/ڑ'/g, "ز");
car = car.replace(/ز'/g, "ر");
car = car.replace(/z/g, "ز");
car = car.replace(/[Rṛç]/g, "ࢪ");
car = car.replace(/s/g, "س");
car = car.replace(/س'/g, "ش");
car = car.replace(/ش'/g, "س");
car = car.replace(/š/g, "ش");
car = car.replace(/[Sṣ]/g, "ص");
car = car.replace(/ص'/g, "ض");
car = car.replace(/ض'/g, "ص");
car = car.replace(/[Dḍ]/g, "ض");
car = car.replace(/[Tṭ]/g, "ط");
car = car.replace(/ط'/g, "ظ");
car = car.replace(/ظ'/g, "ط");
car = car.replace(/[Zẓ]/g, "ظ");
car = car.replace(/[ṅG]/g, "ڠَ");
car = car.replace(/ʿ/g, "ع");
car = car.replace(/ع'/g, "غ");
car = car.replace(/غ'/g, "ڠَ");
car = car.replace(/ڠَ'/g, "ع");
car = car.replace(/ġ/g, "غ");
car = car.replace(/f/g, "ف");
car = car.replace(/ف'/g, "ڤ");
car = car.replace(/ڤ'/g, "ف");
car = car.replace(/v/g, "ڢ");
car = car.replace(/q/g, "ق");
car = car.replace(/ق'/g, "ڨ");
car = car.replace(/ڨ'/g, "ق");
car = car.replace(/k/g, "ك");
car = car.replace(/ك'/g, "ڭ");
car = car.replace(/ڭ'/g, "ك");
car = car.replace(/g/g, "گ");
car = car.replace(/l/g, "ل");
car = car.replace(/m/g, "م");
car = car.replace(/n/g, "ن");
car = car.replace(/ن'/g, "ں");
car = car.replace(/ں'/g, "ن");
car = car.replace(/ñ/g, "ں");
car = car.replace(/h/g, "ه");
car = car.replace(/ه'/g, "ة");
car = car.replace(/ة'/g, "ه");
car = car.replace(/v/g, "و");
car = car.replace(/[Vw]/g, "ࢫ");
car = car.replace(/و'/g, "ؤ");
car = car.replace(/ؤ'/g, "و");
car = car.replace(/y/g, "ي");
car = car.replace(/Y/g, "ࢬ");

car = car.replace(/a/g, "َ");
car = car.replace(/ََ/g, "ً");
car = car.replace(/ã/g, "ً");
car = car.replace(/o/g, "ࣤ");
car = car.replace(/ࣤࣤ/g, "ࣧ");
car = car.replace(/õ/g, "ࣧ");
car = car.replace(/i/g, "ِ");
car = car.replace(/ِِ/g, "ٍ");
car = car.replace(/ĩ/g, "ٍ");
car = car.replace(/e/g, "ࣦ");
car = car.replace(/ࣦࣦ/g, "ࣩ");
car = car.replace(/ẽ/g, "ࣩ");
car = car.replace(/u/g, "ُ");
car = car.replace(/ُُ/g, "ࣱ");
car = car.replace(/ũ/g, "ࣱ");
car = car.replace(/[OU]/g, "ࣥ");
car = car.replace(/ࣥࣥ/g, "ࣨ"); //OO
car = car.replace(/ࣥࣤ/g, "ࣨ"); //Oo

car = car.replace(/\?/g, "؟");
car = car.replace(/;/g, "؛");
car = car.replace(/,/g, "،");

car = car.replace(/0=/g, "٠");
car = car.replace(/1=/g, "١");
car = car.replace(/2=/g, "٢");
car = car.replace(/3=/g, "٣");
car = car.replace(/4=/g, "٤");
car = car.replace(/5=/g, "٥");
car = car.replace(/6=/g, "٦");
car = car.replace(/7=/g, "٧");
car = car.replace(/8=/g, "٨");
car = car.replace(/9=/g, "٩");
car = car.replace(/%=/g, "٪");

//arabe
car = car.replace(/ي'/g, "ى");
car = car.replace(/ى'/g, "ئ");
car = car.replace(/ئ'/g, "ي");
car = car.replace(/-/g, "ء");
car = car.replace(/ʾ/g, "ء");
car = car.replace(/وءء/g, "ؤ");
car = car.replace(/يءء/g, "ئ");
car = car.replace(/اءء/g, "إ");
car = car.replace(/_/g, "ـ");

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