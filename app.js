
let listaAmigos = [];
let ingresarAmigo = document.getElementById("amigo");

function agregarAmigo(){
    let nombre = ingresarAmigo.value.trim();

    if (!nombre){
        alert("Por favor, ingresa un nombre.");
        return;
    }
    
    if(listaAmigos.includes(nombre)){
        alert("El amigo ya esta en el sorteo.");
        ingresarAmigo.value = "";
        return;
    }

    listaAmigos.push(nombre);
    document.getElementById("listaAmigos").innerHTML += `<li>${nombre}</li>`;
    ingresarAmigo.value = "";

}

function sortearAmigo(){
    if(listaAmigos.length === 0 || listaAmigos.length === 1){
        alert("Agrega al menos dos amigos");
        return;
    }

    let random = Math.floor(Math.random()*listaAmigos.length);
    let amigoSecreto = listaAmigos[random];
    document.getElementById("resultado").innerHTML = `<li>El amigo secreto es ... ${amigoSecreto}</li>`;

}

function reiniciar(){
    location.reload();
}
