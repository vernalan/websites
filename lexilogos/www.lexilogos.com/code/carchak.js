 // copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/\+/g, "𑄳");
car = car.replace(/𑄴𑄳/g, "𑄳");

car = car.replace(/[Aā]/g, "𑄃");
car = car.replace(/i/g, "𑄄");
car = car.replace(/u/g, "𑄅");
car = car.replace(/e/g, "𑄆");

car = car.replace(/𑄄𑄄/g, "𑄃𑄩");
car = car.replace(/𑄅𑄅/g, "𑄃𑄫");
car = car.replace(/[Iī]/g, "𑄃𑄩");
car = car.replace(/[Uū]/g, "𑄃𑄫");

car = car.replace(/𑄃𑄄/g, "𑄃𑄭"); //AI
car = car.replace(/O/g, "𑄃𑄰");  //OI


// suppression du virama
car = car.replace(/𑄨𑄄/g, "𑄩");  //ii
car = car.replace(/𑄪𑄅/g, "𑄫");  //uu 

car = car.replace(/𑄴a/g, "𑄧");
//car = car.replace(/𑄧a/g, "\u200b");
car = car.replace(/𑄧a/g, "");
car = car.replace(/𑄴𑄃/g, "𑅅");
car = car.replace(/𑄴𑄅/g, "𑄪");
car = car.replace(/𑄴𑄄/g, "𑄨");
car = car.replace(/𑄴𑄆/g, "𑄬");

car = car.replace(/𑄧𑄄/g, "𑄭");
car = car.replace(/𑄴o/g, "𑄮");
car = car.replace(/𑄧𑄅/g, "𑄯");

car = car.replace(/𑄮𑄄/g, "𑄰"); //oi
car = car.replace(/𑄬𑄄/g, "𑅆"); //ei


// diacritiques (ft)
//car = car.replace(/\u200b॑/g, "॑");
car = car.replace(/\u200b\𑄁/g, "𑄁");
car = car.replace(/\u200b\𑄂/g, "𑄂");
//car = car.replace(/\u200b\॓/g, "॓");
//car = car.replace(/\u200b\॔/g, "॔");


//cons
car = car.replace(/n/g, "𑄚𑄴");
car = car.replace(/k/g, "𑄇𑄴");
car = car.replace(/g/g, "𑄉𑄴");
car = car.replace(/c/g, "𑄌𑄴");
car = car.replace(/j/g, "𑄎𑄴");
car = car.replace(/[TṭṬ]/g, "𑄑𑄴");
car = car.replace(/[DḍḌ]/g, "𑄓𑄴");
car = car.replace(/[NṇṆ]/g, "𑄕𑄴");
car = car.replace(/t/g, "𑄖𑄴");
car = car.replace(/d/g, "𑄘𑄴");
car = car.replace(/p/g, "𑄛𑄴");
car = car.replace(/b/g, "𑄝𑄴");
car = car.replace(/m/g, "𑄟𑄴");

car = car.replace(/Y/g, "𑄠𑄴");
car = car.replace(/y/g, "𑄡𑄴");
car = car.replace(/r/g, "𑄢𑄴");
car = car.replace(/l/g, "𑄣𑄴");
car = car.replace(/v/g, "𑄤𑄴");
car = car.replace(/h/g, "𑄦𑄴");
car = car.replace(/s/g, "𑄥𑄴");
// cas particuliers
car = car.replace(/[ṅG]/g, "𑄋𑄴");
car = car.replace(/[ñJ]/g, "𑄐𑄴");
car = car.replace(/𑄚𑄴𑄉𑄴/g, "𑄋𑄴");
car = car.replace(/𑄚𑄴𑄎𑄴/g, "𑄐𑄴");

