let firstName = document.getElementById("firstName");//input del primer nombre
let secondName = document.getElementById("secondName");//input del segundo nombre
let firstLastname = document.getElementById("firstLastname");//input de primer apellido
let secondLastname = document.getElementById("secondLastname");//input del segundo apellido
let phoneNumber = document.getElementById("phoneNumber");//input del número de teléfono
let email = document.getElementById("email");//input donde va el mail
let saveChangesBtn = document.getElementById("saveChanges");//botón "guardar cambios"
let changesSavedAlert = document.getElementById("changesSavedAlert");//alerta de guardar cambios
let form = document.getElementById("form");//formulario datos del perfil 
let closeChangesAlert = document.getElementById("closeChangesAlert");//cerrar alerta de guardar cambios
let username = localStorage.getItem("username"); //correo del usuario

if (username !== null){
    firstName.value = localStorage.getItem("firstNameValue")
    secondName.value = localStorage.getItem("secondNameValue")
    firstLastname.value = localStorage.getItem("firstLastnameValue")
    secondLastname.value = localStorage.getItem("secondLastnameValue")
    phoneNumber.value = localStorage.getItem("phoneNumberValue")
    email.value = username
}

form.addEventListener("submit", saveChanges);

function saveChanges() {
    if (firstName.value.lenght > 0 && firstLastname.value.lenght > 0 && phoneNumber.value.lenght > 0){
    changesSavedAlert.classList.add("show")}
}


closeChangesAlert.addEventListener("click", function () {
    changesSavedAlert.classList.remove("show")})
