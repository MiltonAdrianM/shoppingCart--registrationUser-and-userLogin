muestraUsuario();

function muestraUsuario(){
    let user = document.querySelector('#user');

    let actUser = JSON.parse (sessionStorage.getItem('UsuarioActivo'));

    let bUser = actUser.length;

    for (let i=0; i < bUser; i++){
        let vistactUser = document.createElement('h3');

        let nodeUser = document.createTextNode(actUser[i]);

        bUser.appendChild(vistactUser.appendChild(nodeUser));

        user.appendChild(vistactUser);
    }

   

}