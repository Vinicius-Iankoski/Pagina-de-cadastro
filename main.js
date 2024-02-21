function analiseEmail() {
    let email = document.getElementById("email-input").value;
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(email)) {
        alert("Favor digitar email corretamente")
        return false
    } else {
        document.getElementById("email-input").value = null;
        return true
    }
}
function analiseSenhas() {
    let confirmacao = document.getElementById("confirm-input").value;
    let senha = document.getElementById("password-input").value;

    if (senha !== confirmacao) {
        alert("senhas diferentes!");
        return false;
    } else {
        document.getElementById("confirm-input").value = null;
        document.getElementById("password-input").value = null;
        return true;
    }
};
