//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "𑦠");
car = car.replace(/[AāĀ]/g, "𑦡");
car = car.replace(/i/g, "𑦢");
car = car.replace(/[IīĪ]/g, "𑦣");
car = car.replace(/u/g, "𑦤");
car = car.replace(/[UūŪ]/g, "𑦥");
car = car.replace(/𑦠𑦠/g, "𑦡");
car = car.replace(/𑦢𑦢/g, "𑦣");
car = car.replace(/𑦤𑦤/g, "𑦥");
car = car.replace(/[eē]/g, "𑦪");
car = car.replace(/[oō]/g, "𑦬");
car = car.replace(/𑦠𑦢/g, "𑦫");
car = car.replace(/𑦠𑦤/g, "𑦭");

// suppression du virama
car = car.replace(/𑧒𑦢/g, "𑧓");
car = car.replace(/𑧔𑦤/g, "𑧕");
car = car.replace(/𑧠𑦠/g, "\u200b");
car = car.replace(/\u200b𑦠/g, "𑧑");
car = car.replace(/\u200b𑦢/g, "𑧛");
car = car.replace(/\u200b𑦤/g, "𑧝");
car = car.replace(/𑧠𑦡/g, "𑧑");
car = car.replace(/𑧠𑦢/g, "𑧒");
car = car.replace(/𑧠𑦣/g, "𑧓");
car = car.replace(/𑧠𑦤/g, "𑧔");
car = car.replace(/𑧠𑦥/g, "𑧕");
car = car.replace(/𑧠𑦦/g, "𑧖");
car = car.replace(/𑧠𑦧/g, "𑧗");

car = car.replace(/𑧠𑦪/g, "𑧚");
car = car.replace(/𑧠𑦬/g, "𑧜");
car = car.replace(/𑧠𑦫/g, "𑧛"); //ajoutai
car = car.replace(/𑧚𑦪/g, "𑧛"); // ee 
car = car.replace(/𑧠𑦭/g, "𑧝"); //ajoutau
car = car.replace(/𑧜𑦬/g, "𑧝"); // oo 

//cons
car = car.replace(/n/g, "𑧁𑧠");
car = car.replace(/k/g, "𑦮𑧠");
car = car.replace(/g/g, "𑦰𑧠");
car = car.replace(/c/g, "𑦳𑧠");
car = car.replace(/j/g, "𑦵𑧠");
car = car.replace(/[TṭṬ]/g, "𑦸𑧠");
car = car.replace(/[DḍḌ]/g, "𑦺𑧠");
car = car.replace(/[NṇṆ]/g, "𑦼𑧠");
car = car.replace(/t/g, "𑦽𑧠");
car = car.replace(/d/g, "𑦿𑧠");
car = car.replace(/p/g, "𑧂𑧠");
car = car.replace(/b/g, "𑧄𑧠");
car = car.replace(/m/g, "𑧆𑧠");
car = car.replace(/y/g, "𑧇𑧠");
car = car.replace(/r/g, "𑧈𑧠");
car = car.replace(/l/g, "𑧉𑧠");
car = car.replace(/v/g, "𑧊𑧠");
car = car.replace(/w/g, "𑧊𑧠");
car = car.replace(/h/g, "𑧎𑧠");
car = car.replace(/[SṣṢ]/g, "𑧌𑧠");
car = car.replace(/s/g, "𑧍𑧠");
car = car.replace(/L/g, "𑧏𑧠");
car = car.replace(/R/g, "𑧐𑧠");
// cas particuliers
car = car.replace(/[GṅṄ]/g, "𑦲𑧠");
car = car.replace(/[Jñ]/g, "𑦷𑧠");


// aspirées
car = car.replace(/𑦮𑧠𑧎𑧠/g, "𑦯𑧠");
car = car.replace(/𑦰𑧠𑧎𑧠/g, "𑦱𑧠");
car = car.replace(/𑦳𑧠𑧎𑧠/g, "𑦴𑧠");
car = car.replace(/𑦵𑧠𑧎𑧠/g, "𑦶𑧠");
car = car.replace(/𑦸𑧠𑧎𑧠/g, "𑦹𑧠");
car = car.replace(/𑦺𑧠𑧎𑧠/g, "𑦻𑧠");
car = car.replace(/𑦽𑧠𑧎𑧠/g, "𑦾𑧠");
car = car.replace(/𑦿𑧠𑧎𑧠/g, "𑧀𑧠");
car = car.replace(/𑦽𑧠𑧎𑧠/g, "𑦾𑧠");
car = car.replace(/𑦿𑧠𑧎𑧠/g, "𑧀𑧠");
car = car.replace(/𑧂𑧠𑧎𑧠/g, "𑧃𑧠");
car = car.replace(/𑧄𑧠𑧎𑧠/g, "𑧅𑧠");


// cas du s barre
car = car.replace(/𑧍𑧠𑧎𑧠/g, "𑧋𑧠");
car = car.replace(/[çzśŚ]/g, "𑧋𑧠");

// cas du ri li
car = car.replace(/𑧠-𑧈𑧠/g, "𑧖");
car = car.replace(/-𑧈𑧠/g, "𑦦");
car = car.replace(/𑦦𑦢/g, "𑦧");
car = car.replace(/𑧖𑦢/g, "𑧗");
car = car.replace(/[ṛṚ]/g, "𑦦");
car = car.replace(/[ṝṜ]/g, "𑦧");



