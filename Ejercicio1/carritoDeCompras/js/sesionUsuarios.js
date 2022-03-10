//se obtiene usuario y se almacena en localstorage

function obtenerUsuarios(){
    let usuarios = JSON.parse(localStorage.getItem('usuariosLs'));
    
    if (usuarios == null){
        usuarios = 
        [// usuario, contraseña, para desarrollo
            ['Adrian', '12345']
        ];
    }
    return usuarios;
} 

//se valida usuario y si existe se establece como usuario activo

function validarUsuario (vNombre, vPass) {
    let usuarios = obtenerUsuarios();
    let acceso = false;

    for(let i = 0; i < usuarios.length; i++){
        if (vNombre == usuarios[i][0] && vPass == usuarios[i][1]){
            acceso = true;
            sessionStorage.setItem('UsuarioActivo', usuarios[i][1]);
        }  
    }
    return acceso;
}