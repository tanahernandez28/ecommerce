let firstName = document.getElementById("firstName");//valor del primer nombre
let secondName = document.getElementById("secondName");//valor del segundo nombre
let firstLastname = document.getElementById("firstLastname");//valor de primer apellido
let secondLastname = document.getElementById("secondLastname");//valor del segundo apellido
let contactPhoneNumber = document.getElementById("contactPhoneNumber");//valor del número de teléfono
let email = document.getElementById("email");//campo donde va el mail
let saveChangesBtn = document.getElementById("saveChanges");//botón "guardar cambios"

saveChangesBtn.addEventListener("click", function() {
    if ((firstName.value.length > 0 ) && (firstLastname.value.length > 0 ) && (contactPhoneNumber.value.length > 0 )){
        localStorage.setItem("firstNameValue", firstName.value)
        localStorage.setItem("firstLastnameValue", firstLastname.value)
        localStorage.setItem("contactPhoneNumberValue", contactPhoneNumber.value)
    }
  })

document.addEventListener("DOMContentLoaded", function(){
    email.value = localStorage.getItem("username")
    if (localStorage.getItem("firstNameValue")) firstName.value = localStorage.getItem("firstNameValue");
    if (localStorage.getItem("firstLastnameValue")) firstLastname.value = localStorage.getItem("firstLastnameValue");
    if (localStorage.getItem("contactPhoneNumberValue")) contactPhoneNumber.value = localStorage.getItem("contactPhoneNumberValue");
})

