//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;

// voy
car = car.replace(/A/g, "ະ");
car = car.replace(/a/g, "ັ");
car = car.replace(/ັັ/g, "າ");
car = car.replace(/ā/g, "າ");
car = car.replace(/າັ/g, "ຳ");
car = car.replace(/ຳັ/g, "ະ");
car = car.replace(/ະັ/g, "ັ");
car = car.replace(/i/g, "ິ");
car = car.replace(/ິິ/g, "ີ");
car = car.replace(/ī/g, "ີ");
car = car.replace(/ີິ/g, "ິ");

car = car.replace(/[uư]/g, "ຶ");
car = car.replace(/ຶຶ/g, "ື");
car = car.replace(/ū/g, "ື");
car = car.replace(/ືຶ/g, "ຸ");
car = car.replace(/U/g, "ຸ");
car = car.replace(/ຸຸ/g, "ູ");
car = car.replace(/ຸຶ/g, "ູ");
car = car.replace(/Ū/g, "ູ");
car = car.replace(/ູຸ/g, "ຸ");
car = car.replace(/ູຶ/g, "ຶ");

car = car.replace(/o/g, "ົ");
car = car.replace(/ົົ/g, "ໍ");
car = car.replace(/ໍົ/g, "ົ");
car = car.replace(/O/g, "ໂ");
car = car.replace(/ໂໂ/g, "ໃ");
car = car.replace(/ໃໂ/g, "ໄ");
car = car.replace(/ໄໂ/g, "ໂ");
car = car.replace(/ໂົ/g, "ໃ");
car = car.replace(/ໃົ/g, "ໄ");
car = car.replace(/ໄົ/g, "ໂ"); 

car = car.replace(/[eé]/g, "ເ");
car = car.replace(/ເເ/g, "ແ");
car = car.replace(/[EēÈè]/g, "ແ");
car = car.replace(/ແເ/g, "ເ");

//cons
car = car.replace(/h/g, "ຫ");
car = car.replace(/ຫ=/g, "ຮ");
car = car.replace(/ຮ=/g, "ຫ");
car = car.replace(/n/g, "ນ");
car = car.replace(/ນg/g, "ງ");
car = car.replace(/ñ/g, "ຍ");
car = car.replace(/k/g, "ກ");
car = car.replace(/ກຫ/g, "ຂ");
car = car.replace(/K/g, "ຂ");
car = car.replace(/ຂ=/g, "ຄ");
car = car.replace(/ຄ=/g, "ຂ");

car = car.replace(/c/g, "ຈ");

car = car.replace(/t/g, "ຕ");
car = car.replace(/d/g, "ດ");
car = car.replace(/ຕຫ/g, "ຖ");
car = car.replace(/T/g, "ຖ");
car = car.replace(/ຖ=/g, "ທ");
car = car.replace(/ທ=/g, "ຖ");


car = car.replace(/p/g, "ປ");
car = car.replace(/ປຫ/g, "ພ");
car = car.replace(/P/g, "ພ");
car = car.replace(/ພ=/g, "ຜ");
car = car.replace(/ຜ=/g, "ພ");


car = car.replace(/b/g, "ບ");
car = car.replace(/f/g, "ຝ");
car = car.replace(/ຝ=/g, "ຟ");
car = car.replace(/ຟ=/g, "ຝ");
car = car.replace(/F/g, "ຟ");
car = car.replace(/m/g, "ມ");
car = car.replace(/y/g, "ຢ");
car = car.replace(/r/g, "ຣ");
car = car.replace(/l/g, "ລ");
car = car.replace(/w/g, "ວ");
car = car.replace(/s/g, "ສ");
car = car.replace(/ຊ=/g, "ສ");
car = car.replace(/ສ=/g, "ຊ");
car = car.replace(/x/g, "ອ");

//ton
car = car.replace(/\'/g, "່");
car = car.replace(/່່/g, "້");
car = car.replace(/້່/g, "໊");
car = car.replace(/໊່/g, "໋");
car = car.replace(/໋່/g, "");

car = car.replace(/0/g, "໐");
car = car.replace(/1/g, "໑");
car = car.replace(/2/g, "໒");
car = car.replace(/3/g, "໓");
car = car.replace(/4/g, "໔");
car = car.replace(/5/g, "໕");
car = car.replace(/6/g, "໖");
car = car.replace(/7/g, "໗");
car = car.replace(/8/g, "໘");
car = car.replace(/9/g, "໙");

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