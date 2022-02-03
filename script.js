let today = new Date();
const day = today.getDay();
const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
const year = today.getFullYear();
const date = today.getDate();
const month = today.getMonth() + 1;
let time =  today.getHours() + ":" +  today.getMinutes() + ":" +  today.getSeconds();
document.getElementById("datacheck").innerHTML = '<b>Year: </b>' + year + ' <br> <b>Today is: </b>' + weeks[day] + ' <br><b> Date: </b>' + date + ' <br><b> Month: </b>' + month + ' <br><b> Current time is: </b>' + time;

var dateNow = new Date("02/03/2022");
var gr = new Date("05/25/2024");//idk correct date of graduation, so i picked default school graduation date
var eqwe = gr.getTime() - dateNow.getTime();
var res = eqwe / (1000 * 3600 * 24);
document.getElementById("remain").innerHTML = (res > 1 ? res + " days" : res + " day") + "  left until the freedom!";
function multiply() {
    document.querySelector("#result").innerHTML = document.querySelector("#fNum").value * document.querySelector("#sNum").value;
}

function divide() {
    document.querySelector("#result").innerHTML = document.querySelector("#fNum").value / document.querySelector("#sNum").value;
}
