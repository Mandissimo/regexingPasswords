function callback() {
    var password = document.getElementById("passcode").value;
    let expression = /[0-9]{3}[a-z]{4}[0-9]/;
    if (expression.test(password)) {
        document.getElementById("verif ").innerHTML = "OK";
    } else {
        document.getElementById("verif ").innerHTML = "Passcode not in the correct format";
    }
}