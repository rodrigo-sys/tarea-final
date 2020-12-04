function activarBoton(selector_boton){
    document.querySelector(selector_boton).style = '';
}

function desactivarBoton(selector_boton){
    document.querySelector(selector_boton).style.background = 'gray';
    document.querySelector(selector_boton).style.textDecoration = 'none';
}

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

  if(indice_actual != 0){
    activarBoton("#anterior");
  }

  if(indice_actual == textos.length - 1){
    desactivarBoton("#siguiente");
  } 

  texto_actual.innerHTML = textos[indice_actual].innerHTML;
}

boton_anterior.onclick = function() {
  if(indice_actual != 0){
    indice_actual -= 1;
  } 

  if(indice_actual != textos.length - 1){
    activarBoton("#siguiente");
  } 

  if(indice_actual == 0){
    desactivarBoton("#anterior");
  } 

  texto_actual.innerHTML = textos[indice_actual].innerHTML;
}

if(indice_actual == 0){
    desactivarBoton("#anterior");
} 


