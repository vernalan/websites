// copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
 car = car.replace(/k/g, "ᨀ\u200b");
car = car.replace(/g/g, "ᨁ\u200b");
car = car.replace(/G/g, "ᨂ\u200b");
car = car.replace(/K/g, "ᨃ\u200b");
car = car.replace(/p/g, "ᨄ\u200b");
car = car.replace(/b/g, "ᨅ\u200b");
car = car.replace(/m/g, "ᨆ\u200b");
car = car.replace(/P/g, "ᨇ\u200b");
car = car.replace(/t/g, "ᨈ\u200b");
car = car.replace(/d/g, "ᨉ\u200b");
car = car.replace(/n/g, "ᨊ\u200b");
car = car.replace(/R/g, "ᨋ\u200b");
car = car.replace(/c/g, "ᨌ\u200b");
car = car.replace(/j/g, "ᨍ\u200b");
car = car.replace(/[Yñ]/g, "ᨎ\u200b");
car = car.replace(/C/g, "ᨏ\u200b");
car = car.replace(/y/g, "ᨐ\u200b");
car = car.replace(/r/g, "ᨑ\u200b");
car = car.replace(/l/g, "ᨒ\u200b");
car = car.replace(/[vw]/g, "ᨓ\u200b");
car = car.replace(/s/g, "ᨔ\u200b");
car = car.replace(/h/g, "ᨖ\u200b");

car = car.replace(/\u200bi/g, "ᨗ");
car = car.replace(/\u200bu/g, "ᨘ");
car = car.replace(/\u200be/g, "ᨙ");
car = car.replace(/\u200bo/g, "ᨚ");
car = car.replace(/\u200bə/g, "ᨛ");
car = car.replace(/\u200bE/g, "ᨛ");

//a
car = car.replace(/a/g, "ᨕ\u200b");
car = car.replace(/\u200bᨕ\u200b/g, "");

car = car.replace(/i/g, "ᨕᨗ");
car = car.replace(/u/g, "ᨕᨘ");
car = car.replace(/e/g, "ᨕᨙ");
car = car.replace(/o/g, "ᨕᨚ");
car = car.replace(/ə/g, "ᨕᨛ");
car = car.replace(/E/g, "ᨕᨛ");



//suppression du zero
car = car.replace(/\200bᨀ/g, "ᨀ");
car = car.replace(/\200bᨁ/g, "ᨁ");
car = car.replace(/\200bᨂ/g, "ᨂ");
car = car.replace(/\200bᨃ/g, "ᨃ");
car = car.replace(/\200bᨄ/g, "ᨄ");
car = car.replace(/\200bᨅ/g, "ᨅ");
car = car.replace(/\200bᨆ/g, "ᨆ");
car = car.replace(/\200bᨇ/g, "ᨇ");
car = car.replace(/\200bᨈ/g, "ᨈ");
car = car.replace(/\200bᨉ/g, "ᨉ");
car = car.replace(/\200bᨊ/g, "ᨊ");
car = car.replace(/\200bᨋ/g, "ᨋ");
car = car.replace(/\200bᨌ/g, "ᨌ");
car = car.replace(/\200bᨍ/g, "ᨍ");
car = car.replace(/\200bᨎ/g, "ᨎ");
car = car.replace(/\200bᨏ/g, "ᨏ");
car = car.replace(/\200bᨐ/g, "ᨐ");
car = car.replace(/\200bᨑ/g, "ᨑ");
car = car.replace(/\200bᨒ/g, "ᨒ");
car = car.replace(/\200bᨓ/g, "ᨓ");
car = car.replace(/\200bᨔ/g, "ᨔ");
car = car.replace(/\200bᨕ/g, "ᨕ");
car = car.replace(/\200bᨖ/g, "ᨖ");


car = car.replace(/\u200b /g, " "); // pb finales

// ponctuation
car = car.replace(/,/g, "᨞");
car = car.replace(/\./g, "᨞");


car = car.replace(/\|/g, "᭞");
car = car.replace(/\//g, "᭞");
car = car.replace(/᭞᭞/g, "᭟");

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
