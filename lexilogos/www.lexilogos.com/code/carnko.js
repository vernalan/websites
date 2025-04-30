//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ߊ");
car = car.replace(/e/g, "ߋ");
car = car.replace(/i/g, "ߌ");
car = car.replace(/[ɛE]/g, "ߍ");
car = car.replace(/u/g, "ߎ");
car = car.replace(/o/g, "ߏ");
car = car.replace(/[ɔO]/g, "ߐ");

car = car.replace(/[ŋG]/g, "ߒ");
car = car.replace(/b/g, "ߓ");
car = car.replace(/p/g, "ߔ");
car = car.replace(/t/g, "ߕ");
car = car.replace(/j/g, "ߖ");
car = car.replace(/c/g, "ߗ");
car = car.replace(/d/g, "ߘ");
car = car.replace(/r/g, "ߙ");
car = car.replace(/ߙߙ/g, "ߚ");
car = car.replace(/R/g, "ߚ");
car = car.replace(/s/g, "ߛ");
car = car.replace(/g/g, "ߜ");
car = car.replace(/f/g, "ߝ");
car = car.replace(/k/g, "ߞ");
car = car.replace(/l/g, "ߟ");
car = car.replace(/m/g, "ߡ");
car = car.replace(/[ŋN]/g, "ߢ");
car = car.replace(/n/g, "ߣ");
car = car.replace(/h/g, "ߤ");
car = car.replace(/w/g, "ߥ");
car = car.replace(/y/g, "ߦ");

car = car.replace(/0/g, "߀");
car = car.replace(/1/g, "߁");
car = car.replace(/2/g, "߂");
car = car.replace(/3/g, "߃");
car = car.replace(/4/g, "߄");
car = car.replace(/5/g, "߅");
car = car.replace(/6/g, "߆");
car = car.replace(/7/g, "߇");
car = car.replace(/8/g, "߈");
car = car.replace(/9/g, "߉");

car = car.replace(/,/g, "߸");
car = car.replace(/\!/g, "߹");

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