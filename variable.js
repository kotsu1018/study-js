let message;
// letで箱を作る
message = "Hello";
// ＝で箱の中にデータを入れる
// console.log(message);
// データを出力する。”を付けると文字列と認識されるため箱の中のデータを出力するには”はいらない

let name;
name = "チャウヌ";
let age;
age = 25;
let phoneNumber;
phoneNumber = "01012345678";
// console.log(name);
// console.log(age);
// console.log(phoneNumber);
// ”は文字列の場合につける。ただし出力する時は使わない
// 出力の時に、０は初めに使うことができない

console.log("私の名前は " + name + "です " + age + "歳です");
// 出力する時の箱の名前は”をつけない
console.log(`私の名前は ${name}`);

let a;
a = 10;
let b;
b = 100;
let c;
c = a * b;

console.log(`axb= ${c}`);

// コピー
let 名前;
// 名前という箱の中に田中を入れる
名前 = "田中";

let コピー名前;
// コピー名前の中に＝で同じ田中を入れたい時●＝●でコピーができる
コピー名前 = 名前;

console.log(コピー名前);
