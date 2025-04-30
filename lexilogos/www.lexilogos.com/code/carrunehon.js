//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "𐳀");
car = car.replace(/á/g, "𐳁");
car = car.replace(/b/g, "𐳂");
car = car.replace(/c/g, "𐳄");
car = car.replace(/𐳄s/g, "𐳆");
car = car.replace(/d/g, "𐳇");
car = car.replace(/e/g, "𐳉");
car = car.replace(/é/g, "𐳋");
car = car.replace(/f/g, "𐳌");
car = car.replace(/g/g, "𐳍");
car = car.replace(/𐳍y/g, "𐳎");
car = car.replace(/h/g, "𐳏");
car = car.replace(/i/g, "𐳐");
car = car.replace(/í/g, "𐳑");
car = car.replace(/j/g, "𐳒");
car = car.replace(/k/g, "𐳓");
car = car.replace(/𐳓=/g, "𐳔");
car = car.replace(/l/g, "𐳖");
car = car.replace(/𐳖y/g, "𐳗");
car = car.replace(/m/g, "𐳘");
car = car.replace(/n/g, "𐳙");
car = car.replace(/𐳙y/g, "𐳚");
car = car.replace(/o/g, "𐳛");
car = car.replace(/ó/g, "𐳜");
car = car.replace(/ö/g, "𐳝");
car = car.replace(/ő/g, "𐳟");
car = car.replace(/p/g, "𐳠");
car = car.replace(/r/g, "𐳢");
car = car.replace(/t/g, "𐳦");
car = car.replace(/𐳦y/g, "𐳨");
car = car.replace(/u/g, "𐳪");
car = car.replace(/ú/g, "𐳫");
car = car.replace(/ü/g, "𐳬");
car = car.replace(/ű/g, "𐳭");
car = car.replace(/v/g, "𐳮");
car = car.replace(/z/g, "𐳯");
car = car.replace(/s/g, "𐳤");
car = car.replace(/𐳤𐳯/g, "𐳥");
car = car.replace(/𐳯𐳤/g, "𐳰");

// voy
car = car.replace(/𐳀=/g, "𐳁");
car = car.replace(/𐳁=/g, "𐳀");
car = car.replace(/𐳉=/g, "𐳋");
car = car.replace(/𐳋=/g, "𐳉");
car = car.replace(/𐳐=/g, "𐳑");
car = car.replace(/𐳑=/g, "𐳐");
car = car.replace(/𐳛=/g, "𐳜");
car = car.replace(/𐳜=/g, "𐳝");
car = car.replace(/𐳝=/g, "𐳟");
car = car.replace(/𐳟=/g, "𐳛");
car = car.replace(/𐳪=/g, "𐳫");
car = car.replace(/𐳫=/g, "𐳬");
car = car.replace(/𐳬=/g, "𐳭");
car = car.replace(/𐳭=/g, "𐳪"); 

car = car.replace(/q/g, "𐳓𐳮");
car = car.replace(/w/g, "𐳮𐳮");
car = car.replace(/x/g, "𐳓𐳥");
car = car.replace(/y/g, "𐳐𐳒");

car = car.replace(/A/g, "𐲀");
car = car.replace(/Á/g, "𐲁");
car = car.replace(/B/g, "𐲂");
car = car.replace(/C/g, "𐲄");
car = car.replace(/𐲄S/g, "𐲆");
car = car.replace(/D/g, "𐲇");
car = car.replace(/E/g, "𐲉");
car = car.replace(/É/g, "𐲋");
car = car.replace(/F/g, "𐲌");
car = car.replace(/G/g, "𐲍");
car = car.replace(/𐲍Y/g, "𐲎");
car = car.replace(/H/g, "𐲏");
car = car.replace(/I/g, "𐲐");
car = car.replace(/Í/g, "𐲑");
car = car.replace(/J/g, "𐲒");
car = car.replace(/K/g, "𐲓");
car = car.replace(/𐲓=/g, "𐲔");
car = car.replace(/L/g, "𐲖");
car = car.replace(/𐲖Y/g, "𐲗");
car = car.replace(/M/g, "𐲘");
car = car.replace(/N/g, "𐲙");
car = car.replace(/𐲙Y/g, "𐲚");
car = car.replace(/O/g, "𐲛");
car = car.replace(/Ó/g, "𐲜");
car = car.replace(/Ö/g, "𐲝");
car = car.replace(/Ő/g, "𐲟");
car = car.replace(/P/g, "𐲠");
car = car.replace(/R/g, "𐲢");
car = car.replace(/T/g, "𐲦");
car = car.replace(/𐲦Y/g, "𐲨");
car = car.replace(/U/g, "𐲪");
car = car.replace(/Ú/g, "𐲫");
car = car.replace(/Ü/g, "𐲬");
car = car.replace(/Ű/g, "𐲭");
car = car.replace(/V/g, "𐲮");
car = car.replace(/Z/g, "𐲯");
car = car.replace(/S/g, "𐲤");
car = car.replace(/𐲤𐲯/g, "𐲥");
car = car.replace(/𐲯𐲤/g, "𐲰");

// voy
car = car.replace(/𐲀=/g, "𐲁");
car = car.replace(/𐲁=/g, "𐲀");
car = car.replace(/𐲉=/g, "𐲋");
car = car.replace(/𐲋=/g, "𐲉");
car = car.replace(/𐲐=/g, "𐲑");
car = car.replace(/𐲑=/g, "𐲐");
car = car.replace(/𐲛=/g, "𐲜");
car = car.replace(/𐲜=/g, "𐲝");
car = car.replace(/𐲝=/g, "𐲟");
car = car.replace(/𐲟=/g, "𐲛");
car = car.replace(/𐲪=/g, "𐲫");
car = car.replace(/𐲫=/g, "𐲬");
car = car.replace(/𐲬=/g, "𐲭");
car = car.replace(/𐲭=/g, "𐲪"); 

car = car.replace(/Q/g, "𐲓𐲮");
car = car.replace(/W/g, "𐲮𐲮");
car = car.replace(/X/g, "𐲓𐲥");
car = car.replace(/Y/g, "𐲐𐲒");

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