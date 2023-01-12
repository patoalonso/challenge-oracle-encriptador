let botonEncriptar = document.querySelector("#boton-encriptar");
botonEncriptar.onclick = total


function total () {
desaparecer(); encriptar(); aparecer();
}


function desaparecer () {
document.getElementById("a").style.display = "none";  
document.getElementById("b").style.display = "none";
}

function encriptar () {
let textoIntroducido = document.querySelector("#texto").value;
let textoEncriptado = textoIntroducido.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat");  
document.querySelector(".texto-salida").value = textoEncriptado;
document.querySelector("#texto").value;
}

function aparecer () {
document.getElementById("c").style.display = "block"; 
}


let botonDesencriptar = document.querySelector("#boton-desencriptar");
botonDesencriptar.onclick = desencriptar; 

function desencriptar () {
let textoIntroducido = document.querySelector("#texto").value;
let textoEncriptado = textoIntroducido.replace("enter", "e").replace("imes", "i").replace("ai", "a").replace("ober", "o").replace("ufat", "u");  
document.querySelector(".texto-salida").value = textoEncriptado;
document.querySelector("#texto").value;
}

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("msg");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    //alert("Copied the text: " + copyText.value);
}

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos parainserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.

El resultado debe ser mostrado en la pantalla.

Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.*/
