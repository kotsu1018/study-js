// htmlをとjsを使って表示させること

const name = document.getElementById("name");
const age = document.getElementById("age");
const school = document.getElementById("school");
const inputText = document.getElementById("inputText");

let nameData = "Harry potter";
name.innerText = `私は ${nameData} です.`;

const agedata = 25;
age.innerText = `${agedata}歳です。`;

const schooldata = "ホグワーツ";
school.innerText = `${schooldata}に通っています。`;

inputText.addEventListener("change", (e) => {
  nameData = e.target.value;
  name.innerText = `私は ${nameData} です.`;
  e.target.value = "";
});
