//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/b/g, "ᚁ");
car = car.replace(/l/g, "ᚂ");
car = car.replace(/[fw]/g, "ᚃ");
car = car.replace(/s/g, "ᚄ");
car = car.replace(/n/g, "ᚅ");
car = car.replace(/ᚁ=/g, "ᚂ");
car = car.replace(/ᚂ=/g, "ᚃ");
car = car.replace(/ᚃ=/g, "ᚄ");
car = car.replace(/ᚄ=/g, "ᚅ");
car = car.replace(/ᚅ=/g, "ᚁ");
car = car.replace(/[hj]/g, "ᚆ");
car = car.replace(/d/g, "ᚇ");
car = car.replace(/t/g, "ᚈ");
car = car.replace(/[ck]/g, "ᚉ");
car = car.replace(/q/g, "ᚊ");
car = car.replace(/ᚆ=/g, "ᚇ");
car = car.replace(/ᚇ=/g, "ᚈ");
car = car.replace(/ᚈ=/g, "ᚉ");
car = car.replace(/ᚉ=/g, "ᚊ");
car = car.replace(/ᚊ=/g, "ᚆ");

car = car.replace(/m/g, "ᚋ");
car = car.replace(/g/g, "ᚌ");
car = car.replace(/ᚌᚌ/g, "ᚍ");
car = car.replace(/z/g, "ᚎ");
car = car.replace(/r/g, "ᚏ");
car = car.replace(/ᚋ=/g, "ᚌ");
car = car.replace(/ᚌ=/g, "ᚍ");
car = car.replace(/ᚍ=/g, "ᚎ");
car = car.replace(/ᚎ=/g, "ᚏ");
car = car.replace(/ᚏ=/g, "ᚋ");

car = car.replace(/a/g, "ᚐ");
car = car.replace(/o/g, "ᚑ");
car = car.replace(/u/g, "ᚒ");
car = car.replace(/e/g, "ᚓ");
car = car.replace(/i/g, "ᚔ");
car = car.replace(/ᚐ=/g, "ᚑ");
car = car.replace(/ᚑ=/g, "ᚒ");
car = car.replace(/ᚒ=/g, "ᚓ");
car = car.replace(/ᚓ=/g, "ᚔ");
car = car.replace(/ᚔ=/g, "ᚐ");

car = car.replace(/[éE]/g, "ᚕ");
car = car.replace(/[óO]/g, "ᚖ");
car = car.replace(/[úU]/g, "ᚗ");
car = car.replace(/[íI]/g, "ᚘ");
car = car.replace(/[xA]/g, "ᚙ");
car = car.replace(/p/g, "ᚚ"); 
car = car.replace(/>/g, "᚛"); 
car = car.replace(/</g, "᚜"); 
car = car.replace(/-/g, " "); 
car = car.replace(/_/g, " "); 
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