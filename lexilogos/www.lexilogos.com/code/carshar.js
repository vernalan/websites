//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "𑆃");
car = car.replace(/[Aāâ]/g, "𑆄");
car = car.replace(/i/g, "𑆅");
car = car.replace(/[Iīî]/g, "𑆆");
car = car.replace(/u/g, "𑆇");
car = car.replace(/[Uūû]/g, "𑆈");
car = car.replace(/𑆃𑆃/g, "𑆄");
car = car.replace(/𑆅𑆅/g, "𑆆");
car = car.replace(/𑆇𑆇/g, "𑆈");
car = car.replace(/e/g, "𑆍");
car = car.replace(/o/g, "𑆏");
car = car.replace(/𑆃𑆅/g, "𑆎");
car = car.replace(/𑆃𑆇/g, "𑆐");


// a
//car = car.replace(/𑆄𑆃/g, "ऑ");
//car = car.replace(/ऑ𑆃/g, "ऒ");
//car = car.replace(/ऒ𑆃/g, "𑆏");
car = car.replace(/𑆏𑆃/g, "𑆐");
car = car.replace(/𑆐𑆃/g, "ॲ");
//car = car.replace(/ॲ𑆃/g, "𑆃");

car = car.replace(/𑆳𑆃/g, "ॉ");
//car = car.replace(/ॉ𑆃/g, "ॊ");
//car = car.replace(/ॊ𑆃/g, "𑆾");
car = car.replace(/𑆾𑆃/g, "𑆿");
car = car.replace(/𑆿𑆃/g, "𑆳");
//o
car = car.replace(/𑆏𑆏/g, "𑆐");
car = car.replace(/𑆐𑆏/g, "ऑ");
//car = car.replace(/ऑ𑆏/g, "ऒ");
//car = car.replace(/ऒ𑆏/g, "𑆏");

car = car.replace(/𑆾𑆏/g, "𑆿");
car = car.replace(/𑆿𑆏/g, "ॉ");
//car = car.replace(/ॉ𑆏/g, "ॊ");
//car = car.replace(/ॊ𑆏/g, "𑆾");


// suppression du virama
car = car.replace(/𑆴𑆅/g, "𑆵");
car = car.replace(/𑆶𑆇/g, "𑆷");
car = car.replace(/𑇀𑆃/g, "\u200b");
car = car.replace(/\u200b𑆃/g, "𑆳");
car = car.replace(/\u200b𑆅/g, "𑆽");
car = car.replace(/\u200b𑆇/g, "𑆿");
car = car.replace(/𑇀𑆄/g, "𑆳");
car = car.replace(/𑇀𑆅/g, "𑆴");
car = car.replace(/𑇀𑆆/g, "𑆵");
car = car.replace(/𑇀𑆇/g, "𑆶");
car = car.replace(/𑇀𑆈/g, "𑆷");
car = car.replace(/𑇀𑆉/g, "𑆸");
car = car.replace(/𑇀𑆊/g, "𑆹");
car = car.replace(/𑇀𑆋/g, "𑆺");
car = car.replace(/𑇀𑆌/g, "𑆻");
car = car.replace(/𑇀𑆍/g, "𑆼");
car = car.replace(/𑇀𑆏/g, "𑆾");

// car = car.replace(/𑇀 /g, " ");


//cons
car = car.replace(/n/g, "𑆤𑇀");
car = car.replace(/k/g, "𑆑𑇀");
car = car.replace(/g/g, "𑆓𑇀");
car = car.replace(/c/g, "𑆖𑇀");
car = car.replace(/j/g, "𑆘𑇀");
car = car.replace(/[TṭṬ]/g, "𑆛𑇀");
car = car.replace(/[DḍḌ]/g, "𑆝𑇀");
car = car.replace(/[NṇṆ]/g, "𑆟𑇀");
car = car.replace(/t/g, "𑆠𑇀");
car = car.replace(/d/g, "𑆢𑇀");
car = car.replace(/p/g, "𑆥𑇀");
car = car.replace(/b/g, "𑆧𑇀");
car = car.replace(/m/g, "𑆩𑇀");
car = car.replace(/y/g, "𑆪𑇀");
car = car.replace(/r/g, "𑆫𑇀");
car = car.replace(/𑆫𑇊𑇀/g, "ऱ𑇀");
car = car.replace(/l/g, "𑆬𑇀");
car = car.replace(/[LḶḷ]/g, "𑆭𑇀");
car = car.replace(/𑆭𑇊𑇀/g, "ऴ𑇀");
car = car.replace(/v/g, "𑆮𑇀");
car = car.replace(/w/g, "𑆮𑇀");
car = car.replace(/h/g, "𑆲𑇀");
car = car.replace(/[SṣṢ]/g, "𑆰𑇀");
car = car.replace(/s/g, "𑆱𑇀");

// cas particuliers
car = car.replace(/[ṅG]/g, "𑆕𑇀");
car = car.replace(/[ñJ]/g, "𑆚𑇀");
car = car.replace(/𑆤𑇀𑆓𑇀/g, "𑆕𑇀");
car = car.replace(/𑆤𑇀𑆘𑇀/g, "𑆚𑇀");

