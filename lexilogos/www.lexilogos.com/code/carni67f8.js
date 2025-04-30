//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value.toLowerCase();
car = car.replace(/_/g, "ー");
car = car.replace(/[ôō]/g, "oう");
car = car.replace(/[ūû]/g, "uう");
car = car.replace(/[âā]/g, "aあ");
car = car.replace(/[îī]/g, "iい");
car = car.replace(/[êē]/g, "eい");

car = car.replace(/n/g, "ん");
car = car.replace(/q/g, "っ");
car = car.replace(/tsu/g, "つ");
car = car.replace(/dzu/g, "づ");
car = car.replace(/dju/g, "づ"); 
car = car.replace(/dji/g, "ぢ");
car = car.replace(/kya/g, "きゃ");
car = car.replace(/kyu/g, "きゅ");
car = car.replace(/kyo/g, "きょ");
car = car.replace(/んya/g, "にゃ");
car = car.replace(/んyu/g, "にゅ");
car = car.replace(/んyo/g, "にょ");
car = car.replace(/sha/g, "しゃ");
car = car.replace(/shi/g, "し");
car = car.replace(/shu/g, "しゅ");
car = car.replace(/sho/g, "しょ");
car = car.replace(/chi/g, "ち");
car = car.replace(/cha/g, "ちゃ");
car = car.replace(/chu/g, "ちゅ");
car = car.replace(/cho/g, "ちょ");
car = car.replace(/hya/g, "ひゃ");
car = car.replace(/hyu/g, "ひゅ");
car = car.replace(/hyo/g, "ひょ");
car = car.replace(/mya/g, "みゃ");
car = car.replace(/myu/g, "みゅ");
car = car.replace(/myo/g, "みょ");
car = car.replace(/rya/g, "りゃ");
car = car.replace(/ryu/g, "りゅ");
car = car.replace(/ryo/g, "りょ");
car = car.replace(/gya/g, "ぎゃ");
car = car.replace(/gyu/g, "ぎゅ");
car = car.replace(/gyo/g, "ぎょ");
car = car.replace(/bya/g, "びゃ");
car = car.replace(/byu/g, "びゅ");
car = car.replace(/byo/g, "びょ");
car = car.replace(/pya/g, "ぴゃ");
car = car.replace(/pyu/g, "ぴゅ");
car = car.replace(/pyo/g, "ぴょ");
car = car.replace(/ja/g, "じゃ");
car = car.replace(/ju/g, "じゅ");
car = car.replace(/jo/g, "じょ");
car = car.replace(/ba/g, "ば");
car = car.replace(/da/g, "だ");
car = car.replace(/ga/g, "が");
car = car.replace(/ha/g, "は");
car = car.replace(/ka/g, "か");
car = car.replace(/ma/g, "ま");
car = car.replace(/んa/g, "な");
car = car.replace(/pa/g, "ぱ");
car = car.replace(/ra/g, "ら");
car = car.replace(/sa/g, "さ");
car = car.replace(/ta/g, "た");
car = car.replace(/wa/g, "わ");
car = car.replace(/ya/g, "や");
car = car.replace(/za/g, "ざ");
car = car.replace(/be/g, "べ");
car = car.replace(/de/g, "で");
car = car.replace(/ge/g, "げ");
car = car.replace(/he/g, "へ");
car = car.replace(/ke/g, "け");
car = car.replace(/me/g, "め");
car = car.replace(/んe/g, "ね");
car = car.replace(/pe/g, "ぺ");
car = car.replace(/re/g, "れ");
car = car.replace(/we/g, "ゑ");
car = car.replace(/se/g, "せ");
car = car.replace(/te/g, "て");
car = car.replace(/ze/g, "ぜ");
car = car.replace(/bi/g, "び");
car = car.replace(/gi/g, "ぎ");
car = car.replace(/hi/g, "ひ");
car = car.replace(/ki/g, "き");
car = car.replace(/si/g, "し");
car = car.replace(/ti/g, "ち");
car = car.replace(/mi/g, "み");
car = car.replace(/んi/g, "に");
car = car.replace(/pi/g, "ぴ");
car = car.replace(/ri/g, "り");
car = car.replace(/wi/g, "ゐ");
car = car.replace(/ji/g, "じ");
car = car.replace(/zi/g, "じ");
car = car.replace(/bo/g, "ぼ");
car = car.replace(/do/g, "ど");
car = car.replace(/go/g, "ご");
car = car.replace(/ho/g, "ほ");
car = car.replace(/ko/g, "こ");
car = car.replace(/mo/g, "も");
car = car.replace(/んo/g, "の");
car = car.replace(/po/g, "ぽ");
car = car.replace(/ro/g, "ろ");
car = car.replace(/so/g, "そ");
car = car.replace(/to/g, "と");
car = car.replace(/wo/g, "を");
car = car.replace(/yo/g, "よ");
car = car.replace(/zo/g, "ぞ");
car = car.replace(/bu/g, "ぶ");
car = car.replace(/gu/g, "ぐ");
car = car.replace(/fu/g, "ふ");
car = car.replace(/hu/g, "ふ");
car = car.replace(/ku/g, "く");
car = car.replace(/mu/g, "む");
car = car.replace(/んu/g, "ぬ");
car = car.replace(/pu/g, "ぷ");
car = car.replace(/ru/g, "る");
car = car.replace(/su/g, "す");
car = car.replace(/tu/g, "つ"); // dd
car = car.replace(/yu/g, "ゆ");
car = car.replace(/zu/g, "ず");

//obsoletes
car = car.replace(/yi/g, "𛀆");
car = car.replace(/ye/g, "𛀁");
car = car.replace(/wu/g, "𛄟");

// cas des doublons
car = car.replace(/di/g, "ぢ");
car = car.replace(/じ=/g, "ぢ");
car = car.replace(/du/g, "づ");
car = car.replace(/ず=/g, "づ");

car = car.replace(/a/g, "あ");
car = car.replace(/[eé]/g, "え");
car = car.replace(/i/g, "い");
car = car.replace(/o/g, "お");
car = car.replace(/u/g, "う");
car = car.replace(/v/g, "ゔ");

car = car.replace(/つ=/g, "っ");
car = car.replace(/あ=/g, "ぁ");
car = car.replace(/い=/g, "ぃ");
car = car.replace(/う=/g, "ぅ");
car = car.replace(/え=/g, "ぇ");
car = car.replace(/お=/g, "ぉ");
car = car.replace(/や=/g, "ゃ");
car = car.replace(/ゆ=/g, "ゅ");
car = car.replace(/よ=/g, "ょ");

car = car.replace(/\./g, "。");
car = car.replace(/,/g, "、");
car = car.replace(/\!/g, "！");
car = car.replace(/\?/g, "？");
car = car.replace(/\:/g, "：");
car = car.replace(/\(/g, "（");
car = car.replace(/\)/g, "）");
car = car.replace(/\[/g, "［");
car = car.replace(/\]/g, "］");
car = car.replace(/«/g, "「");
car = car.replace(/»/g, "」");

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