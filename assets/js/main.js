var cerrar= document.getElementsByClassName("close")
var btnrestaurar = document.getElementsByClassName("barra")[2];
var btnExtincion = document.getElementsByClassName("barra")[1];
var btnOrigen = document.getElementsByClassName("barra")[0];

btnrestaurar.addEventListener("click",restaurar);
btnExtincion.addEventListener("click", modificarTextoExtincion);
btnOrigen.addEventListener("click",modificarTextoOrigen);


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

function modificarTextoOrigen(){
  var texto1 = document.getElementsByTagName("article")[0];

    if(texto1.style.visibility === "hidden"){
      texto1.style.visibility = "visible";
    }else{
      texto1.style.visibility = "hidden";
    }
}

function modificarTextoExtincion(){
  var texto1 = document.getElementsByTagName("article")[1];
  if(texto1.style.visibility === "hidden"){
    texto1.style.visibility = "visible";
  }else{
    texto1.style.visibility = "hidden";
  }
}
