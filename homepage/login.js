function show() {
    var p = document.getElementById('pws');
    p.setAttribute('type', 'text');
}
function hide() {
    var p = document.getElementById('pws');
    p.setAttribute('type', 'password');
}

var pwShown = 0;
document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown == 1;
        show();
    }
    else {
        pwShown == 0;
        hide();
    }
}, false);

function signin() {
    var username = document.getElementById("txt-input");
    var password = document.getElementById("pws");
    if (username.value == "") {
        alert("Please enter your username")
        username.focus();
        return false;
    }
    if (password.value != "") {
        if (password.value.length < 8) {
            alert("Password must be at least 8 characters");
            password.focus();
            return false;
        }
    }
    else {
        alert("Please enter your password");
        password.focus();
        return false;
    }
}

function Email(email) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
}

function login() {
    var username = document.getElementById("txt-input");
    var password = document.getElementById("pws");
    var email = document.getElementById("email");

    if (!admin(user, password)) {
        document.getElementById('error').innerHTML = "Login failed"
        return false;
    }
    return true;
}
function admin(user, password) {
    return user == 'admin' && password == '1234567' && email == 'admin@email.com'
}
