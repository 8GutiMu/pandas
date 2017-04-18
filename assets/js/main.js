var cerrar= [];
var restaurar = document.getElementById("fotosPandas")

for(var i=0 ; i<4 ;i++){
  cerrar[i]=document.getElementsByClassName("img")[i];
  cerrar[i].addEventListener("click", cerrarFoto)
}

restaurar.addEventListener("click",restaurar);

function cerrarFoto(){
  cerrar.style.display ="none"
}

function restaurar(){
  restaurar.style.display="inline-blocks";
}

console.log("hijaso")
