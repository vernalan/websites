//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;

car = car.replace(/a/g, "𑼄");
car = car.replace(/[AāĀ]/g, "𑼅");
car = car.replace(/i/g, "𑼆");
car = car.replace(/[IīĪ]/g, "𑼇");
car = car.replace(/u/g, "𑼈");
car = car.replace(/[UūŪ]/g, "𑼉");
car = car.replace(/𑼄𑼄/g, "𑼅");
car = car.replace(/𑼆𑼆/g, "𑼇");
car = car.replace(/𑼈𑼈/g, "𑼉");
car = car.replace(/[Eēê]/g, "𑼎");
car = car.replace(/[Oōô]/g, "𑼐");
car = car.replace(/𑼄𑼆/g, "𑼏");

// suppression du virama
car = car.replace(/𑼶𑼆/g, "𑼷");
car = car.replace(/𑼸𑼈/g, "𑼹");
car = car.replace(/𑽁𑼄/g, "\u200b");
car = car.replace(/\u200b𑼄/g, "𑼴");
car = car.replace(/\u200b𑼆/g, "𑼿"); //ai
car = car.replace(/𑽁𑼅/g, "𑼴");
car = car.replace(/𑽁𑼆/g, "𑼶");
car = car.replace(/𑽁𑼇/g, "𑼷");
car = car.replace(/𑽁𑼈/g, "𑼸");
car = car.replace(/𑽁𑼉/g, "𑼹");
car = car.replace(/𑽁𑼊/g, "𑼺");
car = car.replace(/𑽁𑼎/g, "𑼾");


car = car.replace(/[ĕə]/g, "𑽀"); // 
car = car.replace(/𑽁𑼐/g, "𑽀"); // ə replace o
car = car.replace(/𑼴𑼄/g, "𑼵"); // variante a


//cons
car = car.replace(/n/g, "𑼥𑽁");
car = car.replace(/k/g, "𑼒𑽁");
car = car.replace(/g/g, "𑼔𑽁");
car = car.replace(/c/g, "𑼗𑽁");
car = car.replace(/j/g, "𑼙𑽁");
car = car.replace(/[TṭṬ]/g, "𑼜𑽁");
car = car.replace(/[DḍḌ]/g, "𑼞𑽁");
car = car.replace(/[NṇṆ]/g, "𑼠𑽁");
car = car.replace(/t/g, "𑼡𑽁");
car = car.replace(/d/g, "𑼣𑽁");
car = car.replace(/p/g, "𑼦𑽁");
car = car.replace(/b/g, "𑼨𑽁");
car = car.replace(/m/g, "𑼪𑽁");
car = car.replace(/y/g, "𑼫𑽁");
car = car.replace(/r/g, "𑼬𑽁");
car = car.replace(/l/g, "𑼭𑽁");
car = car.replace(/v/g, "𑼮𑽁");
car = car.replace(/w/g, "𑼮𑽁");
car = car.replace(/h/g, "𑼲𑽁");
car = car.replace(/[SṣṢ]/g, "𑼰𑽁");
car = car.replace(/s/g, "𑼱𑽁");

// cas particuliers
car = car.replace(/[GṅṄ]/g, "𑼖𑽁");
car = car.replace(/[Jñ]/g, "𑼛𑽁");
//car = car.replace(/𑼥𑽁𑼔𑽁/g, "𑼖𑽁");
//car = car.replace(/𑼥𑽁𑼙𑽁/g, "𑼛𑽁");

// aspirées
car = car.replace(/𑼒𑽁𑼲𑽁/g, "𑼓𑽁");
car = car.replace(/𑼔𑽁𑼲𑽁/g, "𑼕𑽁");
car = car.replace(/𑼗𑽁𑼲𑽁/g, "𑼘𑽁");
car = car.replace(/𑼙𑽁𑼲𑽁/g, "𑼚𑽁");
car = car.replace(/𑼜𑽁𑼲𑽁/g, "𑼝𑽁");
car = car.replace(/𑼞𑽁𑼲𑽁/g, "𑼟𑽁");
car = car.replace(/𑼡𑽁𑼲𑽁/g, "𑼢𑽁");
car = car.replace(/𑼣𑽁𑼲𑽁/g, "𑼤𑽁");
car = car.replace(/𑼡𑽁𑼲𑽁/g, "𑼢𑽁");
car = car.replace(/𑼣𑽁𑼲𑽁/g, "𑼤𑽁");
car = car.replace(/𑼦𑽁𑼲𑽁/g, "𑼧𑽁");
car = car.replace(/𑼨𑽁𑼲𑽁/g, "𑼩𑽁");


