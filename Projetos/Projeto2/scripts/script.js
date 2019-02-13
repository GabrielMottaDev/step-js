function insert(num) {
    document.getElementById("visor").value += num;
    document.getElementById("clean").classList.add("unvanish");
}

function clean(){
    document.getElementById("visor").value = "";
    document.getElementById("clean").classList.remove("unvanish");
}

function equal() {
    var value = document.getElementById("visor").value;
    if (value) {
        var resultado = eval(value);

        addRewind(value, resultado);

        document.getElementById("visor").value = resultado;
    }

}

function squareRoot(){
    var value = document.getElementById("visor").value;

    if (value) {
        var resultado = eval(value);
        resultado = Number(resultado);
        resultado = Math.sqrt(resultado);
        addRewind(value, resultado);
        document.getElementById("visor").value = resultado;
    }
}

function addRewind(conta, resultado){
    document.getElementById("operations").innerHTML += "<input type=\"button\" value=\"" + conta + " = " + resultado + "\" onclick=\"rewind(this.value)\">"
    document.getElementById("operations").classList.add("unvanish");
}

function rewind(conta) {
    conta = conta.split(" = ")[1];
    document.getElementById("visor").value = conta;
}

document.addEventListener("keydown", function (e) {
    var keyCode = e.key;
    if (keyCode == "0" || keyCode == "1" || keyCode == "2" || keyCode == "3" || keyCode == "4" || keyCode == "5" || keyCode == "6" || keyCode == "7" || keyCode == "8" || keyCode == "9" || keyCode == "-" || keyCode == "+" || keyCode == "." || keyCode == "/" || keyCode == "*" || keyCode == "%") {
        insert(keyCode);
    } else if (keyCode == "=" || keyCode == "Enter") {
        equal();
    } else if (keyCode == "Backspace"){
        clean();
    }
});