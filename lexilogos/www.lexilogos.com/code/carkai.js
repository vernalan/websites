 // copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "𑂃");
car = car.replace(/[AāĀ]/g, "𑂄");
car = car.replace(/i/g, "𑂅");
car = car.replace(/[IīĪ]/g, "𑂆");
car = car.replace(/u/g, "𑂇");
car = car.replace(/[UūŪ]/g, "𑂈");
car = car.replace(/𑂃𑂃/g, "𑂄");
car = car.replace(/𑂅𑂅/g, "𑂆");
car = car.replace(/𑂇𑂇/g, "𑂈");
car = car.replace(/[eē]/g, "𑂉");
car = car.replace(/[oō]/g, "𑂋");
car = car.replace(/𑂃𑂅/g, "𑂊");
car = car.replace(/𑂃𑂇/g, "𑂌");

// suppression du virama
car = car.replace(/𑂱𑂅/g, "𑂲");
car = car.replace(/𑂳𑂇/g, "𑂴");
car = car.replace(/𑂹𑂃/g, "\u200b");
car = car.replace(/\u200b𑂃/g, "𑂰");
car = car.replace(/\u200b𑂅/g, "𑂶");
car = car.replace(/\u200b𑂇/g, "𑂸");
car = car.replace(/𑂹𑂄/g, "𑂰");
car = car.replace(/𑂹𑂅/g, "𑂱");
car = car.replace(/𑂹𑂆/g, "𑂲");
car = car.replace(/𑂹𑂇/g, "𑂳");
car = car.replace(/𑂹𑂈/g, "𑂴");
car = car.replace(/𑂹𑂉/g, "𑂵");
car = car.replace(/𑂹𑂋/g, "𑂷");
car = car.replace(/𑂹𑂊/g, "𑂶"); //ajoutai
car = car.replace(/𑂵𑂉/g, "𑂶"); // ee
car = car.replace(/𑂹𑂌/g, "𑂸"); //ajoutau
car = car.replace(/𑂷𑂋/g, "𑂸"); // oo

car = car.replace(/𑂹 /g, " "); // ajout sur sanskrit

//cons
car = car.replace(/n/g, "𑂢𑂹");
car = car.replace(/k/g, "𑂍𑂹");
car = car.replace(/g/g, "𑂏𑂹");
car = car.replace(/c/g, "𑂒𑂹");
car = car.replace(/j/g, "𑂔𑂹");
car = car.replace(/[TṭṬ]/g, "𑂗𑂹");
car = car.replace(/[DḍḌ]/g, "𑂙𑂹");
car = car.replace(/[NṇṆ]/g, "𑂝𑂹");
car = car.replace(/t/g, "𑂞𑂹");
car = car.replace(/d/g, "𑂠𑂹");
car = car.replace(/p/g, "𑂣𑂹");
car = car.replace(/b/g, "𑂥𑂹");
car = car.replace(/m/g, "𑂧𑂹");
car = car.replace(/y/g, "𑂨𑂹");
car = car.replace(/r/g, "𑂩𑂹");
car = car.replace(/l/g, "𑂪𑂹");
car = car.replace(/v/g, "𑂫𑂹");
car = car.replace(/w/g, "𑂫𑂹");
car = car.replace(/h/g, "𑂯𑂹");
car = car.replace(/[SṣṢ]/g, "𑂭𑂹");
car = car.replace(/s/g, "𑂮𑂹");
// cas particuliers
car = car.replace(/[GṅṄ]/g, "𑂑𑂹");
car = car.replace(/[Jñ]/g, "𑂖𑂹");


