// 定数の多性

const test = {
  color: "pink",
  size: "large",
  purfume: "mint",
  //ここに関数を入れることもできる
  gotoilet: () => {
    console.log("Hello World");
  },
};
// console.log(test);
// console.log(test.color);//カラーだけを表示
console.log(test.gotoilet());

// 全部出すのではなくカラーだけを出すこともできる
// オブジェクトは複数の値を値を持てる.
