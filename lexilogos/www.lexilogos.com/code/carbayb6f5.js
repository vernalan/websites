var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/e/g, "i");
car = car.replace(/o/g, "u");
car = car.replace(/[kc]/g, "ᜃ᜔");
car = car.replace(/g/g, "ᜄ᜔");
car = car.replace(/n/g, "ᜈ᜔");
car = car.replace(/ᜈ᜔ᜄ᜔/g, "ᜅ᜔");
car = car.replace(/G/g, "ᜅ᜔");
car = car.replace(/t/g, "ᜆ᜔");
car = car.replace(/r/g, "ᜍ᜔");
car = car.replace(/d/g, "ᜇ᜔");
car = car.replace(/f/g, "ᜉ᜔");
car = car.replace(/p/g, "ᜉ᜔");
car = car.replace(/v/g, "ᜊ᜔");
car = car.replace(/b/g, "ᜊ᜔");
car = car.replace(/m/g, "ᜋ᜔");
car = car.replace(/y/g, "ᜌ᜔");
car = car.replace(/l/g, "ᜎ᜔");
car = car.replace(/w/g, "ᜏ᜔");
car = car.replace(/s/g, "ᜐ᜔");
car = car.replace(/h/g, "ᜑ᜔");
car = car.replace(/R/g, "ᜟ᜔");
car = car.replace(/a/g, "ᜀ");
car = car.replace(/i/g, "ᜁ");
car = car.replace(/u/g, "ᜂ");
car = car.replace(/᜔ᜀ/g, "");
car = car.replace(/᜔ᜁ/g, "ᜒ");
car = car.replace(/᜔ᜂ/g, "ᜓ"); 

car = car.replace(/x/g, "᜕");
car = car.replace(/᜔᜕/g, "᜕");

// ponctuation
car = car.replace(/\|/g, "᜵");
car = car.replace(/\//g, "᜵");
car = car.replace(/᜵᜵/g, "᜶");

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