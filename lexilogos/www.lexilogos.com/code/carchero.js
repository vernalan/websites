//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "Ꭰ");
car = car.replace(/e/g, "Ꭱ");
car = car.replace(/i/g, "Ꭲ");
car = car.replace(/o/g, "Ꭳ");
car = car.replace(/u/g, "Ꭴ");
car = car.replace(/v/g, "Ꭵ");
car = car.replace(/hnᎠ/g, "Ꮏ");
car = car.replace(/dlᎠ/g, "Ꮬ");
car = car.replace(/tlᎠ/g, "Ꮭ");
car = car.replace(/tlᎡ/g, "Ꮮ");
car = car.replace(/tlᎢ/g, "Ꮯ");
car = car.replace(/tlᎣ/g, "Ꮰ");
car = car.replace(/tlᎤ/g, "Ꮱ");
car = car.replace(/tlᎥ/g, "Ꮲ");
car = car.replace(/gᎠ/g, "Ꭶ");
car = car.replace(/kᎠ/g, "Ꭷ");
car = car.replace(/gᎡ/g, "Ꭸ");
car = car.replace(/gᎢ/g, "Ꭹ");
car = car.replace(/gᎣ/g, "Ꭺ");
car = car.replace(/gᎤ/g, "Ꭻ");
car = car.replace(/gᎥ/g, "Ꭼ");
car = car.replace(/hᎠ/g, "Ꭽ");
car = car.replace(/hᎡ/g, "Ꭾ");
car = car.replace(/hᎢ/g, "Ꭿ");
car = car.replace(/hᎣ/g, "Ꮀ");
car = car.replace(/hᎤ/g, "Ꮁ");
car = car.replace(/hᎥ/g, "Ꮂ");
car = car.replace(/lᎠ/g, "Ꮃ");
car = car.replace(/lᎡ/g, "Ꮄ");
car = car.replace(/lᎢ/g, "Ꮅ");
car = car.replace(/lᎣ/g, "Ꮆ");
car = car.replace(/lᎤ/g, "Ꮇ");
car = car.replace(/lᎥ/g, "Ꮈ");
car = car.replace(/mᎠ/g, "Ꮉ");
car = car.replace(/mᎡ/g, "Ꮊ");
car = car.replace(/mᎢ/g, "Ꮋ");
car = car.replace(/mᎣ/g, "Ꮌ");
car = car.replace(/mᎤ/g, "Ꮍ");
car = car.replace(/mᎥ/g, "ᏽ"); // archaic
car = car.replace(/nᎠ/g, "Ꮎ");
car = car.replace(/nᎡ/g, "Ꮑ");
car = car.replace(/nᎢ/g, "Ꮒ");
car = car.replace(/nᎣ/g, "Ꮓ");
car = car.replace(/nᎤ/g, "Ꮔ");
car = car.replace(/nᎥ/g, "Ꮕ");
car = car.replace(/Ꮎh/g, "Ꮐ");
car = car.replace(/qᎤᎠ/g, "Ꮖ");
car = car.replace(/qᎤᎡ/g, "Ꮗ");
car = car.replace(/qᎤᎢ/g, "Ꮘ");
car = car.replace(/qᎤᎣ/g, "Ꮙ");
car = car.replace(/qᎤᎤ/g, "Ꮚ");
car = car.replace(/qᎤᎥ/g, "Ꮛ");
car = car.replace(/s/g, "Ꮝ");
car = car.replace(/ᏍᎠ/g, "Ꮜ");
car = car.replace(/ᏍᎡ/g, "Ꮞ");
car = car.replace(/ᏍᎢ/g, "Ꮟ");
car = car.replace(/ᏍᎣ/g, "Ꮠ");
car = car.replace(/ᏍᎤ/g, "Ꮡ");
car = car.replace(/ᏍᎥ/g, "Ꮢ");
car = car.replace(/tᏌ/g, "Ꮳ");
car = car.replace(/tᏎ/g, "Ꮴ");
car = car.replace(/tᏏ/g, "Ꮵ");
car = car.replace(/tᏐ/g, "Ꮶ");
car = car.replace(/tᏑ/g, "Ꮷ");
car = car.replace(/tᏒ/g, "Ꮸ");
car = car.replace(/dᎠ/g, "Ꮣ");
car = car.replace(/tᎠ/g, "Ꮤ");
car = car.replace(/dᎡ/g, "Ꮥ");
car = car.replace(/tᎡ/g, "Ꮦ");
car = car.replace(/dᎢ/g, "Ꮧ");
car = car.replace(/tᎢ/g, "Ꮨ");
car = car.replace(/dᎣ/g, "Ꮩ");
car = car.replace(/dᎤ/g, "Ꮪ");
car = car.replace(/dᎥ/g, "Ꮫ");
car = car.replace(/wᎠ/g, "Ꮹ");
car = car.replace(/wᎡ/g, "Ꮺ");
car = car.replace(/wᎢ/g, "Ꮻ");
car = car.replace(/wᎣ/g, "Ꮼ");
car = car.replace(/wᎤ/g, "Ꮽ");
car = car.replace(/wᎥ/g, "Ꮾ");
car = car.replace(/yᎠ/g, "Ꮿ");
car = car.replace(/yᎡ/g, "Ᏸ");
car = car.replace(/yᎢ/g, "Ᏹ");
car = car.replace(/yᎣ/g, "Ᏺ");
car = car.replace(/yᎤ/g, "Ᏻ");
car = car.replace(/yᎥ/g, "Ᏼ");

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