// aspirées
car = car.replace(/𑄇𑄴𑄦𑄴/g, "𑄈𑄴");
car = car.replace(/𑄉𑄴𑄦𑄴/g, "𑄊𑄴");
car = car.replace(/𑄌𑄴𑄦𑄴/g, "𑄍𑄴");
car = car.replace(/𑄎𑄴𑄦𑄴/g, "𑄏𑄴");
car = car.replace(/𑄑𑄴𑄦𑄴/g, "𑄒𑄴");
car = car.replace(/𑄓𑄴𑄦𑄴/g, "𑄔𑄴");
car = car.replace(/𑄖𑄴𑄦𑄴/g, "𑄗𑄴");
car = car.replace(/𑄘𑄴𑄦𑄴/g, "𑄙𑄴");
car = car.replace(/𑄖𑄴𑄦𑄴/g, "𑄗𑄴");
car = car.replace(/𑄘𑄴𑄦𑄴/g, "𑄙𑄴");
car = car.replace(/𑄛𑄴𑄦𑄴/g, "𑄜𑄴");
car = car.replace(/𑄝𑄴𑄦𑄴/g, "𑄞𑄴");


//suppression du zero (ft)
car = car.replace(/\u200b𑄇/g, "𑄇");
car = car.replace(/\u200b𑄈/g, "𑄈");
car = car.replace(/\u200b𑄉/g, "𑄉");
car = car.replace(/\u200b𑄊/g, "𑄊");
car = car.replace(/\u200b𑄋/g, "𑄋");
car = car.replace(/\u200b𑄌/g, "𑄌");
car = car.replace(/\u200b𑄍/g, "𑄍");
car = car.replace(/\u200b𑄎/g, "𑄎");
car = car.replace(/\u200b𑄏/g, "𑄏");
car = car.replace(/\u200b𑄐/g, "𑄐");
car = car.replace(/\u200b𑄑/g, "𑄑");
car = car.replace(/\u200b𑄒/g, "𑄒");
car = car.replace(/\u200b𑄓/g, "𑄓");
car = car.replace(/\u200b𑄔/g, "𑄔");
car = car.replace(/\u200b𑄕/g, "𑄕");
car = car.replace(/\u200b𑄖/g, "𑄖");
car = car.replace(/\u200b𑄗/g, "𑄗");
car = car.replace(/\u200b𑄘/g, "𑄘");
car = car.replace(/\u200b𑄙/g, "𑄙");
car = car.replace(/\u200b𑄚/g, "𑄚");
car = car.replace(/\u200b𑄛/g, "𑄛");
car = car.replace(/\u200b𑄜/g, "𑄜");
car = car.replace(/\u200b𑄝/g, "𑄝");
car = car.replace(/\u200b𑄞/g, "𑄞");
car = car.replace(/\u200b𑄟/g, "𑄟");

car = car.replace(/\u200b𑄡/g, "𑄡");
car = car.replace(/\u200b𑄢/g, "𑄢");
car = car.replace(/\u200b𑄣/g, "𑄣");

car = car.replace(/\u200b𑄤/g, "𑄤");
car = car.replace(/\u200b𑄠/g, "𑄠");
car = car.replace(/\u200b𑄦/g, "𑄦");

car = car.replace(/\u200b𑄥/g, "𑄥");
car = car.replace(/\u200b /g, " ");



// anusvara
car = car.replace(/[MṃṂṁ]/g, "𑄁");
car = car.replace(/\u200b𑄁/g, "𑄁");
car = car.replace(/𑄴𑄁/g, "𑄁");
// + candrabindu
car = car.replace(/𑄁𑄁/g, "𑄀");
car = car.replace(/𑄀𑄁/g, "");
car = car.replace(/\u200b𑄀/g, "𑄀");

// visarga
car = car.replace(/[HḥḤ]/g, "𑄂");
car = car.replace(/𑄴𑄂/g, "𑄂");
car = car.replace(/\u200b\𑄂/g, "𑄂");



// ponctuation
car = car.replace(/\|/g, "𑅁");
car = car.replace(/\//g, "𑅁");
car = car.replace(/𑅁𑅁/g, "𑅂");

car = car.replace(/0\+/g, "𑄶");
car = car.replace(/1\+/g, "𑄷");
car = car.replace(/2\+/g, "𑄸");
car = car.replace(/3\+/g, "𑄹");
car = car.replace(/4\+/g, "𑄺");
car = car.replace(/5\+/g, "𑄻");
car = car.replace(/6\+/g, "𑄼");
car = car.replace(/7\+/g, "𑄽");
car = car.replace(/8\+/g, "𑄾");
car = car.replace(/9\+/g, "𑄿");

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