// cas du s barre
car = car.replace(/𑼱𑽁𑼲𑽁/g, "𑼯𑽁");
car = car.replace(/[çzśŚ]/g, "𑼯𑽁");

// cas du ri li
car = car.replace(/𑽁-𑼬𑽁/g, "𑼺");
car = car.replace(/-𑼬𑽁/g, "𑼊");
car = car.replace(/𑼊𑼆/g, "𑼋");
car = car.replace(/[ṛṚ]/g, "𑼊");
car = car.replace(/[ṝṜ]/g, "𑼋");

// connecteur
car = car.replace(/x/g, "𑽂");
car = car.replace(/𑽁𑽂/g, "𑽂");


//suppression du zero
car = car.replace(/\u200b𑼒/g, "𑼒");
car = car.replace(/\u200b𑼓/g, "𑼓");
car = car.replace(/\u200b𑼔/g, "𑼔");
car = car.replace(/\u200b𑼕/g, "𑼕");
car = car.replace(/\u200b𑼖/g, "𑼖");
car = car.replace(/\u200b𑼗/g, "𑼗");
car = car.replace(/\u200b𑼘/g, "𑼘");
car = car.replace(/\u200b𑼙/g, "𑼙");
car = car.replace(/\u200b𑼚/g, "𑼚");
car = car.replace(/\u200b𑼛/g, "𑼛");
car = car.replace(/\u200b𑼜/g, "𑼜");
car = car.replace(/\u200b𑼝/g, "𑼝");
car = car.replace(/\u200b𑼞/g, "𑼞");
car = car.replace(/\u200b𑼟/g, "𑼟");
car = car.replace(/\u200b𑼠/g, "𑼠");
car = car.replace(/\u200b𑼡/g, "𑼡");
car = car.replace(/\u200b𑼢/g, "𑼢");
car = car.replace(/\u200b𑼣/g, "𑼣");
car = car.replace(/\u200b𑼤/g, "𑼤");
car = car.replace(/\u200b𑼥/g, "𑼥");
car = car.replace(/\u200b𑼦/g, "𑼦");
car = car.replace(/\u200b𑼧/g, "𑼧");
car = car.replace(/\u200b𑼨/g, "𑼨");
car = car.replace(/\u200b𑼩/g, "𑼩");
car = car.replace(/\u200b𑼪/g, "𑼪");
car = car.replace(/\u200b𑼫/g, "𑼫");
car = car.replace(/\u200b𑼬/g, "𑼬");
car = car.replace(/\u200b𑼭/g, "𑼭");

car = car.replace(/\u200b𑼮/g, "𑼮");
car = car.replace(/\u200b𑼲/g, "𑼲");
car = car.replace(/\u200b𑼯/g, "𑼯");
car = car.replace(/\u200b𑼰/g, "𑼰");
car = car.replace(/\u200b𑼱/g, "𑼱");
car = car.replace(/\u200b /g, " "); // pb finales

// anusvara
car = car.replace(/[MṃṂṁ]/g, "𑼁");
car = car.replace(/\u200b𑼁/g, "𑼁");
car = car.replace(/𑽁𑼁/g, "𑼁");

// + candrabindu
car = car.replace(/𑼁𑼁/g, "𑼀");
car = car.replace(/𑼀𑼁/g, "");
car = car.replace(/\u200b𑼀/g, "𑼀");

// visarga
car = car.replace(/[HḥḤ]/g, "𑼃");
car = car.replace(/𑽁𑼃/g, "𑼃");
car = car.replace(/\u200b\𑼃/g, "𑼃");

// repha
car = car.replace(/R/g, "𑼂");

// ponctuation
car = car.replace(/\|/g, "𑽃");
car = car.replace(/\//g, "𑽃");
car = car.replace(/𑽃𑽃/g, "𑽄");

// nuqta
car = car.replace(/=/g, "𑽚");

car = car.replace(/0/g, "𑽐");
car = car.replace(/1/g, "𑽑");
car = car.replace(/2/g, "𑽒");
car = car.replace(/3/g, "𑽓");
car = car.replace(/4/g, "𑽔");
car = car.replace(/5/g, "𑽕");
car = car.replace(/6/g, "𑽖");
car = car.replace(/7/g, "𑽗");
car = car.replace(/8/g, "𑽘");
car = car.replace(/9/g, "𑽙"); 



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