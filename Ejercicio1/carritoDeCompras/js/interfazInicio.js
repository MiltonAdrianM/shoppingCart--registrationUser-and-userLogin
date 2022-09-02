document.querySelector('#buttons').addEventListener('click', inicioSesion);

function inicioSesion(){
    
    let UserName = '';
    let contraseña = '';
    let acceso = false;
    let button = document.querySelector("#buttons");

    UserName = document.querySelector('#userField').value;
    contraseña = document.querySelector('#PasswordField').value;

    acceso = validarUsuario(UserName, contraseña);
    const divElement = document.querySelector("#user");
    
    if(acceso == true){
        divElement.textContent = `¡Hola!,  ${UserName}`;
        document.querySelector('#PasswordField').value= "";
        document.querySelector('#userField').value = "";
        button.disabled = true;
        botonComprar.disabled = false;
    } else {
        alert("Usuario o contraseña errónea");
    }
    console.log(acceso);
}



