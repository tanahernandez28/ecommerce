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
let changesNotSavedAlert = document.getElementById("changesNotSavedAlert");//alerta cambios no guardados
let closeChangesNotSavedAlert = document.getElementById("closeChangesNotSavedAlert");//cerrar alerta cambios no guardados
let username = localStorage.getItem("username"); //correo del usuario


document.addEventListener("DOMContentLoaded", function(){
    if (username !== null){
        firstName.value = localStorage.getItem("firstNameValue")
        secondName.value = localStorage.getItem("secondNameValue")
        firstLastname.value = localStorage.getItem("firstLastnameValue")
        secondLastname.value = localStorage.getItem("secondLastnameValue")
        phoneNumber.value = localStorage.getItem("phoneNumberValue")
        email.value = username;
    }
})

saveChangesBtn.addEventListener("click", function(){
    if((firstName.value.lenght > 0) && (firstLastname.value.lenght > 0) && (phoneNumber.value.lenght > 0))
    changesSavedAlert.classList.add("show")
})

form.addEventListener("submit", function(event){
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        validateForm()
    }
    form.classList.add("was-validated")
})

function validateForm(){
    let firstNameValue = document.getElementById("firstName").value;
    let firstLastnameValue = document.getElementById("firstLastname").value; 
    let phoneNumberValue = document.getElementById("phoneNumber").value;
    let secondNameValue = document.getElementById("secondName").value;
    let secondLastnameValue = document.getElementById("secondLastname").value;
    if((firstNameValue.length > 0) && (firstLastname.value.length > 0) && (phoneNumber.value.length > 0)){
        changesNotSavedAlert.classList.remove("show")
        changesSavedAlert.classList.add("show")
        localStorage.setItem("firstNameValue", firstNameValue)
        localStorage.setItem("firstLastnameValue", firstLastnameValue)
        localStorage.setItem("phoneNumberValue", phoneNumberValue)
        localStorage.setItem("secondNameValue", secondNameValue)
        localStorage.setItem("secondLastnameValue", secondLastnameValue)
    }else {
        changesSavedAlert.classList.remove("show")
        changesNotSavedAlert.classList.add("show")
    }
    
}

closeChangesAlert.addEventListener("click", function () {
    changesSavedAlert.classList.remove("show")
})

closeChangesNotSavedAlert.addEventListener("click", function () {
    closeChangesNotSavedAlert.classList.remove("show")
})