// aspirées
car = car.replace(/𑆑𑇀𑆲𑇀/g, "𑆒𑇀");
car = car.replace(/𑆓𑇀𑆲𑇀/g, "𑆔𑇀");
car = car.replace(/𑆖𑇀𑆲𑇀/g, "𑆗𑇀");
car = car.replace(/𑆘𑇀𑆲𑇀/g, "𑆙𑇀");
car = car.replace(/𑆛𑇀𑆲𑇀/g, "𑆜𑇀");
car = car.replace(/𑆝𑇀𑆲𑇀/g, "𑆞𑇀");
car = car.replace(/𑆠𑇀𑆲𑇀/g, "𑆡𑇀");
car = car.replace(/𑆢𑇀𑆲𑇀/g, "𑆣𑇀");
car = car.replace(/𑆠𑇀𑆲𑇀/g, "𑆡𑇀");
car = car.replace(/𑆢𑇀𑆲𑇀/g, "𑆣𑇀");
car = car.replace(/𑆥𑇀𑆲𑇀/g, "𑆦𑇀");
car = car.replace(/𑆧𑇀𑆲𑇀/g, "𑆨𑇀");

// car = car.replace(/𑆞𑇊𑇀/g, "ढ़𑇀");

// cas du s barre
car = car.replace(/𑆱𑇀𑆲𑇀/g, "𑆯𑇀");
car = car.replace(/[çzśŚ]/g, "𑆯𑇀");

// cas du ri li
car = car.replace(/𑇀-𑆫𑇀/g, "𑆸");
car = car.replace(/-𑆫𑇀/g, "𑆉");
car = car.replace(/𑆉𑆅/g, "𑆊");
car = car.replace(/𑆸𑆅/g, "𑆹");

car = car.replace(/𑇀-𑆬𑇀/g, "𑆺");
car = car.replace(/-𑆬𑇀/g, "𑆋");
car = car.replace(/𑆋𑆅/g, "𑆌");
car = car.replace(/𑆺𑆅/g, "𑆻");

//suppression du zero
car = car.replace(/\u200b𑆑/g, "𑆑");
car = car.replace(/\u200b𑆒/g, "𑆒");
car = car.replace(/\u200b𑆓/g, "𑆓");
car = car.replace(/\u200b𑆔/g, "𑆔");
car = car.replace(/\u200b𑆕/g, "𑆕");
car = car.replace(/\u200b𑆖/g, "𑆖");
car = car.replace(/\u200b𑆗/g, "𑆗");
car = car.replace(/\u200b𑆘/g, "𑆘");
car = car.replace(/\u200b𑆙/g, "𑆙");
car = car.replace(/\u200b𑆚/g, "𑆚");
car = car.replace(/\u200b𑆛/g, "𑆛");
car = car.replace(/\u200b𑆜/g, "𑆜");
car = car.replace(/\u200b𑆝/g, "𑆝");
car = car.replace(/\u200b𑆞/g, "𑆞");
car = car.replace(/\u200b𑆟/g, "𑆟");
car = car.replace(/\u200b𑆠/g, "𑆠");
car = car.replace(/\u200b𑆡/g, "𑆡");
car = car.replace(/\u200b𑆢/g, "𑆢");
car = car.replace(/\u200b𑆣/g, "𑆣");
car = car.replace(/\u200b𑆤/g, "𑆤");
car = car.replace(/\u200b𑆥/g, "𑆥");
car = car.replace(/\u200b𑆦/g, "𑆦");
car = car.replace(/\u200b𑆧/g, "𑆧");
car = car.replace(/\u200b𑆨/g, "𑆨");
car = car.replace(/\u200b𑆩/g, "𑆩");
car = car.replace(/\u200b𑆪/g, "𑆪");
car = car.replace(/\u200b𑆫/g, "𑆫");
car = car.replace(/\u200b𑆬/g, "𑆬");
car = car.replace(/\u200b𑆭/g, "𑆭");
car = car.replace(/\u200b𑆮/g, "𑆮");
car = car.replace(/\u200b𑆲/g, "𑆲");
car = car.replace(/\u200b𑆯/g, "𑆯");
car = car.replace(/\u200b𑆰/g, "𑆰");
car = car.replace(/\u200b𑆱/g, "𑆱");
car = car.replace(/\u200b /g, " ");

// accents
car = car.replace(/\u200b\॓/g, "॓");
car = car.replace(/\u200b\॔/g, "॔");

// anusvara
car = car.replace(/[MṃṂṁ]/g, "𑆁");
car = car.replace(/\u200b𑆁/g, "𑆁");
car = car.replace(/𑇀𑆁/g, "𑆁");
// + candrabindu
car = car.replace(/𑆁𑆁/g, "𑆀");
car = car.replace(/𑆀𑆁/g, "");
car = car.replace(/\u200b𑆀/g, "𑆀");
//OM
car = car.replace(/O/g, "𑇄");
car = car.replace(/𑇄𑆁/g, "𑇄");
// visarga
car = car.replace(/[HḥḤ]/g, "𑆂");
car = car.replace(/𑇀𑆂/g, "𑆂");
car = car.replace(/\u200b\𑆂/g, "𑆂");
// + nukta
car = car.replace(/𑇀=/g, "𑇊𑇀");
car = car.replace(/=/g, "𑇊");
car = car.replace(/\u200b𑇊/g, "𑇊");

// avagraha
car = car.replace(/\'/g, "𑇁");
car = car.replace(/’/g, "𑇁");

// ponctuation
car = car.replace(/\|/g, "𑇅");
car = car.replace(/\//g, "𑇅");
car = car.replace(/𑇅𑇅/g, "𑇆");

car = car.replace(/0/g, "𑇐");
car = car.replace(/1/g, "𑇑");
car = car.replace(/2/g, "𑇒");
car = car.replace(/3/g, "𑇓");
car = car.replace(/4/g, "𑇔");
car = car.replace(/5/g, "𑇕");
car = car.replace(/6/g, "𑇖");
car = car.replace(/7/g, "𑇗");
car = car.replace(/8/g, "𑇘");
car = car.replace(/9/g, "𑇙"); 

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