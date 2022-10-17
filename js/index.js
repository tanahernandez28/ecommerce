function ingresar() {
    const email = document.getElementById('email').value;
    const contra = document.getElementById('contraseña').value;
    const btnIngresar = document.getElementById('btnIngresar')
    if (email !== '' && contra !== '') {
        window.location.href = 'inicio.html'
    }else {
        alert('Ingresa los datos solicitados')
    }
}
btnIngresar.addEventListener("click", () => {
    if (email.value) localStorage.setItem("username", email.value);
}) 




