const animals = "penguin";

if (animals === "penguin") {
  alert("ペンギンだ！");
} else if (animals === "monkey") {
  alert("モンキーだ！");
} else {
  alert("動物じゃないやんけ！");
}

// console.log(typeof "kotone");
// // typeofは中のそのものを出力するのではなく値がどの種類のデータかを判定した結果を出力される
// // この場合はstringと出る（文字列）という意味

// // 数値（nummber)
// // 文字列（string)

// // 真偽値（boolean)
console.log(typeof true); //Boolean
console.log(typeof "true"); //string
console.log(false);
// これをtypeof使って出力させると(boolean)とでる

// if文はtrueかfalseのどちらかで答えがでる
// 例）
const X = 3;
if (X) {
  alert("この文は正しいです");
} else {
  alert("この文は間違っています");
}

// この場合は数値が３だからfalseで認識されて上の文が実行される
// 数値は「０」か「-0」じゃなかったらtrueになるのがjavascriptのルール

let X = 1;
if (X > 3) {
  alert("3よりおおきい");
} else if (X === 3) {
  //else if　をいくつも分岐することができる
  //等しいと書きたい場合は===イコールを３つ
  alert("3と同じです");
} else {
  //上のどちらもfalseなら一番下が実行される
  alert("3より小さいです");
}
