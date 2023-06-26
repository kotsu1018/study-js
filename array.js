let inoki = ["いーち", "にーい", "さーん"];
console.log(inoki);
console.log(inoki[1]);
// 表示したい数字を[]に書くと実行される（数字は０〜カウントされる）

let index = 0;
while (index < inoki.length) {
  //   // lengthは上のイノキの配列の数
  //   //=4
  //   // 繰り返したい命令文を書く
  console.log(inoki[index]);
  index++;
  //   ++はプラス１
  //   console.logを{}の外に書けば繰り返し終わった５の数字になった後を表示される
}

if (inoki.length > 3) {
  // もしイノキの配列数が２より少ないならボンバイエを表示させる
  // ２より多いなら表示しない
  console.log("ボンバイエ");
} else {
  console.log("ボンバ...");
}
//   elseはifの条件に当てはまらなかったら実行されるもの
