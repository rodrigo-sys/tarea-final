textos = document.querySelectorAll("div.texto");

let texto_actual = document.querySelector('#texto_actual');

indice_actual = 0;
texto_actual.innerHTML = textos[indice_actual].innerHTML;

let boton_siguiente = document.querySelector('#siguiente');
let boton_anterior = document.querySelector('#anterior');

boton_siguiente.onclick = function() {

  if(indice_actual < textos.length - 1){
    indice_actual += 1;
  } 

  texto_actual.innerHTML = textos[indice_actual].innerHTML;
}

boton_anterior.onclick = function() {
  if(indice_actual != 0){
    indice_actual -= 1;
  } 

  texto_actual.innerHTML = textos[indice_actual].innerHTML;
}
