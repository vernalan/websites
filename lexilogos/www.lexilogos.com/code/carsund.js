//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
 car = car.replace (/k/g, "ᮊ᮪");
car = car.replace (/q/g, "ᮋ᮪");
car = car.replace (/g/g, "ᮌ᮪");
car = car.replace (/[GṅṄ]/g, "ᮍ᮪");
car = car.replace (/c/g, "ᮎ᮪");
car = car.replace (/j/g, "ᮏ᮪");
car = car.replace (/z/g, "ᮐ᮪");
car = car.replace (/[Jñ]/g, "ᮑ᮪");
car = car.replace (/t/g, "ᮒ᮪");
car = car.replace (/d/g, "ᮓ᮪");
car = car.replace (/n/g, "ᮔ᮪");
car = car.replace (/p/g, "ᮕ᮪");
car = car.replace (/f/g, "ᮖ᮪");
car = car.replace (/v/g, "ᮗ᮪");
car = car.replace (/b/g, "ᮘ᮪");
car = car.replace (/m/g, "ᮙ᮪");
car = car.replace (/y/g, "ᮚ᮪");
car = car.replace (/r/g, "ᮛ᮪");
car = car.replace (/l/g, "ᮜ᮪");
car = car.replace (/w/g, "ᮝ᮪");
car = car.replace (/s/g, "ᮞ᮪");
car = car.replace (/x/g, "ᮟ᮪");
car = car.replace (/h/g, "ᮠ᮪");


// conso diacritic
car = car.replace (/᮪\+ᮚ/g, "ᮡ");
car = car.replace (/᮪\+ᮛ/g, "ᮢ");
car = car.replace (/᮪\+ᮜ/g, "ᮣ");
car = car.replace (/᮪\+ᮙ/g, "ᮬ");
car = car.replace (/᮪\+ᮝ/g, "ᮭ");


car = car.replace (/a/g, "ᮃ");
car = car.replace (/᮪ᮃ/g, "\u200b");

car = car.replace (/i/g, "ᮄ");
car = car.replace (/u/g, "ᮅ");
car = car.replace (/o/g, "ᮇ");
car = car.replace (/e/g, "ᮈ");
car = car.replace(/ĕ/g, "ᮆ"); //ae
car = car.replace (/ᮃᮈ/g, "ᮆ");
car = car.replace (/ᮈᮅ/g, "ᮉ");

car = car.replace (/᮪ᮄ/g, "ᮤ");
car = car.replace (/᮪ᮅ/g, "ᮥ");
car = car.replace (/᮪ᮇ/g, "ᮧ");
car = car.replace (/᮪ᮈ/g, "ᮨ");
car = car.replace (/\u200bᮈ/g, "ᮦ");
car = car.replace (/ᮨᮅ/g, "ᮩ");

car = car.replace (/\u200b /g, " ");

// -R final
car = car.replace(/R/g, "ᮁ"); // R final cf H
car = car.replace(/᮪ᮁ/g, "ᮁ");
car = car.replace(/\u200bᮁ/g, "ᮁ");


// anusvara
car = car.replace(/[MṃṂṁ]/g, "ᮀ");
car = car.replace(/᮪ᮀ/g, "ᮀ");
car = car.replace(/\u200bᮀ/g, "ᮀ");

// visarga
car = car.replace(/[HḥḤ]/g, "ᮂ");
car = car.replace(/᮪ᮂ/g, "ᮂ");
car = car.replace(/\u200bᮂ/g, "ᮂ");


// retrait zéro
 car = car.replace (/\u200bᮊ/g, "ᮊ");
car = car.replace (/\u200bᮋ/g, "ᮋ");
car = car.replace (/\u200bᮌ/g, "ᮌ");
car = car.replace (/\u200bᮍ/g, "ᮍ");
car = car.replace (/\u200bᮎ/g, "ᮎ");
car = car.replace (/\u200bᮏ/g, "ᮏ");
car = car.replace (/\u200bᮐ/g, "ᮐ");
car = car.replace (/\u200bᮑ/g, "ᮑ");
car = car.replace (/\u200bᮒ/g, "ᮒ");
car = car.replace (/\u200bᮓ/g, "ᮓ");
car = car.replace (/\u200bᮔ/g, "ᮔ");
car = car.replace (/\u200bᮕ/g, "ᮕ");
car = car.replace (/\u200bᮖ/g, "ᮖ");
car = car.replace (/\u200bᮗ/g, "ᮗ");
car = car.replace (/\u200bᮘ/g, "ᮘ");
car = car.replace (/\u200bᮙ/g, "ᮙ");
car = car.replace (/\u200bᮚ/g, "ᮚ");
car = car.replace (/\u200bᮛ/g, "ᮛ");
car = car.replace (/\u200bᮜ/g, "ᮜ");
car = car.replace (/\u200bᮝ/g, "ᮝ");
car = car.replace (/\u200bᮞ/g, "ᮞ");
car = car.replace (/\u200bᮟ/g, "ᮟ");
car = car.replace (/\u200bᮠ/g, "ᮠ");

car = car.replace (/0/g, "᮰");
car = car.replace (/1/g, "᮱");
car = car.replace (/2/g, "᮲");
car = car.replace (/3/g, "᮳");
car = car.replace (/4/g, "᮴");
car = car.replace (/5/g, "᮵");
car = car.replace (/6/g, "᮶");
car = car.replace (/7/g, "᮷");
car = car.replace (/8/g, "᮸");
car = car.replace (/9/g, "᮹");

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

function copysanskrit() {
car = document.conversion.saisie.value;
car = car.replace(/\u200b/g, ""); // pb finales
document.conversion.saisie.value = car;
}