// aspirées
car = car.replace(/𑂍𑂹𑂯𑂹/g, "𑂎𑂹");
car = car.replace(/𑂏𑂹𑂯𑂹/g, "𑂐𑂹");
car = car.replace(/𑂒𑂹𑂯𑂹/g, "𑂓𑂹");
car = car.replace(/𑂔𑂹𑂯𑂹/g, "𑂕𑂹");
car = car.replace(/𑂗𑂹𑂯𑂹/g, "𑂘𑂹");
car = car.replace(/𑂙𑂹𑂯𑂹/g, "𑂛𑂹");
car = car.replace(/𑂞𑂹𑂯𑂹/g, "𑂟𑂹");
car = car.replace(/𑂠𑂹𑂯𑂹/g, "𑂡𑂹");
car = car.replace(/𑂞𑂹𑂯𑂹/g, "𑂟𑂹");
car = car.replace(/𑂠𑂹𑂯𑂹/g, "𑂡𑂹");
car = car.replace(/𑂣𑂹𑂯𑂹/g, "𑂤𑂹");
car = car.replace(/𑂥𑂹𑂯𑂹/g, "𑂦𑂹");


// cas du s barre
car = car.replace(/𑂮𑂹𑂯𑂹/g, "𑂬𑂹");
car = car.replace(/[çzśŚ]/g, "𑂬𑂹");


//suppression du zero
car = car.replace(/\u200b𑂍/g, "𑂍");
car = car.replace(/\u200b𑂎/g, "𑂎");
car = car.replace(/\u200b𑂏/g, "𑂏");
car = car.replace(/\u200b𑂐/g, "𑂐");
car = car.replace(/\u200b𑂑/g, "𑂑");
car = car.replace(/\u200b𑂒/g, "𑂒");
car = car.replace(/\u200b𑂓/g, "𑂓");
car = car.replace(/\u200b𑂔/g, "𑂔");
car = car.replace(/\u200b𑂕/g, "𑂕");
car = car.replace(/\u200b𑂖/g, "𑂖");
car = car.replace(/\u200b𑂗/g, "𑂗");
car = car.replace(/\u200b𑂘/g, "𑂘");
car = car.replace(/\u200b𑂙/g, "𑂙");
car = car.replace(/\u200b𑂛/g, "𑂛");
car = car.replace(/\u200b𑂝/g, "𑂝");
car = car.replace(/\u200b𑂞/g, "𑂞");
car = car.replace(/\u200b𑂟/g, "𑂟");
car = car.replace(/\u200b𑂠/g, "𑂠");
car = car.replace(/\u200b𑂡/g, "𑂡");
car = car.replace(/\u200b𑂢/g, "𑂢");
car = car.replace(/\u200b𑂣/g, "𑂣");
car = car.replace(/\u200b𑂤/g, "𑂤");
car = car.replace(/\u200b𑂥/g, "𑂥");
car = car.replace(/\u200b𑂦/g, "𑂦");
car = car.replace(/\u200b𑂧/g, "𑂧");
car = car.replace(/\u200b𑂨/g, "𑂨");
car = car.replace(/\u200b𑂩/g, "𑂩");
car = car.replace(/\u200b𑂪/g, "𑂪");
car = car.replace(/\u200b𑂫/g, "𑂫");
car = car.replace(/\u200b𑂯/g, "𑂯");
car = car.replace(/\u200b𑂬/g, "𑂬");
car = car.replace(/\u200b𑂭/g, "𑂭");
car = car.replace(/\u200b𑂮/g, "𑂮");
car = car.replace(/\u200b /g, " "); // pb finales


// anusvara
car = car.replace(/[MṃṂṁ]/g, "𑂁");
car = car.replace(/\u200b𑂁/g, "𑂁");
car = car.replace(/𑂹𑂁/g, "𑂁");
// + candrabindu
car = car.replace(/𑂁𑂁/g, "𑂀");
car = car.replace(/𑂀𑂁/g, "");
car = car.replace(/\u200b𑂀/g, "𑂀");
// visarga
car = car.replace(/[HḥḤ]/g, "𑂂");
car = car.replace(/𑂹𑂂/g, "𑂂");
car = car.replace(/\u200b\𑂂/g, "𑂂");
 // + nukta
