var cerrar= [];
var foto = [];
var restaurar = document.getElementById("fotosPandas")

for(var i=0 ; i<4 ;i++){
  foto[i]= document.getElementsByClassName("img")[i];
  cerrar[i]=document.getElementsByClassName("close")[i];
  cerrar[i].addEventListener("click", cerrarFoto)
}

restaurar.addEventListener("click",restaurar);

function cerrarFoto(){
  cerrar.style.display = "none";
}

function restaurar(){
  restaurar.style.display="inline-blocks";
}
