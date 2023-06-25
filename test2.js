// let username = window.prompt("Whta's your name?");
// console.log(username);

let username;
document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("mylabel").innerHTML = username;
};
