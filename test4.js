const animals = "penguin";

if (animals === "penguin") {
  alert("ペンギンだ！");
} else if (animals === "monkey") {
  alert("モンキーだ！");
} else {
  alert("動物じゃないやんけ！");
}

console.log(typeof "kotone");
// typeofは中のそのものを出力するのではなく値がどの種類のデータかを判定した結果を出力される
// この場合はstringと出る（文字列）という意味

// 数値（nummber)
// 文字列（string)

// 真偽値（boolean)
console.log(typeof true); //Boolean
console.log(typeof "true"); //string
console.log(false);
// これをtypeof使って出力させると(boolean)とでる
