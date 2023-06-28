let admin;
let name;
name = "John";
admin = name;
// コピーしてnameと同じものを箱の中に入れるイメージ
console.log(admin);

// letを使えば変数をいろんな値を入れることができる
// constを使えば１つの値しか入れられない

let array = [1, 2, 3, 4, 5]; //lengthは配列の数を表してくれる
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index++;
}

let index = 0;
let sum = 0;

while (index < 10) {
  index++;
  sum += index;
  console.log(sum);
}
