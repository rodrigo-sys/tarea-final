textos = [];

function crearTexto(_titulo, _parrafo){
  texto = '';

  texto += `<h2>${_titulo}</h2>`;
  texto += `<p>${_parrafo}</p>`;

  textos.push(texto);

}

crearTexto("Titulo 0", "Parrafo 0");
crearTexto("Titulo 1", "Parrafo 1");
crearTexto("Titulo 2", "Parrafo 2");
crearTexto("Titulo 3", "Parrafo 3");
crearTexto("Titulo 4", "Parrafo 4");

let texto_actual = document.querySelector('#texto_actual');

indice_actual = 0;
texto_actual.innerHTML = textos[indice_actual];

let boton_siguiente = document.querySelector('#siguiente');
let boton_anterior = document.querySelector('#anterior');

boton_siguiente.onclick = function() {

  if(indice_actual < textos.length - 1){
    indice_actual += 1;
  } 

  texto_actual.innerHTML = textos[indice_actual];
}

boton_anterior.onclick = function() {
  if(indice_actual != 0){
    indice_actual -= 1;
  } 

  texto_actual.innerHTML = textos[indice_actual];
}
