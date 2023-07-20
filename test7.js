// function myAlert() {
//   //関数宣言function
//   alert("こんにちは");
//   alert("うさぎです");
// }
// myAlert();
// myAlert();
// myAlert();
//これは３回呼び出されている　ことになる

// function myAlert(greeting) {
//   //関数宣言function
//   alert(greeting);
//   alert("うさぎです");
// }
// myAlert("こんばんは");
// greetingをこんばんはに差し替えたことになる

// function myAlert(greeting, channelName) {
//   //引数を複数
//   alert(greeting);
//   alert(channelName + "です");
// }
// myAlert("おはよ", "うさぎ");

function myAlert(greeting = "ヤッホー") {
  //これは引数にデフォルト値を設定することができるため、ヤッホーが表示される
  alert(greeting);
  alert("うさぎです");
}
myAlert("こんにちは");
//これは引数にこんにちはを差しかられているため、こんにちはが優先されて表示される
// myAlert();
//これはgreetingの実行を何に差し替えるかをかいてないからちゃんと表示されない
