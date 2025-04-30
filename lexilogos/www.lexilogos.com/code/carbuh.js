// copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ᝀ");
car = car.replace(/[ie]/g, "ᝁ");
car = car.replace(/[uo]/g, "ᝂ");

//cons
car = car.replace(/n/g, "ᝈ\u200b");
car = car.replace(/k/g, "ᝃ\u200b");
car = car.replace(/g/g, "ᝄ\u200b");
car = car.replace(/G/g, "ᝅ\u200b");
car = car.replace(/t/g, "ᝆ\u200b");
car = car.replace(/d/g, "ᝇ\u200b");
car = car.replace(/p/g, "ᝉ\u200b");
car = car.replace(/b/g, "ᝊ\u200b");
car = car.replace(/m/g, "ᝋ\u200b");
car = car.replace(/y/g, "ᝌ\u200b");
car = car.replace(/r/g, "ᝍ\u200b");
car = car.replace(/l/g, "ᝎ\u200b");
car = car.replace(/w/g, "ᝏ\u200b");
car = car.replace(/s/g, "ᝐ\u200b");
car = car.replace(/h/g, "ᝑ\u200b");

//ng
car = car.replace(/ᝈ\u200bᝄ\u200b/g, "ᝅ\u200b");

//suppression du zero
car = car.replace(/\u200bᝀ/g, "");
car = car.replace(/\u200bᝁ/g, "ᝒ");
car = car.replace(/\u200bᝂ/g, "ᝓ");

car = car.replace(/\u200bᝃ/g, "ᝃ");
car = car.replace(/\u200bᝄ/g, "ᝄ");
car = car.replace(/\u200bᝅ/g, "ᝅ");
car = car.replace(/\u200bᝆ/g, "ᝆ");
car = car.replace(/\u200bᝇ/g, "ᝇ");
car = car.replace(/\u200bᝈ/g, "ᝈ");
car = car.replace(/\u200bᝉ/g, "ᝉ");
car = car.replace(/\u200bᝊ/g, "ᝊ");
car = car.replace(/\u200bᝋ/g, "ᝋ");
car = car.replace(/\u200bᝌ/g, "ᝌ");
car = car.replace(/\u200bᝍ/g, "ᝍ");
car = car.replace(/\u200bᝎ/g, "ᝎ");
car = car.replace(/\u200bᝏ/g, "ᝏ");
car = car.replace(/\u200bᝐ/g, "ᝐ");
car = car.replace(/\u200bᝑ/g, "ᝑ");

car = car.replace(/\u200b /g, " "); // pb finales

// ponctuation
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