car = car.replace(/=/g, "𑂺");
car = car.replace(/\u200b𑂺/g, "𑂺"); 


// ponctuation
car = car.replace(/\|/g, "𑃀");
car = car.replace(/\//g, "𑃀");
car = car.replace(/𑃀𑃀/g, "𑃁");

car = car.replace(/0/g, "०");
car = car.replace(/1/g, "१");
car = car.replace(/2/g, "२");
car = car.replace(/3/g, "३");
car = car.replace(/4/g, "४");
car = car.replace(/5/g, "५");
car = car.replace(/6/g, "६");
car = car.replace(/7/g, "७");
car = car.replace(/8/g, "८");
car = car.replace(/9/g, "९");


// devanagari

car=car.replace(/क/g, "𑂍"); //k
car=car.replace(/ख/g, "𑂎");
car=car.replace(/ग/g, "𑂏");
car=car.replace(/घ/g, "𑂐");
car=car.replace(/ङ/g, "𑂑");
car=car.replace(/च/g, "𑂒"); //c
car=car.replace(/छ/g, "𑂓");
car=car.replace(/ज/g, "𑂔");
car=car.replace(/झ/g, "𑂕");
car=car.replace(/ञ/g, "𑂖");
car=car.replace(/ट/g, "𑂗"); //T
car=car.replace(/ठ/g, "𑂘");
car=car.replace(/ड/g, "𑂙");
car=car.replace(/ढ/g, "𑂛");
car=car.replace(/ण/g, "𑂝");
car=car.replace(/त/g, "𑂞"); //t
car=car.replace(/थ/g, "𑂟");
car=car.replace(/द/g, "𑂠");
car=car.replace(/ध/g, "𑂡");
car=car.replace(/न/g, "𑂢");
car=car.replace(/प/g, "𑂣"); //p
car=car.replace(/फ/g, "𑂤");
car=car.replace(/ब/g, "𑂥");
car=car.replace(/भ/g, "𑂦");
car=car.replace(/म/g, "𑂧"); //m
car=car.replace(/य/g, "𑂨"); //y
car=car.replace(/र/g, "𑂩"); //r
car=car.replace(/ल/g, "𑂪"); //l
car=car.replace(/व/g, "𑂫"); //v
car=car.replace(/श/g, "𑂬"); //sh
car=car.replace(/ष/g, "𑂭"); //S
car=car.replace(/स/g, "𑂮"); //s
car=car.replace(/ह/g, "𑂯"); //h

car=car.replace(/्/g, "𑂹"); // virama

car=car.replace(/अ/g, "𑂃"); //a
car=car.replace(/आ/g, "𑂄"); //a
car=car.replace(/ा/g, "𑂰");
car=car.replace(/इ/g, "𑂅"); //i
car=car.replace(/ि/g, "𑂱");
car=car.replace(/ई/g, "𑂆"); //ii
car=car.replace(/ी/g, "𑂲");
car=car.replace(/उ/g, "𑂇"); //u
car=car.replace(/ु/g, "𑂳");
car=car.replace(/ऊ/g, "𑂈"); //uu
car=car.replace(/ू/g, "𑂴");

car=car.replace(/ए/g, "𑂉"); //e
car=car.replace(/े/g, "𑂵");
car=car.replace(/ऐ/g, "𑂊"); //ai
car=car.replace(/ै/g, "𑂶");
car=car.replace(/ओ/g, "𑂋"); //o
car=car.replace(/ो/g, "𑂷");
car=car.replace(/औ/g, "𑂌"); //au
car=car.replace(/ौ/g, "𑂸");

car=car.replace(/ँ/g, "𑂀"); //candra bindu
car=car.replace(/ं/g, "𑂁"); //anusvara
car=car.replace(/ः/g, "𑂂"); // visarga
car=car.replace(/़/g, "𑂺"); // nukta

car = car.replace(/।/g, "𑃀");
car = car.replace(/॥/g, "𑃁");


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