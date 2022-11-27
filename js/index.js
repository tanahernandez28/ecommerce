let email = "";
let contra = "";
let btnIngresar = document.getElementById('btnIngresar');
let alertLogin = document.getElementById("alertLogin");
let closeAlertLogin = document.getElementById("closeAlertLogin");

function ingresar() {
    email = document.getElementById('email').value;
    contra = document.getElementById('contraseña').value;
    if (email !== '' && contra !== '') {
        localStorage.setItem("username", email);
        window.location.href = 'inicio.html'
    } else {
        alertLogin.classList.add("show")
    }
}

closeAlertLogin.addEventListener("click", function(){
    alertLogin.classList.remove("show")
})






