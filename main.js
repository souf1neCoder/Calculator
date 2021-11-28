let inputs = document.querySelectorAll(".buttons input");
let ArrayInputs = Array.from(inputs);
let equal = document.getElementById("equal")
for (let i = 0; i < ArrayInputs.length; i++) {
    ArrayInputs[i].onclick = function () {
        equal.onclick = function () {
            if (display.value == "") {
                alert("Please Enter Any Numbers To Calc!");
            } else{
                document.forms.display.value = eval(document.forms.display.value);
            }
        }
        if (ArrayInputs[i].value == "C") {
            document.forms.display.value = "";
        }
        else{
            document.forms.display.value += ArrayInputs[i].value;
        }  
    }  
}
