var cerrar= [];
var foto = [];

var restaurar = document.getElementById("fotosPandas")
var texto2 = document.getElementsByClassName("articulos")[1];
var btnExtincion = document.getElementsByClassName("barra")[1];
var btnOrigen = document.getElementsByClassName("barra")[0];

for(var i=0 ; i<4 ;i++){
  foto[i]= document.getElementsByClassName("img")[i];
  cerrar[i]=document.getElementsByClassName("close")[i];
  cerrar[i].addEventListener("click", cerrarFoto)
}

restaurar.addEventListener("click",restaurar);
btnExtincion.addEventListener("click", suprimirTexto);
btnOrigen.addEventListener("click",restaurarTexto)

function cerrarFoto(){
  cerrar.style.display = "none";
  foto.style.display="none";
}

function restaurar(){
  restaurar.style.display="inline-blocks";
}

function suprimirTexto(){
  texto.style.display = "none";
}

function restaurarTexto(){
  texto.style.display = "inline-block"
}
