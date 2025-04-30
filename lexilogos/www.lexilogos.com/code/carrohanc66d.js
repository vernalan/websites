//  copyright lexilogos.com
var car;
function transcrire() {
car = document.conversion.saisie.value;
 car = car.replace(/A/g, "𐴀");
car = car.replace(/b/g, "𐴁");
car = car.replace(/t/g, "𐴃");
car = car.replace(/TṭṬ]/g, "𐴄");
car = car.replace(/j/g, "𐴅");
car = car.replace(/c/g, "𐴆");
car = car.replace(/h/g, "𐴇");
car = car.replace(/[HxḥḤ]/g, "𐴈");
car = car.replace(/f/g, "𐴉");
car = car.replace(/p/g, "𐴂");
car = car.replace(/d/g, "𐴊");
car = car.replace(/[DḍḌ]/g, "𐴋");
car = car.replace(/r/g, "𐴌");
car = car.replace(/[çRṛṚ]/g, "𐴍");
car = car.replace(/z/g, "𐴎");
car = car.replace(/s/g, "𐴏");
car = car.replace(/[SšŠ]/g, "𐴐");
car = car.replace(/k/g, "𐴑");
car = car.replace(/g/g, "𐴒");
car = car.replace(/l/g, "𐴓");
car = car.replace(/m/g, "𐴔");
car = car.replace(/n/g, "𐴕");
car = car.replace(/w/g, "𐴖");
car = car.replace(/W/g, "𐴗");
car = car.replace(/y/g, "𐴘");
car = car.replace(/Y/g, "𐴙");
car = car.replace(/[Gṅ]/g, "𐴚");
car = car.replace(/[ñNÑ]/g, "𐴛");
car = car.replace(/v/g, "𐴜");

car = car.replace(/a/g, "𐴝");
car = car.replace(/i/g, "𐴞");
car = car.replace(/u/g, "𐴟");
car = car.replace(/e/g, "𐴠");
car = car.replace(/o/g, "𐴡");

//tons
car = car.replace(/́/g, "𐴤");
car = car.replace(/̂/g, "𐴥");
car = car.replace(/̌/g, "𐴦");

car = car.replace(/’/g, "\'");
car = car.replace(/\'/g, "𐴤");
car = car.replace(/𐴤𐴤/g, "𐴥");
car = car.replace(/𐴥𐴥/g, "𐴦");
car = car.replace(/𐴦𐴦/g, "𐴤");

car = car.replace(/0/g, "𐴰");
car = car.replace(/1/g, "𐴱");
car = car.replace(/2/g, "𐴲");
car = car.replace(/3/g, "𐴳");
car = car.replace(/4/g, "𐴴");
car = car.replace(/5/g, "𐴵");
car = car.replace(/6/g, "𐴶");
car = car.replace(/7/g, "𐴷");
car = car.replace(/8/g, "𐴸");
car = car.replace(/9/g, "𐴹");

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