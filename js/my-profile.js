let firstName = document.getElementById("firstName");//valor del primer nombre
let secondName = document.getElementById("secondName");//valor del segundo nombre
let firstLastname = document.getElementById("firstLastname");//valor de primer apellido
let secondLastname = document.getElementById("secondLastname");//valor del segundo apellido
let phoneNumber = document.getElementById("phoneNumber");//valor del número de teléfono
let email = document.getElementById("email");//campo donde va el mail
let saveChangesBtn = document.getElementById("saveChanges");//botón "guardar cambios"
let changesSavedAlert = document.getElementById("changesSavedAlert");//alerta de guardar cambios
let form = document.getElementById("form");//formulario datos del perfil 

saveChangesBtn.addEventListener("click", () => {
    if ((firstName.value.lenght > 0 ) && (firstLastname.value.lenght > 0) && (phoneNumber.value.lenght > 0)) 
        changesSavedAlert.classList.add("show")
        if (firstName.value) localStorage.setItem("firstNameValue", firstName.value);
        if (firstLastname.value) localStorage.setItem("firstLastnameValue", firstLastname.value);
        if (phoneNumber.value) localStorage.setItem("phoneNumberValue", phoneNumber.value) 
})

document.addEventListener("DOMContentLoaded", function(){
    email.value = localStorage.getItem("username")
    firstName.value = localStorage.getItem("firstNameValue")
    firstLastname.value = localStorage.getItem("firstLastnameValue")
    phoneNumber.value = localStorage.getItem ("phoneNumberValue")
})

function changesSaved(){
    if ((firstName.value.lenght > 0 ) && (firstLastname.value.lenght > 0) && (phoneNumber.value.lenght > 0)) 
        changesSavedAlert.classList.add("show")
}


