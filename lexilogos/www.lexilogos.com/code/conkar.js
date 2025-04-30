//copyright lexilogos.com 
var car;

function latkar() {
car = document.transcription.text2.value.toLowerCase();
car = car.replace(/k’/g, "კ");
car = car.replace(/t’/g, "ტ");
car = car.replace(/p’/g, "პ");
car = car.replace(/q’/g, "q");
car = car.replace(/ts’/g, "წ");
car = car.replace(/ch’/g, "ჭ");
car = car.replace(/k'/g, "კ");
car = car.replace(/t'/g, "ტ");
car = car.replace(/p'/g, "პ");
car = car.replace(/q'/g, "q");
car = car.replace(/q/g, "ყ");
car = car.replace(/ts'/g, "წ");
car = car.replace(/ch'/g, "ჭ");
car = car.replace(/gh/g, "ღ");
car = car.replace(/sh/g, "შ");
car = car.replace(/ch/g, "ჩ");
car = car.replace(/ts/g, "ც");
car = car.replace(/dz/g, "ძ");
car = car.replace(/kh/g, "ხ");
car = car.replace(/zh/g, "ჟ");
car = car.replace(/a/g, "ა");
car = car.replace(/b/g, "ბ");
car = car.replace(/g/g, "გ");
car = car.replace(/d/g, "დ");
car = car.replace(/e/g, "ე");
car = car.replace(/v/g, "ვ");
car = car.replace(/z/g, "ზ");
car = car.replace(/t/g, "თ");
car = car.replace(/i/g, "ი");
car = car.replace(/l/g, "ლ");
car = car.replace(/m/g, "მ");
car = car.replace(/n/g, "ნ");
car = car.replace(/o/g, "ო");
car = car.replace(/r/g, "რ");
car = car.replace(/s/g, "ს");
car = car.replace(/u/g, "უ");
car = car.replace(/p/g, "ფ");
car = car.replace(/k/g, "ქ");
car = car.replace(/j/g, "ჯ");
car = car.replace(/h/g, "ჰ");
car = car.replace (/ō/g, "ჵ");

// mingrelien
car = car.replace(/y/g, "ჲ");
car = car.replace(/[ƨə]/g, "ჷ");
car = car.replace(/[ʔꞇ]/g, "ჸ");

// variantes pbs pq
car = car.replace(/ⱬ/g, "ჟ");
car = car.replace(/ṫ/g, "ტ");
car = car.replace(/f/g, "ფ");
car = car.replace(/ɣ/g, "ყ");
car = car.replace(/ʒ/g, "წ");
car = car.replace(/x/g, "ხ");
car = car.replace(/çჰ/g, "ჭ");
document.transcription.text1.value = car;
}

function karlat() {
car = document.transcription.text1.value;
car = car.replace(/ა/g, "a");
car = car.replace(/ბ/g, "b");
car = car.replace(/გ/g, "g");
car = car.replace(/დ/g, "d");
car = car.replace(/ე/g, "e");
car = car.replace(/ვ/g, "v");
car = car.replace(/ზ/g, "z");
car = car.replace(/თ/g, "t");
car = car.replace(/ი/g, "i");
car = car.replace(/კ/g, "k’");
car = car.replace(/ლ/g, "l");
car = car.replace(/მ/g, "m");
car = car.replace(/ნ/g, "n");
car = car.replace(/ო/g, "o");
car = car.replace(/პ/g, "p’");
car = car.replace(/ჟ/g, "zh");
car = car.replace(/რ/g, "r");
car = car.replace(/ს/g, "s");
car = car.replace(/ტ/g, "t’");
car = car.replace(/უ/g, "u");
car = car.replace(/ფ/g, "p");
car = car.replace(/ქ/g, "k");
car = car.replace(/ღ/g, "gh");
car = car.replace(/ყ/g, "q’");
car = car.replace(/შ/g, "sh");
car = car.replace(/ჩ/g, "ch");
car = car.replace(/ც/g, "ts");
car = car.replace(/ძ/g, "dz");
car = car.replace(/წ/g, "ts’");
car = car.replace(/ჭ/g, "ch’");
car = car.replace(/ხ/g, "kh");
car = car.replace(/ჯ/g, "j");
car = car.replace(/ჰ/g, "h");
car = car.replace (/ჵ/g, "ō");

// mingrelien
car = car.replace(/ჲ/g, "y");
car = car.replace(/ჷ/g, "ə");
car = car.replace(/ჸ/g, "ʔ");

// nuskhuri
car = car.replace(/ⴀ/g, "a");
car = car.replace(/ⴁ/g, "b");
car = car.replace(/ⴂ/g, "g");
car = car.replace(/ⴃ/g, "d");
car = car.replace(/ⴄ/g, "e");
car = car.replace(/ⴅ/g, "v");
car = car.replace(/ⴆ/g, "z");
car = car.replace(/ⴇ/g, "t");
car = car.replace(/ⴈ/g, "i");
car = car.replace(/ⴉ/g, "k’");
car = car.replace(/ⴊ/g, "l");
car = car.replace(/ⴋ/g, "m");
car = car.replace(/ⴌ/g, "n");
car = car.replace(/ⴍ/g, "o");
car = car.replace(/ⴎ/g, "p’");
car = car.replace(/ⴏ/g, "zh");
car = car.replace(/ⴐ/g, "r");
car = car.replace(/ⴑ/g, "s");
car = car.replace(/ⴒ/g, "t’");
car = car.replace(/ⴓ/g, "u");
car = car.replace(/ⴔ/g, "p");
car = car.replace(/ⴕ/g, "k");
car = car.replace(/ⴖ/g, "gh");
car = car.replace(/ⴗ/g, "q’");
car = car.replace(/ⴘ/g, "sh");
car = car.replace(/ⴙ/g, "ch");
car = car.replace(/ⴚ/g, "ts");
car = car.replace(/ⴛ/g, "dz");
car = car.replace(/ⴜ/g, "ts’");
car = car.replace(/ⴝ/g, "ch’");
car = car.replace(/ⴞ/g, "kh");
car = car.replace(/ⴟ/g, "j");
car = car.replace(/ⴠ/g, "h"); 
car = car.replace (/ⴥ/g, "ō");

// asomtavruli
car = car.replace(/Ⴀ/g, "A");
car = car.replace(/Ⴁ/g, "B");
car = car.replace(/Ⴂ/g, "G");
car = car.replace(/Ⴃ/g, "D");
car = car.replace(/Ⴄ/g, "E");
car = car.replace(/Ⴅ/g, "V");
car = car.replace(/Ⴆ/g, "Z");
car = car.replace(/Ⴇ/g, "T");
car = car.replace(/Ⴈ/g, "I");
car = car.replace(/Ⴉ/g, "K’");
car = car.replace(/Ⴊ/g, "L");
car = car.replace(/Ⴋ/g, "M");
car = car.replace(/Ⴌ/g, "N");
car = car.replace(/Ⴍ/g, "O");
car = car.replace(/Ⴎ/g, "P’");
car = car.replace(/Ⴏ/g, "Zh");
car = car.replace(/Ⴐ/g, "R");
car = car.replace(/Ⴑ/g, "S");
car = car.replace(/Ⴒ/g, "T’");
car = car.replace(/Ⴓ/g, "U");
car = car.replace(/Ⴔ/g, "P");
car = car.replace(/Ⴕ/g, "K");
car = car.replace(/Ⴖ/g, "Gh");
car = car.replace(/Ⴗ/g, "Q’");
car = car.replace(/Ⴘ/g, "Sh");
car = car.replace(/Ⴙ/g, "Ch");
car = car.replace(/Ⴚ/g, "Ts");
car = car.replace(/Ⴛ/g, "Dz");
car = car.replace(/Ⴜ/g, "Ts’");
car = car.replace(/Ⴝ/g, "Ch’");
car = car.replace(/Ⴞ/g, "Kh");
car = car.replace(/Ⴟ/g, "J");
car = car.replace(/Ⴠ/g, "H"); 
car = car.replace (/Ⴥ/g, "Ō");
document.transcription.text2.value = car;
}