//suppression du zero
car = car.replace(/\u200b𑦮/g, "𑦮");
car = car.replace(/\u200b𑦯/g, "𑦯");
car = car.replace(/\u200b𑦰/g, "𑦰");
car = car.replace(/\u200b𑦱/g, "𑦱");
car = car.replace(/\u200b𑦲/g, "𑦲");
car = car.replace(/\u200b𑦳/g, "𑦳");
car = car.replace(/\u200b𑦴/g, "𑦴");
car = car.replace(/\u200b𑦵/g, "𑦵");
car = car.replace(/\u200b𑦶/g, "𑦶");
car = car.replace(/\u200b𑦷/g, "𑦷");
car = car.replace(/\u200b𑦸/g, "𑦸");
car = car.replace(/\u200b𑦹/g, "𑦹");
car = car.replace(/\u200b𑦺/g, "𑦺");
car = car.replace(/\u200b𑦻/g, "𑦻");
car = car.replace(/\u200b𑦼/g, "𑦼");
car = car.replace(/\u200b𑦽/g, "𑦽");
car = car.replace(/\u200b𑦾/g, "𑦾");
car = car.replace(/\u200b𑦿/g, "𑦿");
car = car.replace(/\u200b𑧀/g, "𑧀");
car = car.replace(/\u200b𑧁/g, "𑧁");
car = car.replace(/\u200b𑧂/g, "𑧂");
car = car.replace(/\u200b𑧃/g, "𑧃");
car = car.replace(/\u200b𑧄/g, "𑧄");
car = car.replace(/\u200b𑧅/g, "𑧅");
car = car.replace(/\u200b𑧆/g, "𑧆");
car = car.replace(/\u200b𑧇/g, "𑧇");
car = car.replace(/\u200b𑧈/g, "𑧈");
car = car.replace(/\u200b𑧉/g, "𑧉");
car = car.replace(/\u200b𑧊/g, "𑧊");
car = car.replace(/\u200b𑧎/g, "𑧎");
car = car.replace(/\u200b𑧋/g, "𑧋");
car = car.replace(/\u200b𑧌/g, "𑧌");
car = car.replace(/\u200b𑧍/g, "𑧍");
// LR
car = car.replace(/\u200b𑧏/g, "𑧏");
car = car.replace(/\u200b𑧐/g, "𑧐");
car = car.replace(/\u200b /g, " "); // pb finales 


// anusvara
car = car.replace(/[MṃṂṁ]/g, "𑧞");
car = car.replace(/𑧠𑧞/g, "𑧞");
car = car.replace(/\u200b𑧞/g, "𑧞");

// visarga
car = car.replace(/[HḥḤ]/g, "𑧟");
car = car.replace(/𑧠𑧟/g, "𑧟");
car = car.replace(/\u200b\𑧟/g, "𑧟");

// avagraha
car = car.replace(/\'/g, "𑧡");
car = car.replace(/’/g, "𑧡");

// devangari
 car=car.replace(/क/g, "𑦮");
car=car.replace(/ख/g, "𑦯");
car=car.replace(/ग/g, "𑦰");
car=car.replace(/घ/g, "𑦱");
car=car.replace(/ङ/g, "𑦲");
car=car.replace(/च/g, "𑦳");
car=car.replace(/छ/g, "𑦴");
car=car.replace(/ज/g, "𑦵");
car=car.replace(/झ/g, "𑦶");
car=car.replace(/ञ/g, "𑦷");
car=car.replace(/ट/g, "𑦸");
car=car.replace(/ठ/g, "𑦹");
car=car.replace(/ड/g, "𑦺");
car=car.replace(/ढ/g, "𑦻");
car=car.replace(/ण/g, "𑦼");
car=car.replace(/त/g, "𑦽");
car=car.replace(/थ/g, "𑦾");
car=car.replace(/द/g, "𑦿");
car=car.replace(/ध/g, "𑧀");
car=car.replace(/न/g, "𑧁");
car=car.replace(/प/g, "𑧂");
car=car.replace(/फ/g, "𑧃");
car=car.replace(/ब/g, "𑧄");
car=car.replace(/भ/g, "𑧅");
car=car.replace(/म/g, "𑧆");
car=car.replace(/य/g, "𑧇");
car=car.replace(/र/g, "𑧈");
car=car.replace(/ल/g, "𑧉");
car=car.replace(/व/g, "𑧊");
car=car.replace(/श/g, "𑧋");
car=car.replace(/ष/g, "𑧌");
car=car.replace(/स/g, "𑧍");
car=car.replace(/ह/g, "𑧎");
car=car.replace(/्/g, "𑧠");
car=car.replace(/अ/g, "𑦠");
car=car.replace(/आ/g, "𑦡");
car=car.replace(/ा/g, "𑧑");
car=car.replace(/इ/g, "𑦢");
car=car.replace(/ि/g, "𑧒");
car=car.replace(/ई/g, "𑦣");
car=car.replace(/ी/g, "𑧓");
car=car.replace(/उ/g, "𑦤");
car=car.replace(/ु/g, "𑧔");
car=car.replace(/ऊ/g, "𑦥");
car=car.replace(/ू/g, "𑧕");
car=car.replace(/ऋ/g, "𑦦");
car=car.replace(/ृ/g, "𑧖");
car=car.replace(/ॠ/g, "𑦧");
car=car.replace(/ॄ/g, "𑧗");
car=car.replace(/ए/g, "𑦪");
car=car.replace(/े/g, "𑧚");
car=car.replace(/ऐ/g, "𑦫");
car=car.replace(/ै/g, "𑧛");
car=car.replace(/ओ/g, "𑦬");
car=car.replace(/ो/g, "𑧜");
car=car.replace(/औ/g, "𑦭");
car=car.replace(/ौ/g, "𑧝");

car=car.replace(/ं/g, "𑧞");
car=car.replace(/ः/g, "𑧟");
car=car.replace(/ऽ/g, "𑧡");

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

function copysanskrit() {
car = document.conversion.saisie.value;
car = car.replace(/\u200b/g, ""); // pb finales
document.conversion.saisie.value = car;
}