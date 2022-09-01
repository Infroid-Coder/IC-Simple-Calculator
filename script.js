let execu = document.getElementById("num-two");
let obj = document.getElementById("num-one");
let operat = document.getElementById("operats");
let answerProcessor = document.getElementById("calc");
let answer = document.getElementById("answer");
let clear = document.getElementById("clear");

clear.onclick = function(){
    execu.value = "";
    obj.value = "";
    answer.value = "";
    answer.style.border = "solid white 2px";
}
answerProcessor.onclick = function() {
    if (operat.value == "+"){
        answer.value = Number(obj.value) + Number(execu.value);
        answer.style.border = "solid yellow 2px";
    }
    if (operat.value == "-"){
        answer.value = Number(obj.value) - Number(execu.value);
        answer.style.border = "solid yellow 2px";
    }
    if (operat.value == "*"){
        answer.value = Number(obj.value) * Number(execu.value);
        answer.style.border = "solid yellow 2px";
    }
    if (operat.value == "/"){
        answer.value = Number(obj.value) / Number(execu.value);
        answer.style.border = "solid yellow 2px";
    }
};