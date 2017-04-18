var cerrar= document.getElementsByClassName("close")
var foto = [];

var btnrestaurar = document.getElementsByClassName("barra")[2];
var texto2 = document.getElementsByClassName("articulos")[1];
var btnExtincion = document.getElementsByClassName("barra")[1];
var btnOrigen = document.getElementsByClassName("barra")[0];



btnsrestaurar.addEventListener("click",restaurar);
btnExtincion.addEventListener("click", suprimirTexto);
btnOrigen.addEventListener("click",restaurarTexto);


function cerrarFotosDePandas(){
  [].forEach.call(cerrar,function(elemento){
    elemento.addEventListener("click",cerrarFoto)
  });
}

cerrarFotosDePandas();

function cerrarFoto(){
  var imgPanda = this.parentElement;
  imgPanda.style.display = "none";
}

function restaurar(){
  for(var i = 0; i<cerrar.length; i++){
   cerrar[i].parentElement.style.display = "inline-block";
 }
}

function suprimirTexto(){
  texto.style.display = "none";
}

function restaurarTexto(){
  texto.style.display = "inline-block"
}
