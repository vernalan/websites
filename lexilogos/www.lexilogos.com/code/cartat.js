//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace (/a/g, "а");
car = car.replace (/ä/g, "ә");
car = car.replace (/b/g, "б");
car = car.replace (/[wv]/g, "в");
car = car.replace (/[gğ]/g, "г");
//car = car.replace (/ğ/g, "ғ");
car = car.replace (/d/g, "д");
car = car.replace (/j/g, "ж");
car = car.replace (/c/g, "җ");
car = car.replace (/z/g, "з");
car = car.replace (/i/g, "и");
car = car.replace (/y/g, "й");
car = car.replace (/[kq]/g, "к");
//car = car.replace (/q/g, "қ");
car = car.replace (/l/g, "л");
car = car.replace (/m/g, "м");
car = car.replace (/n/g, "н");
car = car.replace (/ñ/g, "ң");
car = car.replace (/o/g, "о");
car = car.replace (/ö/g, "ө");
car = car.replace (/p/g, "п");
car = car.replace (/r/g, "р");
car = car.replace (/s/g, "с");
car = car.replace (/t/g, "т");
car = car.replace (/u/g, "у");
car = car.replace (/ü/g, "ү");
car = car.replace (/f/g, "ф");
car = car.replace (/x/g, "х");
car = car.replace (/h/g, "һ");
car = car.replace (/тс/g, "ц");
car = car.replace (/җ=/g, "ч");
car = car.replace (/ц=/g, "ч");
car = car.replace (/ч=/g, "ц");
car = car.replace (/ç/g, "ч");
car = car.replace (/ş/g, "ш");
car = car.replace (/с=/g, "ш");
car = car.replace (/ш=/g, "с");
car = car.replace (/шч/g, "щ");
car = car.replace (/и=/g, "ы");
car = car.replace (/ы=/g, "и");
car = car.replace (/ı/g, "ы");
car = car.replace (/йу/g, "ю");
car = car.replace (/йа/g, "я");
car = car.replace (/йо/g, "ё");
car = car.replace (/’/g, "ь"); //var
car = car.replace (/'/g, "ь"); //var
car = car.replace (/ʹ/g, "ь");
car = car.replace (/ʺ/g, "ъ");
car = car.replace (/ьь/g, "ъ");

car = car.replace (/[éè]/g, "э");
car = car.replace (/e/g, "е");
car = car.replace (/е=/g, "э");
car = car.replace (/э=/g, "е");
car = car.replace (/ä/g, "ә");
car = car.replace (/а=/g, "ә");
car = car.replace (/ә=/g, "а");
car = car.replace (/ë/g, "ё");

car = car.replace (/җ=/g, "ж");
car = car.replace (/ж=/g, "җ");
car = car.replace (/г=/g, "ғ");
car = car.replace (/ғ=/g, "г");
car = car.replace (/к=/g, "қ");
car = car.replace (/қ=/g, "к");
car = car.replace (/н=/g, "ң");
car = car.replace (/ң=/g, "н");
car = car.replace (/о=/g, "ө");
car = car.replace (/ө=/g, "о");
car = car.replace (/у=/g, "ү");
car = car.replace (/ү=/g, "у");

car = car.replace (/A/g, "А");
car = car.replace (/B/g, "Б");
car = car.replace (/[WV]/g, "В");
car = car.replace (/[GĞ]/g, "Г");
//car = car.replace (/Ğ/g, "Ғ");
car = car.replace (/D/g, "Д");
car = car.replace (/J/g, "Ж");
car = car.replace (/C/g, "Җ");
car = car.replace (/Z/g, "З");
car = car.replace (/I/g, "И");
car = car.replace (/Y/g, "Й");
car = car.replace (/[KQ]/g, "К");
//car = car.replace (/Q/g, "Қ");
car = car.replace (/L/g, "Л");
car = car.replace (/M/g, "М");
car = car.replace (/N/g, "Н");
car = car.replace (/Ñ/g, "Ң");
car = car.replace (/O/g, "О");
car = car.replace (/Ö/g, "Ө");
car = car.replace (/P/g, "П");
car = car.replace (/R/g, "Р");
car = car.replace (/S/g, "С");
car = car.replace (/T/g, "Т");
car = car.replace (/U/g, "У");
car = car.replace (/Ü/g, "Ү");
car = car.replace (/F/g, "Ф");
car = car.replace (/X/g, "Х");
car = car.replace (/H/g, "Һ");
car = car.replace (/Тс/g, "Ц");
car = car.replace (/ТС/g, "Ц");
car = car.replace (/Җ=/g, "Ч");
car = car.replace (/Ч=/g, "Ц");
car = car.replace (/Ц=/g, "Ч");
car = car.replace (/Ç/g, "Ч");
car = car.replace (/Ş/g, "Ш");
car = car.replace (/С=/g, "Ш");
car = car.replace (/Ш=/g, "С");
car = car.replace (/ШЧ/g, "Щ");
car = car.replace (/И=/g, "Ы");
car = car.replace (/Ы=/g, "И");
car = car.replace (/I/g, "Ы");
car = car.replace (/ЙУ/g, "Ю");
car = car.replace (/ЙА/g, "Я");
car = car.replace (/ЙО/g, "Ё");
car = car.replace (/Йу/g, "Ю");
car = car.replace (/Йа/g, "Я");
car = car.replace (/Йо/g, "Ё");

car = car.replace (/Җ=/g, "Ж");
car = car.replace (/Ж=/g, "Җ");
car = car.replace (/Г=/g, "Ғ");
car = car.replace (/Ғ=/g, "Г");
car = car.replace (/К=/g, "Қ");
car = car.replace (/Қ=/g, "К");
car = car.replace (/О=/g, "Ө");
car = car.replace (/Ө=/g, "О");
car = car.replace (/У=/g, "Ү");
car = car.replace (/Ү=/g, "У");
car = car.replace (/Н=/g, "Ң");
car = car.replace (/Ң=/g, "Н");
car = car.replace (/С=/g, "Ҫ");
car = car.replace (/Ҫ=/g, "С");

car = car.replace (/[ÉÈ]/g, "Э");
car = car.replace (/E/g, "Е");
car = car.replace (/Е=/g, "Э");
car = car.replace (/Э=/g, "Е");
car = car.replace (/Ä/g, "Ә");
car = car.replace (/А=/g, "Ә");
car = car.replace (/Ә=/g, "А");
car = car.replace (/Ë/g, "Ё");

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